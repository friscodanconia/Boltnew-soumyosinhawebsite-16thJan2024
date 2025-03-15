import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MobileHeader } from './MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { ArrowLeft } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { useTheme } from '../context/ThemeContext';
import { getPost } from '../lib/sanity.client';

interface Post {
  _id: string;
  title: string;
  slug: string;
  body: any[];
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

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { } = useTheme();

  // Debug logging
  useEffect(() => {
    console.log('BlogPost mounted with slug:', slug);
  }, [slug]);

  const components = {
    block: {
      normal: ({children}: any) => (
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {children}
        </p>
      ),
      h1: ({children}: any) => (
        <h1 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-6 mb-3">
          {children}
        </h1>
      ),
      h2: ({children}: any) => (
        <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mt-4 mb-2">
          {children}
        </h2>
      ),
      blockquote: ({children}: any) => (
        <blockquote className="border-l-4 border-amber-500 pl-4 py-2 my-4 text-sm text-gray-600 dark:text-gray-300 italic">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({children}: any) => (
        <ul className="list-disc pl-6 mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
          {children}
        </ul>
      ),
      number: ({children}: any) => (
        <ol className="list-decimal pl-6 mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({children}: any) => (
        <li className="text-sm text-gray-600 dark:text-gray-300">
          {children}
        </li>
      ),
      number: ({children}: any) => (
        <li className="text-sm text-gray-600 dark:text-gray-300">
          {children}
        </li>
      ),
    },
    marks: {
      strong: ({children}: any) => (
        <strong className="font-medium text-gray-900 dark:text-gray-100">
          {children}
        </strong>
      ),
      em: ({children}: any) => (
        <em className="italic text-gray-600 dark:text-gray-300">
          {children}
        </em>
      ),
    },
  };

  useEffect(() => {
    async function fetchPost() {
      if (!slug) {
        console.error('No slug provided');
        setError('No post slug provided');
        setIsLoading(false);
        return;
      }
      
      try {
        setIsLoading(true);
        setError(null);
        console.log('Fetching post with slug:', slug);
        const data = await getPost(slug);
        console.log('Received post data:', data);
        if (!data) {
          console.error('No post data received for slug:', slug);
          throw new Error('Post not found');
        }
        setPost(data);
      } catch (err: any) {
        console.error('Error fetching post:', err);
        setError(err.message || 'Failed to load blog post');
      } finally {
        setIsLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <div className="text-red-500 dark:text-red-400">
          Error: {error}
          <button onClick={() => window.location.reload()} className="ml-2 underline">
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <div className="text-black dark:text-white">Post not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {isMobile && <MobileHeader title="Blog" />}
      <div className="max-w-3xl mx-auto p-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to blog
        </Link>

        <article className="prose prose-sm dark:prose-invert max-w-none">
          <h1 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">
            {post?.title}
          </h1>

          {post?.mainImage && (
            <img
              src={post.mainImage.asset.url}
              alt={post.title}
              className="w-full rounded-lg mb-6 object-cover"
            />
          )}

          {post?.body && (
            <PortableText 
              value={post.body} 
              components={components}
            />
          )}
        </article>
      </div>
    </div>
  );
}
