import React, { useRef } from 'react';
import { BookOpen } from 'lucide-react';
import { blogData } from '../data/blogData';
import { MobileHeader } from './MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';

export function Blog() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="Blog" />}
      <div className="p-8">
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <h1 className="text-base font-medium text-gray-900 dark:text-gray-100">Blog</h1>
          </div>
        </header>

        <div className="space-y-12" ref={contentRef}>
          {Object.entries(blogData).map(([key, category]) => (
            <section key={key}>
              <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">
                {category.title}
              </h2>
              <ul className="space-y-3 [&_a]:text-amber-600 [&_a]:dark:text-amber-400 [&_a]:hover:underline">
                {category.posts.map((post, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span 
                      className="text-sm text-gray-600 dark:text-gray-300"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}