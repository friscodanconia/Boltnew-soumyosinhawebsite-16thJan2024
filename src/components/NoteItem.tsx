import React from 'react';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface NoteItemProps {
  icon: LucideIcon;
  title: string;
  date: string;
  preview: string;
  iconColor: string;
  slug: string;
}

export function NoteItem({ icon: Icon, title, preview, iconColor, slug }: NoteItemProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Link 
      to={`/${slug}`} 
      className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
    >
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 ${iconColor}`} />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 truncate">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5 line-clamp-2">
              {preview}
            </p>
            {isMobile && (
              <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1" />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}