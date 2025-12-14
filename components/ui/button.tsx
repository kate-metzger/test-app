import React from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle, Text } from 'react-native';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  isDarkMode?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode; // optional icon
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
}: ButtonProps) {
  const backgroundColor =
    variant === 'primary'
      ? isDarkMode
        ? '#4A90E2'
        : '#4A90E2'
      : isDarkMode
      ? '#404040'
      : '#E0E0E0';

  const paddingVertical = size === 'sm' ? 8 : size === 'lg' ? 16 : 12;
  const paddingHorizontal = 16;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor, paddingVertical, paddingHorizontal },
        fullWidth && { alignSelf: 'stretch' },
        style,
      ]}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text style={styles.text}>
          {children}
        </Text>
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
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF'
  },
});
