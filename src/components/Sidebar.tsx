import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { categories } from '../data/sidebarData';

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="w-64 md:w-48 lg:w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
      <nav className="p-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const isActive = location.pathname === category.link;
          
          return (
            <button
              key={index}
              onClick={() => navigate(category.link)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/10' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium md:text-sm lg:text-base">{category.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}