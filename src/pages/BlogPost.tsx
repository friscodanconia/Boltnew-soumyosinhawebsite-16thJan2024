import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { client } from '../lib/sanity.client';
import { PortableText } from '@portabletext/react';
import { MobileHeader } from '../components/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface Post {
 _id: string;
 title: string;
 body: any[];
 publishedAt: string;
 author?: string;
 mainImage?: {
   asset: {
     url: string;
   };
 };
}

export function BlogPost() {
 const { slug } = useParams();
 const [post, setPost] = useState<Post | null>(null);
 const [isLoading, setIsLoading] = useState(true);
 const isMobile = useMediaQuery('(max-width: 768px)');

 useEffect(() => {
   const fetchPost = async () => {
     try {
       setIsLoading(true);
       const data = await client.fetch(`
         *[_type == "post" && slug.current == $slug][0]{
           _id,
           title,
           body,
           publishedAt,
           "author": author->name,
           mainImage {
             asset->{
               url
             }
           }
         }
       `, { slug });
       console.log('Post data:', data);
       setPost(data);
     } catch (error) {
       console.error('Error fetching post:', error);
     } finally {
       setIsLoading(false);
     }
   };
   
   if (slug) {
     fetchPost();
   }
 }, [slug]);

 if (isLoading) {
   return (
     <div className="max-w-3xl mx-auto p-8 text-center">
       <div className="animate-pulse">
         <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
         <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
       </div>
     </div>
   );
 }

 if (!post) {
   return (
     <div className="max-w-3xl mx-auto p-8">
       <div className="text-center">
         <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
           Post not found
         </h1>
         <Link to="/blog" className="text-amber-600 dark:text-amber-400 hover:underline">
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

       <article className="prose prose-sm max-w-none dark:prose-invert">
         <div className="mb-8">
           <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{post.title}</h1>
           <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
             {post.publishedAt && (
               <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
             )}
             {post.author && (
               <span> · {post.author}</span>
             )}
           </div>
           {post.mainImage && (
             <img 
               src={post.mainImage.asset.url} 
               alt={post.title} 
               className="w-full h-auto rounded-lg mb-6"
             />
           )}
         </div>
         <div className="prose prose-sm max-w-none dark:prose-invert text-gray-600 dark:text-gray-300">
           <PortableText
             value={post.body}
             components={{
               block: {
                 normal: ({children}) => <p className="mb-4">{children}</p>,
                 h2: ({children}) => <h2 className="text-xl font-bold mt-8 mb-4">{children}</h2>,
                 h3: ({children}) => <h3 className="text-lg font-bold mt-6 mb-3">{children}</h3>
               }
             }}
           />
         </div>
       </article>
     </div>
   </div>
 );
}