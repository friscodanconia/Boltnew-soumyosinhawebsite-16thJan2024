import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { aboutData } from '../data/personalData';
import { contactData } from '../data/contactData';

export function NoteDetail() {
  const { slug } = useParams();

  // This would typically come from an API or database
  const getContent = () => {
    switch (slug) {
      case 'about-me':
        return {
          title: 'About Me',
          content: `Hi, I'm ${aboutData.name}. I'm currently building cool stuff and exploring new technologies.`
        };
      case 'quick-links':
        return {
          title: 'Quick Links',
          content: contactData.contact.links.join('\n')
        };
      // Add more cases for other notes
      default:
        return {
          title: '404',
          content: 'Note not found'
        };
    }
  };

  const note = getContent();

  return (
    <div>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to notes</span>
      </Link>
      
      <article className="prose dark:prose-invert">
        <h1>{note.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: note.content }} />
      </article>
    </div>
  );
}