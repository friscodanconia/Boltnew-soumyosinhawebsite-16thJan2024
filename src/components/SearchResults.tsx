import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

export function SearchResults() {
  const { results, isSearching, query } = useSearch();
  const navigate = useNavigate();

  if (query.length < 2) return null;

  if (isSearching) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50">
        <div className="text-sm text-gray-500 dark:text-gray-400">Searching...</div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50">
        <div className="text-sm text-gray-500 dark:text-gray-400">No results found</div>
      </div>
    );
  }

  const handleResultClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`${link}?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto z-50">
      {results.map((result) => (
        <div
          key={result.id}
          onClick={(e) => handleResultClick(result.link, e)}
          className="block w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
        >
          <div className="flex items-start">
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {result.title}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {result.category}
              </div>
              <div 
                className="text-sm text-gray-600 dark:text-gray-300 mt-1 [&_a]:pointer-events-none"
                dangerouslySetInnerHTML={{ __html: result.excerpt }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}