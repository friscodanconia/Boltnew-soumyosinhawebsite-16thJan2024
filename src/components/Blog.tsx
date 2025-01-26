import React, { useEffect, useState, useRef } from 'react';
import { BookOpen } from 'lucide-react';
import { client } from '../lib/sanity.client';
import { MobileHeader } from './MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';
import { Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';

interface Post {
 _id: string;
 title: string;
 slug: {
   current: string;
 };
 content: any[];
}

export function Blog() {
 const [posts, setPosts] = useState<Post[]>([]);
 const isMobile = useMediaQuery('(max-width: 768px)');
 const contentRef = useRef<HTMLDivElement>(null);
 useHighlightSearch(contentRef);

 useEffect(() => {
   const fetchPosts = async () => {
     try {
      const data = await client.fetch(`*[_type == "post"]{
        _id,
        title,
        slug,
        body // Instead of content
      }`);
       console.log('Sanity data:', data);
       setPosts(data);
     } catch (error) {
       console.error('Sanity fetch error:', error);
     }
   };
   fetchPosts();
 }, []);

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
       </div>
     </div>
   </div>
 );
}