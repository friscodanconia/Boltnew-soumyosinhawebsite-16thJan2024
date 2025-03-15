import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileHeader } from './MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string | null;
  author: string | null;
  categories: string[] | null;
  excerpt: string | null;
  mainImage?: {
    asset: {
      url: string;
    };
  };
}

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        setError(null);
        // Use relative URL to automatically use the current domain
        const response = await fetch('/api/posts');
        if (!response.ok) throw new Error(`Failed to fetch posts: ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error('Invalid response format');
        setPosts(data);
      } catch (err: any) {
        console.error('Error fetching posts:', err);
        setError(err.message || 'Failed to load blog posts');
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <div className="animate-pulse space-y-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="space-y-3">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <div className="text-red-500 dark:text-red-400">
          {error}
          <button onClick={() => window.location.reload()} className="ml-2 underline">
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {isMobile && <MobileHeader title="Blog" />}
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Blog Posts</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post._id} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-0">
              <Link to={`/blog/${post.slug}`} className="block group">
                {post.mainImage && (
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 mb-2">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                )}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}