import { Link } from 'react-router-dom';
import type { Section } from '../types/project';

type Props = {
  section: Section;
};

export function SectionRenderer({ section }: Props) {
  switch (section.type) {
    case 'text':
      return (
        <p 
          className="text-sm leading-relaxed text-gray-600 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      );

    case 'heading':
      const HeadingTag = section.level === 3 ? 'h3' : 'h2';
      const headingClass = section.level === 3
        ? 'text-sm font-medium text-gray-900 dark:text-gray-100 mt-6 mb-3'
        : 'text-base font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4';
      return <HeadingTag className={headingClass}>{section.content}</HeadingTag>;

    case 'list':
      return (
        <div className="space-y-3">
          {section.title && (
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {section.title}
            </h3>
          )}
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 pl-1">
            {section.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
      );

    case 'image':
      return (
        <figure>
          <img
            src={section.src}
            alt={section.alt}
            className="w-full h-64 object-cover rounded-lg"
          />
          {section.caption && (
            <figcaption className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'video':
      return (
        <figure>
          <video
            src={section.src}
            poster={section.poster}
            controls
            className="w-full rounded-lg"
          />
          {section.caption && (
            <figcaption className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'gallery':
      return (
        <div className="space-y-3">
          {section.title && (
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {section.title}
            </h3>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {section.images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-full h-32 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      );

    case 'stats':
      return (
        <div className="space-y-3">
          {section.title && (
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {section.title}
            </h3>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {section.items.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center"
              >
                <div className="text-xl font-semibold text-amber-600 dark:text-amber-400">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'quote':
      return (
        <blockquote className="border-l-2 border-amber-500 pl-4 py-2 my-4">
          <p className="text-sm italic text-gray-600 dark:text-gray-300">
            "{section.content}"
          </p>
          {section.author && (
            <cite className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">
              — {section.author}
            </cite>
          )}
        </blockquote>
      );

    case 'cta':
      if (section.external || section.url.startsWith('http')) {
        return (
          <a
            href={section.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 hover:underline"
          >
            {section.text} →
          </a>
        );
      }
      return (
        <Link
          to={section.url}
          className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 hover:underline"
        >
          {section.text} →
        </Link>
      );

    case 'divider':
      return <hr className="border-gray-200 dark:border-gray-700 my-8" />;

    default:
      return null;
  }
}
