import React, { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { aboutData } from '../data/personalData';
import { MobileHeader } from './MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useHighlightSearch } from '../hooks/useHighlightSearch';

export function AboutMe() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const contentRef = useRef<HTMLDivElement>(null);
  useHighlightSearch(contentRef);

  const [name, description] = aboutData.name.split('.\n\n');

  return (
    <div className="max-w-3xl mx-auto">
      {isMobile && <MobileHeader title="About Me" />}
      <div className="p-8 md:p-6 lg:p-8" ref={contentRef}>
        <header className="mb-12 md:mb-8 lg:mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <h1 className="text-lg font-medium leading-snug text-gray-900 dark:text-gray-100">About Me</h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
            {name}.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </header>

        <section className="mb-12 md:mb-8 lg:mb-12">
          <h2 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100 mb-4">Currently</h2>
          <ul className="space-y-3">
            {aboutData.currently.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.text}
                  {item.company && (
                    <> at <a href={item.companyLink} className="text-amber-600 dark:text-amber-400 hover:underline">{item.company}</a></>
                  )}
                  {item.project && (
                    <>, building <a href={item.projectLink} className="text-amber-600 dark:text-amber-400 hover:underline">{item.project}</a></>
                  )}
                  {item.location && (
                    <> <a 
                      href={item.locationLink} 
                      className="text-amber-600 dark:text-amber-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{item.location}</a></>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 md:mb-8 lg:mb-12">
          <h2 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100 mb-4">Previously</h2>
          <ul className="space-y-3">
            {aboutData.previously.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.role} at <a 
                    href={item.companyLink} 
                    className="text-amber-600 dark:text-amber-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{item.company}</a>
                  <span className="text-gray-500 dark:text-gray-400"> ({item.period})</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100 mb-4">Education</h2>
          <ul className="space-y-3">
            {aboutData.education.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.degree} from <a 
                    href={item.schoolLink} 
                    className="text-amber-600 dark:text-amber-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{item.school}</a>
                  {item.period && <span className="text-gray-500 dark:text-gray-400"> ({item.period})</span>}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}