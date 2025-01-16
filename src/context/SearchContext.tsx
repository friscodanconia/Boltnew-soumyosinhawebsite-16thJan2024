import React, { createContext, useContext, useState, useCallback } from 'react';
import { blogData } from '../data/blogData';
import { projectsData } from '../data/projectsData';
import { experienceData } from '../data/experienceData';
import { readingData } from '../data/readingData';

type SearchResult = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  link: string;
};

type SearchContextType = {
  query: string;
  results: SearchResult[];
  isSearching: boolean;
  setQuery: (query: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchContent = useCallback((searchQuery: string) => {
    setIsSearching(true);
    
    const searchResults: SearchResult[] = [];
    
    // Search blog posts
    Object.entries(blogData).forEach(([category, data]) => {
      data.posts.forEach((post) => {
        if (
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          searchResults.push({
            id: `blog-${post.slug}`,
            title: post.title,
            excerpt: post.excerpt,
            category: 'Blog',
            link: `/blog/${post.slug}`,
          });
        }
      });
    });

    // Search projects
    projectsData.projects.items.forEach((item, index) => {
      if (item.toLowerCase().includes(searchQuery.toLowerCase())) {
        searchResults.push({
          id: `project-${index}`,
          title: 'Project',
          excerpt: item,
          category: 'Projects',
          link: '/projects',
        });
      }
    });

    // Search experience
    Object.entries(experienceData).forEach(([key, exp]) => {
      if (
        exp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        searchResults.push({
          id: `experience-${key}`,
          title: exp.role,
          excerpt: `${exp.company} - ${exp.description}`,
          category: 'Experience',
          link: '/experience',
        });
      }
    });

    // Search reading list
    readingData.reading.books.forEach((book, index) => {
      if (book.toLowerCase().includes(searchQuery.toLowerCase())) {
        searchResults.push({
          id: `book-${index}`,
          title: 'Book',
          excerpt: book,
          category: 'Reading',
          link: '/reading',
        });
      }
    });

    setResults(searchResults);
    setIsSearching(false);
  }, []);

  const handleSearch = useCallback((newQuery: string) => {
    setQuery(newQuery);
    if (newQuery.length >= 2) {
      searchContent(newQuery);
    } else {
      setResults([]);
    }
  }, [searchContent]);

  return (
    <SearchContext.Provider
      value={{
        query,
        results,
        isSearching,
        setQuery: handleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}