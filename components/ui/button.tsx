import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
  StyleProp,
} from 'react-native';

interface ButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'chip';
  isDarkMode?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: React.ReactNode;
  selected?: boolean;
}

export default function Button({
  children,
  onPress,
  fullWidth = false,
  size = 'md',
  variant = 'primary',
  isDarkMode = false,
  style,
  textStyle,
  icon,
  selected = false,
}: ButtonProps) {
  const isChip = variant === 'chip';
  const isIconOnly = !children && !!icon;

  // Size constants
  const iconButtonSize = 40;
  const chipHeight = 32;
  const chipPaddingHorizontal = 12;
  const regularPaddingVertical = size === 'sm' ? 8 : size === 'lg' ? 16 : 12;
  const regularPaddingHorizontal = 16;

  // Background color
  const backgroundColor = isChip
    ? selected
      ? '#4A90E2'
      : isDarkMode
      ? '#1E1E1E'
      : '#F5F5F5'
    : variant === 'primary'
    ? '#4A90E2'
    : isDarkMode
    ? '#404040'
    : '#E0E0E0';

  // Text color
  const textColor = isChip
    ? selected
      ? '#FFFFFF'
      : isDarkMode
      ? '#A0A0A0'
      : '#666666'
    : '#FFFFFF';

  // Styles based on type
  let buttonStyle: ViewStyle = {};
  let contentStyle: ViewStyle = { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' };

  if (isIconOnly) {
    // Icon-only button (grid/list)
    buttonStyle = { width: iconButtonSize, height: iconButtonSize };
    contentStyle = { justifyContent: 'center', alignItems: 'center' };
  } else if (isChip) {
    // Chip (status or filter)
    buttonStyle = { height: chipHeight, paddingHorizontal: chipPaddingHorizontal };
  } else {
    // Regular button
    buttonStyle = { paddingVertical: regularPaddingVertical, paddingHorizontal: regularPaddingHorizontal };
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor }, buttonStyle, fullWidth && { alignSelf: 'stretch' }, style]}
    >
      <View style={[styles.content, contentStyle]}>
        {icon && <View style={isIconOnly ? {} : styles.icon}>{icon}</View>}
        {children && (
          <Text style={[styles.text, { color: textColor, fontSize: isChip ? 14 : 16 }, textStyle]}>
            {children}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center', // vertically centers icon and text
    justifyContent: 'center',
  },
  icon: {
    marginRight: 6, // spacing between icon and text
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: '400',
  },
});
