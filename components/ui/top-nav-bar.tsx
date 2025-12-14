import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from './Icon';

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
  const iconColor = isDarkMode ? '#FFFFFF' : '#000000';

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
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.iconButton}
              hitSlop={8}
            >
              <Icon
                name="ChevronLeft"
                size={24}
                color={iconColor}
              />
            </TouchableOpacity>
          )}
          {/* TITLE */}
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
            <TouchableOpacity
              onPress={onSearchPress}
              style={styles.iconButton}
              hitSlop={8}
            >
              <Icon
                name="Search"
                size={22}
                color={iconColor} 
              />
            </TouchableOpacity>
          )}

          {showMenu && (
            <TouchableOpacity
              style={styles.iconButton}
              hitSlop={8}
            >
              <Icon
                name="MoreHorizontal"
                size={22}
                color={iconColor}
              />
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
    minHeight: 60,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    minHeight: 56,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    height: 40,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {},
  iconButton: {
    padding: 4,
  },
});
