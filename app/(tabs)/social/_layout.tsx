import React from 'react';
import { View } from 'react-native';
import { Slot, usePathname } from 'expo-router';
import TopNavBar from '../../../components/ui/top-nav-bar';

export default function SocialLayout() {
  const pathname = usePathname();
  const showSearchIcon = true;

  return (
    <View style={{ flex: 1 }}>
      <TopNavBar
        title="Social"
        isDarkMode={false}
        showBackIcon={false}
        showSearchIcon={showSearchIcon}
      />
      <Slot />
    </View>
  );
}
