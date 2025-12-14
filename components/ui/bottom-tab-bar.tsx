import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from './Icon';

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
    { name: 'index', label: 'Home', icon: 'Home' },
    { name: 'library', label: 'Library', icon: 'Library' },
    { name: 'discover', label: 'Discover', icon: 'Sparkles' },
    { name: 'social', label: 'Social', icon: 'Users' },
    { name: 'profile', label: 'Profile', icon: 'User' },
  ];

  return (
    <View 
      style={[
      styles.container,
        {
          paddingBottom: insets.bottom || 10,
          backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
          borderTopColor: isDarkMode ? '#333' : '#E0E0E0',
        },
      ]}
    >
      {tabs.map((tab, index) => {
        const isActive = state.index === index;

        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => navigation.navigate(tab.name)}
            style={styles.tabButton}
            activeOpacity={0.7}
            >
            <Icon
              name={tab.icon as any}
              size={22}
              color={isActive ? '#4A90E2' : '#A0A0A0'}
            />
            <Text
              style={[
                styles.label,
                { color: isActive ? '#4A90E2' : '#A0A0A0' },
              ]}
            >
            {tab.label}
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
    gap: 2,
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
});