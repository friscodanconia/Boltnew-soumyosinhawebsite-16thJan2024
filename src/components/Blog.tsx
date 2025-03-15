import { useEffect, useState, useRef } from 'react';
import { BookOpen } from 'lucide-react';
import { client } from '../lib/sanity.client';
import { MobileHeader } from './MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';
import { Link } from 'react-router-dom';

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Only fetch fields we need for the list view
        const data = await client.fetch(`*[_type == "post"] | order(_createdAt desc) {
          _id,
          title,
          slug
        }`);
        setPosts(data);
      } catch (error) {
        console.error('Sanity fetch error:', error);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="Blog" />}
      <div className="p-8 md:p-6 lg:p-8">
        <header className="mb-12 md:mb-8 lg:mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <h1 className="text-base font-medium text-gray-900 dark:text-gray-100">Blog</h1>
          </div>
        </header>

        <div className="space-y-3" ref={contentRef}>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-pulse text-gray-600 dark:text-gray-400">
                Loading posts...
              </div>
            </div>
          ) : error ? (
            <div className="text-red-500 dark:text-red-400 text-sm">{error}</div>
          ) : posts.length === 0 ? (
            <div className="text-gray-600 dark:text-gray-400 text-sm">No blog posts found.</div>
          ) : (
            <ul className="space-y-3">
              {posts.map((post) => (
                <li key={post._id} className="flex items-start">
                  <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                  <Link 
                    to={`/blog/${post.slug.current}`}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}