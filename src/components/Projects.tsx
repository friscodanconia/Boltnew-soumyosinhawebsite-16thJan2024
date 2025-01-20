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

        <div className="space-y-3" ref={contentRef}>
          {projectsData.projects.items.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="block group"
            >
              <div className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                <div className="flex-1">
                  <span className="text-amber-600 dark:text-amber-400 hover:underline">{project.title}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">
                    — {project.description}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}