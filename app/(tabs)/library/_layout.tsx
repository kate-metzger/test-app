import React from 'react';
import { View } from 'react-native';
import { Slot, usePathname } from 'expo-router';
import TopNavBar from '../../../components/ui/top-nav-bar';

export default function LibraryLayout() {
  const pathname = usePathname();
  const showSearch = true; // Library always shows search

  return (
    <View style={{ flex: 1 }}>
      <TopNavBar
        title="Library"
        isDarkMode={false}
        showBack={false} // top-level tab, no back
        showSearch={showSearch}
      />
      <Slot />
    </View>
  );
}
