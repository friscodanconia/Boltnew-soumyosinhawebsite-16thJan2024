import React from 'react';
import { Circle } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';

export function Header() {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-2">
      <div className="max-w-2xl mx-auto flex items-center gap-4">
        <div className="flex items-center space-x-2">
          <Circle className="h-3 w-3 fill-red-500 text-red-500" />
          <Circle className="h-3 w-3 fill-yellow-500 text-yellow-500" />
          <Circle className="h-3 w-3 fill-green-500 text-green-500" />
        </div>
        
        <div className="flex-1 relative">
          <SearchBar />
          <SearchResults />
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <time className="hidden sm:block text-sm text-gray-600 dark:text-gray-400">
            {currentTime.toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
        </div>
      </div>
    </header>
  );
}