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
      _id: string;
      url: string;
    };
  };
  body?: any[];
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
        const response = await fetch('http://localhost:3001/api/posts');
        if (!response.ok) throw new Error(`Failed to fetch posts: ${response.status}`);
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : [data]);
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
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {isMobile && <MobileHeader title="Blog" />}
        <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="animate-pulse space-y-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="space-y-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {isMobile && <MobileHeader title="Blog" />}
        <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 p-4 rounded-lg">
            {error}
            <button onClick={() => window.location.reload()} className="ml-2 underline">
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {isMobile && <MobileHeader title="Blog" />}
      <div className="max-w-3xl mx-auto p-8">
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <h1 className="text-base font-medium text-gray-900 dark:text-gray-100">Latest Posts</h1>
          </div>
        </header>
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post._id} className="flex items-start">
              <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
              <Link 
                to={`/blog/${post.slug}`} 
                className="group"
              >
                <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                  {post.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}