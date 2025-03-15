import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Log environment variables (without exposing sensitive data)
console.log('Sanity Config:', {
  hasProjectId: !!import.meta.env.VITE_SANITY_PROJECT_ID,
  hasToken: !!import.meta.env.VITE_SANITY_TOKEN,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production'
});

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: true,
  apiVersion: '2024-01-26',
  perspective: 'published'
});

export const builder = imageUrlBuilder(client);

export async function getPosts() {
  try {
    console.log('Fetching all posts...');
    const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url
        }
      }
    }`);
    console.log('Received posts:', posts?.length || 0);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function getPost(slug: string) {
  if (!slug) {
    throw new Error('No slug provided');
  }

  try {
    console.log('Fetching single post with slug:', slug);
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        body[] {
          ...,
          _type == "image" => {
            "url": asset->url
          }
        },
        mainImage {
          asset-> {
            _id,
            url
          }
        }
      }`,
      { slug }
    );

    console.log('Received post data:', post ? 'found' : 'not found');
    if (!post) {
      throw new Error(`Post not found for slug: ${slug}`);
    }
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}