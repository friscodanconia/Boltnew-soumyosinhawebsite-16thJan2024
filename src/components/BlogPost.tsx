import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MobileHeader } from './MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { ArrowLeft } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import '../styles/blog.css';

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

const components = {
  block: {
    normal: ({children}: any) => <p>{children}</p>,
    h1: ({children}: any) => <h1>{children}</h1>,
    h2: ({children}: any) => <h2>{children}</h2>,
    blockquote: ({children}: any) => <blockquote>{children}</blockquote>,
  },
  list: {
    bullet: ({children}: any) => <ul>{children}</ul>,
    number: ({children}: any) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({children}: any) => <li>{children}</li>,
    number: ({children}: any) => <li>{children}</li>,
  },
  marks: {
    strong: ({children}: any) => <strong>{children}</strong>,
    em: ({children}: any) => <em>{children}</em>,
  },
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`http://localhost:3001/api/posts/${slug}`);
        if (!response.ok) throw new Error(`Failed to fetch post: ${response.status}`);
        const data = await response.json();
        if (!data) throw new Error('No post data received');
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
          {error}
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
        <div className="text-gray-600 dark:text-gray-400">Post not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {isMobile && <MobileHeader title="Blog" />}
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to blog
        </Link>

        <article>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            {post.title}
          </h1>

          {post.mainImage && (
            <img
              src={post.mainImage.asset.url}
              alt={post.title}
              className="w-full rounded-lg mb-8 object-cover"
            />
          )}

          <div className="blog-content">
            <PortableText value={post.body} components={components} />
          </div>
        </article>
      </div>
    </div>
  );
}
