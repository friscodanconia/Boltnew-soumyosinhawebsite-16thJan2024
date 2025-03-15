import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Log environment variables (without exposing sensitive data)
console.log('Sanity Config:', {
  hasProjectId: !!import.meta.env.VITE_SANITY_PROJECT_ID,
  hasToken: !!import.meta.env.VITE_SANITY_TOKEN,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production'
});

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: true,
  apiVersion: '2024-01-26',
});

export const builder = imageUrlBuilder(client);

export async function getPosts() {
  try {
    console.log('Fetching all posts...');
    const response = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt
    }`);
    console.log('Received posts:', response?.length || 0);
    return response;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function getPost(slug: string) {
  try {
    console.log('Fetching single post with slug:', slug);
    const response = await client.fetch(`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      body,
      mainImage {
        asset-> {
          _id,
          url
        }
      }
    }`, { slug });
    console.log('Received post data:', response ? 'found' : 'not found');
    return response;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}

export { client };