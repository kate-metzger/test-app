import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import BackIcon from '../../assets/icons/chevron-left.svg';
import SearchIcon from '../../assets/icons/magnifying-glass.svg';
import MenuIcon from '../../assets/icons/more-options.svg';

interface TopNavBarProps {
  title: string;
  isDarkMode: boolean;
  showBack?: boolean;
  showSearch?: boolean;
  showMenu?: boolean;
  onSearchPress?: () => void;
}

export default function TopNavBar({
  title,
  isDarkMode,
  showBack = false,
  showSearch = false,
  showMenu = false,
  onSearchPress,
}: TopNavBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 12,
          backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
          borderBottomColor: isDarkMode ? '#404040' : '#E0E0E0',
        },
      ]}
    >
      <View style={styles.inner}>
        {/* LEFT */}
        <View style={styles.left}>
          {showBack && (
            <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
              <BackIcon width={24} height={24} />
            </TouchableOpacity>
          )}

          <Text
            style={[
              styles.title,
              { color: isDarkMode ? '#FFFFFF' : '#000000' },
            ]}
          >
            {title}
          </Text>
        </View>

        {/* RIGHT */}
        <View style={styles.right}>
          {showSearch && (
            <TouchableOpacity onPress={onSearchPress} style={styles.iconButton}>
              <SearchIcon width={22} height={22} />
            </TouchableOpacity>
          )}

          {showMenu && (
            <TouchableOpacity style={styles.iconButton}>
              <MenuIcon width={22} height={22} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Georgia',
  },
  iconButton: {
    padding: 4,
  },
});
