// Get the base API URL based on environment
const getApiUrl = () => {
  if (import.meta.env.DEV) {
    return 'http://localhost:3001';
  }
  // In production, use relative paths
  return '';
};

// All client-side data fetching should go through our local API server
export async function getPosts() {
  try {
    const response = await fetch(`${getApiUrl()}/api/posts`);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function getPost(slug: string) {
  try {
    const response = await fetch(`${getApiUrl()}/api/posts/${slug}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}