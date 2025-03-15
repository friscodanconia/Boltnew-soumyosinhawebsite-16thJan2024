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
  origin: 'http://localhost:5187',
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
  token: process.env.SANITY_TOKEN || process.env.VITE_SANITY_TOKEN,
  perspective: 'published'
});

// Initialize image URL builder
const builder = imageUrlBuilder(client);

// Debug route to check environment variables
app.get('/api/debug', (req, res) => {
  res.json({
    hasToken: !!process.env.SANITY_TOKEN || !!process.env.VITE_SANITY_TOKEN,
    environment: process.env.NODE_ENV
  });
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
          children[] {
            ...,
            _type == 'span' => {
              ...,
              text
            }
          }
        },
        _type == 'image' => {
          ...,
          asset->
        }
      }
    }`);

    console.log('Posts fetched:', JSON.stringify(posts, null, 2));

    // Transform image URLs
    posts.forEach(post => {
      if (post.mainImage && post.mainImage.asset) {
        post.mainImage.asset.url = builder.image(post.mainImage.asset).url();
      }
    });

    res.json(posts);
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
            children[] {
              ...,
              _type == 'span' => {
                ...,
                text
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
  console.log('Has Sanity token:', !!process.env.SANITY_TOKEN || !!process.env.VITE_SANITY_TOKEN);
});
