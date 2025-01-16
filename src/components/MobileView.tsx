import React from 'react';
import { NotesList } from './NotesList';

export function MobileView() {
  return (
    <div className="h-full overflow-y-auto bg-white dark:bg-gray-900">
      <div className="px-2 py-4">
        <NotesList />
      </div>
    </div>
  );
}