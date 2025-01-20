import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { MobileHeader } from '../components/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';

export function ProjectDetail() {
  const { slug } = useParams();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);
  
  const project = projectsData.projects.items.find(project => project.slug === slug);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <div className="text-center">
          <h1 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">
            Project not found
          </h1>
          <Link 
            to="/projects" 
            className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
          >
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title={project.title} />}
      <div className="p-8">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <article ref={contentRef}>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-0">
              {project.title}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">Overview</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">The Why</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.why || `${project.title} addresses key challenges in ${project.technologies[0]} development, 
                offering innovative solutions for modern technical requirements. This project emerged from 
                the need to streamline development processes and enhance user experiences in ${project.technologies[1]} applications.`}
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-4">Technologies Used</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                This project was built using a modern tech stack including:
              </p>
              <ul className="space-y-3">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}