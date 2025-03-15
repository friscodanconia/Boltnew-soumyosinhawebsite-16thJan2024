import { Link, useLocation } from 'react-router-dom';
import { User, Briefcase, FolderOpen, BookOpen, Mail } from 'lucide-react';

export function BottomNav() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-around items-center h-16">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/') ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-xs mt-1">About</span>
        </Link>
        <Link
          to="/experience"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/experience') ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <Briefcase className="w-5 h-5" />
          <span className="text-xs mt-1">Experience</span>
        </Link>
        <Link
          to="/projects"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/projects') ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <FolderOpen className="w-5 h-5" />
          <span className="text-xs mt-1">Projects</span>
        </Link>
        <Link
          to="/reading"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/reading') ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-xs mt-1">Reading</span>
        </Link>
        <Link
          to="/contact"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/contact') ? 'text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <Mail className="w-5 h-5" />
          <span className="text-xs mt-1">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
