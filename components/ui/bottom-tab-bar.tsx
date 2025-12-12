import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeIconInactive from '../../assets/icons/home.svg';
import HomeIconActive from '../../assets/icons/home-filled.svg';
import LibraryIconInactive from '../../assets/icons/library.svg';
import LibraryIconActive from '../../assets/icons/library-filled.svg';
import DiscoverIconInactive from '../../assets/icons/sparkle.svg';
import DiscoverIconActive from '../../assets/icons/sparkle-filled.svg';
import SocialIconInactive from '../../assets/icons/users.svg';
import SocialIconActive from '../../assets/icons/users-filled.svg';
import ProfileIconInactive from '../../assets/icons/user.svg';
import ProfileIconActive from '../../assets/icons/user-filled.svg';

interface BottomTabBarCustomProps extends BottomTabBarProps {
  isDarkMode?: boolean;
}

export default function BottomTabBar({
  state,
  navigation,
  isDarkMode = false,
}: BottomTabBarCustomProps) {
   const insets = useSafeAreaInsets();
   const tabs = [
    { name: 'index', inactiveIcon: HomeIconInactive, activeIcon: HomeIconActive },
    { name: 'Library', inactiveIcon: LibraryIconInactive, activeIcon: LibraryIconActive },
    { name: 'Discover', inactiveIcon: DiscoverIconInactive, activeIcon: DiscoverIconActive },
    { name: 'Social', inactiveIcon: SocialIconInactive, activeIcon: SocialIconActive },
    { name: 'Profile', inactiveIcon: ProfileIconInactive, activeIcon: ProfileIconActive },
  ];

  return (
    <View style={[
      styles.container,
      { paddingBottom: insets.bottom || 10 }
      ]}
    >
      {tabs.map((tab, index) => {
        const isActive = state.index === index;
        const Icon = isActive ? tab.activeIcon : tab.inactiveIcon;

        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => navigation.navigate(tab.name)}
            style={styles.tabButton}
            activeOpacity={0.7}
            >
            <Icon
              width={24}
              height={24} 
            />
            <Text
              style={[styles.tabLabel, 
              { color: isActive ? '#4A90E2' : '#A0A0A0' }]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#fff',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 2,
  },
});
