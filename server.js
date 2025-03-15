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
  origin: ['http://localhost:5173', 'https://soumyosinha.com'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Initialize Sanity client with token from environment variable
const client = createClient({
  projectId: 'i4pcg2lx',
  dataset: 'production',
  apiVersion: '2024-01-26',
  useCdn: true, // Enable CDN for better performance
  token: process.env.SANITY_TOKEN || 'skqkhmxBIOywCpNylr4YCtIf4nQLtOXYQw5UH4L4LlzwRynIAE5fPCMwuykEyHZlOEYXpxGOaqdHqbJqjHQf7ii7faSHb2QCGWFJlHVguCkAZZnmwvbWrVIb7H8JrUs1p1hTttDGJYQNDZoMzn6vlpDdx5J8SjN9I66JGSYVRUu683n0Oh5c',
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
        body[] {
          ...,
          _type == "block" => {
            ...,
            children[] {
              ...,
              _type == "span" => {
                ...,
                text
              }
            }
          },
          _type == "image" => {
            ...,
            asset-> {
              _id,
              url
            }
          }
        }
      }
    `, { slug });

    if (!post) {
      console.log('Post not found for slug:', slug);
      return res.status(404).json({ error: 'Post not found' });
    }

    // Transform image URLs if present
    if (post.body) {
      post.body = post.body.map(block => {
        if (block._type === 'image' && block.asset) {
          return {
            ...block,
            asset: {
              ...block.asset,
              url: builder.image(block.asset).url()
            }
          };
        }
        return block;
      });
    }

    console.log('Fetched post:', post.title);
    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Failed to fetch post', details: error.message });
  }
});

// Serve static files from the dist directory
app.use(express.static('dist'));

// Handle client-side routing by serving index.html for all non-API routes
app.get('*', (req, res, next) => {
  if (req.url.startsWith('/api/')) {
    next();
  } else {
    res.sendFile('dist/index.html', { root: __dirname });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Has Sanity token:', true);
});
