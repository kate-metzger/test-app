import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  isDarkMode?: boolean;
}

export default function Button({
  onPress,
  children,
  variant = 'primary',
  fullWidth = false,
  size = 'md',
  isDarkMode = false,
}: ButtonProps) {
  const backgroundColor =
    variant === 'primary' ? '#4A90E2' : 'transparent';
  const borderColor =
    variant === 'outline' ? '#4A90E2' : 'transparent';
  const textColor =
    variant === 'primary' ? '#fff' : '#4A90E2';

  const padding = size === 'sm' ? 8 : size === 'lg' ? 16 : 12;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor, borderColor, padding, width: fullWidth ? '100%' : undefined },
        variant === 'outline' && styles.outline,
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
