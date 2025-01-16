import { BookOpen, Briefcase, Newspaper, History, Mail, Book } from 'lucide-react';

export const categories = [
  { 
    icon: BookOpen, 
    label: 'About Me', 
    description: "I'm Soumyo, global marketing and technology executive",
    link: '/about' 
  },
  { 
    icon: History, 
    label: 'Experience', 
    description: 'Worked across top technology and media firms',
    link: '/experience' 
  },
  { 
    icon: Newspaper, 
    label: 'Blog', 
    description: 'My thoughts about the world',
    link: '/blog' 
  },
  { 
    icon: Briefcase, 
    label: 'Projects', 
    description: 'What I find interesting to tinker around',
    link: '/projects' 
  },
  { 
    icon: Book, 
    label: 'Reading', 
    description: 'My reading list',
    link: '/reading' 
  },
  { 
    icon: Mail, 
    label: 'Contact Me', 
    description: 'Ways to reach me',
    link: '/contact' 
  }
] as const;