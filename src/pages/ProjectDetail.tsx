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
            <h1 className="text-lg font-medium leading-snug text-gray-900 dark:text-gray-100 mb-0">
              {project.title}
            </h1>
          </div>

          <div className="space-y-12 md:space-y-16">
            <section>
              <h2 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100 mb-4 md:mb-5">Overview</h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {project.slug === 'ai-chatbot' ? (
                  <>
                    I built <a href="https://www.nestor.guide/" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline">nestor.guide</a>. Nestor simplifies your journey through the rapidly evolving world of AI. The AI landscape changes daily, bringing new tools and models. With so much information available, it's hard to know where to focus. I curated a collection of essential tools, resources, and insights to help you navigate the space effectively.
                  </>
                ) : project.slug === 'movie-info-site' ? (
                  <>
                    A comprehensive movie information site built using AI tools like Claude, Bolt.new and publicly available APIs from TMDB. A user can enter movie related terms and will be delivered relevant search results. You can check out the experience at <a href="https://www.cinemagic.me" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline">cinemagic.me</a>
                  </>
                ) : (
                  project.description
                )}
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100 mb-4 md:mb-5">The Why</h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {project.slug === 'ai-chatbot' ? (
                  <>
                    Let's face it, the AI world is changing rapidly. There are new model developments every day, building tools need technical tinkering, some are behind the paywall, these are non-deterministic (your same inputs will have different results every time). People are busy and not everyone has the time or wants to know how the sausage making works. But people do want to learn about AI and use it to be more productive. Nestor does that by making it easy to understand, learn, and integrate AI in their lives.
                  </>
                ) : (
                  project.why || "I like movies, but a bit frustrated by the increasingly complicated user journey of IMDB. I wanted to build a simple user experience where you can enter the name of movie, actor, actress and get relevant results. This tool is free of charge and using the TMDB API to get results and uses some custom ranking logic to display results."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100 mb-4 md:mb-5">Key Features</h2>
              {project.slug === 'ai-chatbot' ? (
                <ul className="space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">Top No-Code Tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">How to build Agents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">Must Try Apps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">How to use AI in Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">And many more...</span>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                      <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section>
              <h2 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100 mb-4 md:mb-5">Technologies Used</h2>
              {project.slug === 'ai-chatbot' ? (
                <ul className="space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">Bolt.new</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">Claude Sonnet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">Vercel for deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">Custom design and debugging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">Windsurf (I found it better than Cursor)</span>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">TMDB API</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">Visual Code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">Claude</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">Deepseek (for troubleshooting help)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">Extensive debugging (most time-consuming aspect)</span>
                  </li>
                </ul>
              )}
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}