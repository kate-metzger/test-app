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
  const hasText = Boolean(children);

  /* ---------- CHIP LAYOUT ---------- */
  const chipLayout: ViewStyle | undefined = isChip
    ? chipSize === 'icon'
      ? {
          width: 34,
          height: 34,
          padding: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }
      : chipSize === 'compact'
      ? {
          height: 36,
          paddingHorizontal: 12,
          paddingVertical: 0,
          justifyContent: 'center',
        }
      : {
          height: 36,
          paddingHorizontal: 14,
          paddingVertical: 0,
          justifyContent: 'center',
        }
    : undefined;

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

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[
        styles.base,
        chipLayout,
        { backgroundColor },
        fullWidth && { alignSelf: 'stretch' },
        style,
      ]}
    >
      <View style={styles.content}>
        {icon && (
          <View style={hasText ? styles.iconWithText : styles.iconOnly}>
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
  base: {
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWithText: {
    marginRight: 6,
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  iconOnly: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
