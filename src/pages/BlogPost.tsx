import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogData } from '../data/blogData';
import { MobileHeader } from '../components/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';

export function BlogPost() {
  const { slug } = useParams();
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const post = Object.values(blogData)
    .flatMap(category => category.posts)
    .find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Post not found
          </h1>
          <Link 
            to="/blog" 
            className="text-amber-600 dark:text-amber-400 hover:underline"
          >
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title={post.title} />}
      <div className="p-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            {post.title}
          </h1>
          <div 
            className="text-gray-600 dark:text-gray-300 [&_a]:text-amber-600 [&_a]:dark:text-amber-400 [&_a]:hover:underline space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}