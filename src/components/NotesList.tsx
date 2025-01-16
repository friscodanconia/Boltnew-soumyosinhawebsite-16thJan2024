import React from 'react';
import { MapPin, History, Newspaper, Briefcase, Book, Mail } from 'lucide-react';
import { NoteItem } from './NoteItem';

const notes = [
  {
    icon: MapPin,
    title: 'About Me',
    date: 'Jul 3',
    preview: "I'm Soumyo, global marketing and technology executive",
    iconColor: 'text-red-500',
    slug: 'about'
  },
  {
    icon: History,
    title: 'Experience',
    date: 'Jul 2',
    preview: 'Worked across top technology and media firms',
    iconColor: 'text-blue-500',
    slug: 'experience'
  },
  {
    icon: Newspaper,
    title: 'Blog',
    date: 'Jul 1',
    preview: 'My thoughts about the world',
    iconColor: 'text-emerald-500',
    slug: 'blog'
  },
  {
    icon: Briefcase,
    title: 'Projects',
    date: 'Jun 30',
    preview: 'What I find interesting to tinker around',
    iconColor: 'text-amber-500',
    slug: 'projects'
  },
  {
    icon: Book,
    title: 'Reading',
    date: 'Jun 29',
    preview: 'My reading list',
    iconColor: 'text-purple-500',
    slug: 'reading'
  },
  {
    icon: Mail,
    title: 'Contact',
    date: 'Jun 28',
    preview: 'Ways to reach me',
    iconColor: 'text-indigo-500',
    slug: 'contact'
  }
];

export function NotesList() {
  return (
    <div className="space-y-1">
      {notes.map((note, index) => (
        <NoteItem key={index} {...note} />
      ))}
    </div>
  );
}