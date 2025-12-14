import React from 'react';
import LibraryScreen from '@/components/screens/LibraryScreen';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const isDarkMode = false;

  return (
    <LibraryScreen
      isDarkMode={isDarkMode}
      showSearch={false}
      searchQuery=""
      setSearchQuery={() => {}}
      navigate={router.push}
    />
  );
}
