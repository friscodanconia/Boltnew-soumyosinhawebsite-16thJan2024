import express from 'express';
import cors from 'cors';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3001;

// Configure CORS to allow requests from your React app
app.use(cors({
  origin: '*', // Allow all origins during development
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Initialize Sanity client with token from environment variable
const client = createClient({
  projectId: 'i4pcg2lx',
  dataset: 'production',
  apiVersion: '2024-01-26',
  useCdn: false,
  token: 'skqkhmxBIOywCpNylr4YCtIf4nQLtOXYQw5UH4L4LlzwRynIAE5fPCMwuykEyHZlOEYXpxGOaqdHqbJqjHQf7ii7faSHb2QCGWFJlHVguCkAZZnmwvbWrVIb7H8JrUs1p1hTttDGJYQNDZoMzn6vlpDdx5J8SjN9I66JGSYVRUu683n0Oh5c',
  perspective: 'published'
});

// Initialize image URL builder
const builder = imageUrlBuilder(client);

// Debug route to check Sanity connection
app.get('/api/debug', async (req, res) => {
  try {
    const testQuery = await client.fetch('*[_type == "post"][0]');
    res.json({
      connected: true,
      sampleData: testQuery
    });
  } catch (error) {
    res.status(500).json({
      connected: false,
      error: error.message
    });
  }
});

// API endpoint to fetch all posts
app.get('/api/posts', async (req, res) => {
  try {
    console.log('Fetching all posts...');
    const posts = await client.fetch(`*[_type == "post"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "excerpt": pt::text(body[_type == "block"][0..1]),
      "author": author->name,
      "categories": categories[]->title,
      mainImage {
        asset-> {
          _id,
          url
        }
      }
    }`);

    console.log(`Found ${posts.length} posts`);

    // Transform image URLs and clean up data
    const transformedPosts = posts.map(post => ({
      ...post,
      excerpt: post.excerpt || null,
      mainImage: post.mainImage ? {
        ...post.mainImage,
        asset: {
          ...post.mainImage.asset,
          url: builder.image(post.mainImage.asset).url()
        }
      } : null,
      categories: post.categories || [],
      author: post.author || 'Anonymous'
    }));

    res.json(transformedPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts', details: error.message });
  }
});

// API endpoint to fetch a single post by slug
app.get('/api/posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    console.log('Fetching post with slug:', slug);
    
    const post = await client.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        "author": author->name,
        "categories": *[_type == "category" && references(^._id)].title,
        mainImage {
          asset-> {
            _id,
            url
          }
        },
        body[] {
          ...,
          _type == 'block' => {
            ...,
            // Skip the first block if it matches the title
            defined(style) && style == "normal" && _key != body[0]._key => {
              ...,
              children[] {
                ...,
                _type == 'span' => {
                  ...,
                  text
                }
              }
            }
          },
          _type == 'image' => {
            ...,
            asset->
          }
        }
      }
    `, { slug });

    if (!post) {
      console.log('Post not found for slug:', slug);
      return res.status(404).json({ error: 'Post not found' });
    }

    // Transform the mainImage URL if it exists
    if (post.mainImage && post.mainImage.asset) {
      post.mainImage.asset.url = builder.image(post.mainImage.asset).url();
    }

    console.log('Fetched post:', JSON.stringify(post, null, 2));
    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Failed to fetch post', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Has Sanity token:', true);
});
