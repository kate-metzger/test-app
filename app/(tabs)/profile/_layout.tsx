import React from 'react';
import { View } from 'react-native';
import { Slot, usePathname } from 'expo-router';
import TopNavBar from '../../../components/ui/top-nav-bar';

export default function ProfileLayout() {
  const pathname = usePathname();
  const showMenu = true;

  return (
    <View style={{ flex: 1 }}>
      <TopNavBar
        title="Discover"
        isDarkMode={false}
        showBack={false}
        showSearch={false}
        showMenu={showMenu}
      />
      <Slot />
    </View>
  );
}
