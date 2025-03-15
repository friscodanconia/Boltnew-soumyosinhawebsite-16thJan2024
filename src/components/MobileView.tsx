import { Link } from 'react-router-dom';
import { MobileHeader } from './MobileHeader';
import { NotesList } from './NotesList';

export function MobileView() {
  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/reading', label: 'Reading' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <MobileHeader title="Menu" />
      <div className="p-4">
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="block w-full p-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-2 py-4">
          <NotesList />
        </div>
      </div>
    </div>
  );
}