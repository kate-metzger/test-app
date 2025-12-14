import React from 'react';
import { View } from 'react-native';
import { Slot, usePathname } from 'expo-router';
import TopNavBar from '../../../components/ui/top-nav-bar';

export default function SocialLayout() {
  const pathname = usePathname();
  const showSearch = true;

  return (
    <View style={{ flex: 1 }}>
      <TopNavBar
        title="Social"
        isDarkMode={false}
        showBack={false}
        showSearch={showSearch}
      />
      <Slot />
    </View>
  );
}
