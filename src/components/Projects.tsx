import React, { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { MobileHeader } from './MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';

export function Projects() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="Projects" />}
      <div className="p-8">
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Briefcase className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <h1 className="text-base font-medium text-gray-900 dark:text-gray-100">Projects</h1>
          </div>
        </header>

        <div className="grid gap-8" ref={contentRef}>
          {projectsData.projects.items.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {project.title}
              </h2>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
