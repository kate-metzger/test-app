import React, { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import TopNavBar from '@/components/ui/top-nav-bar';
import LibraryScreen from '@/components/screens/LibraryScreen';

export default function LibraryLayout() {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isDarkMode = false;

  return (
    <View style={{ flex: 1 }}>
      <TopNavBar
        title="Library"
        isDarkMode={isDarkMode}
        showSearchIcon={true}
        onSearchPress={() => setShowSearch(prev => !prev)}
      />

      <LibraryScreen
        isDarkMode={isDarkMode}
        showSearch={showSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        navigate={router.push} // Pass router.push directly
      />
    </View>
  );
}
