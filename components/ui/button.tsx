import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

interface ButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'chip';
  chipSize?: 'icon' | 'compact' | 'default';
  fullWidth?: boolean;
  isDarkMode?: boolean;
  icon?: React.ReactNode;
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function Button({
  children,
  onPress,
  variant = 'primary',
  chipSize = 'default',
  isDarkMode = false,
  icon,
  selected = false,
  fullWidth = false,
  style,
  textStyle,
}: ButtonProps) {
  const isChip = variant === 'chip';
  const hasText = !!children;

  /* ---------- COLORS ---------- */
  const backgroundColor = isChip
    ? selected
      ? '#4A90E2'
      : isDarkMode
      ? '#1E1E1E'
      : '#F5F5F5'
    : '#4A90E2';

  const textColor = isChip
    ? selected
      ? '#FFFFFF'
      : isDarkMode
      ? '#A0A0A0'
      : '#666666'
    : '#FFFFFF';

  /* ---------- BUTTON STYLE ---------- */
  const buttonStyle: ViewStyle = {
    borderRadius: 12,
    backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: fullWidth ? undefined : undefined,
  };

  /* ---------- CHIP SIZE ADJUSTMENTS ---------- */
  if (isChip) {
    switch (chipSize) {
      case 'icon':
        Object.assign(buttonStyle, {
          width: 34,
          height: 34,
          padding: 0,
        });
        break;
      case 'compact':
        Object.assign(buttonStyle, {
          height: 36,
          paddingHorizontal: 12,
          paddingVertical: 0,
        });
        break;
      default:
        Object.assign(buttonStyle, {
          height: 36,
          paddingHorizontal: 14,
          paddingVertical: 0,
        });
        break;
    }
  }

  /* ---------- INNER CONTENT STYLE ---------- */
  const contentStyle: ViewStyle = {
    flexDirection: hasText ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[buttonStyle, style]}
    >
      <View style={contentStyle}>
        {icon && (
          <View style={hasText ? { marginRight: 6 } : { flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {icon}
          </View>
        )}
        {children && (
          <Text
            style={[
              styles.text,
              {
                color: textColor,
                fontSize: isChip ? 14 : 16,
                lineHeight: isChip ? 18 : 22,
              },
              textStyle,
            ]}
          >
            {children}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
    fontWeight: '400',
  },
});
