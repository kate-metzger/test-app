import React from 'react';
import LibraryScreen from '@/components/screens/LibraryScreen';

export default function Index() {
  return <LibraryScreen isDarkMode={false} navigate={(path) => console.log('Navigate to', path)} />;
}
