import React, { ReactPortal } from 'react';
import { View, ViewProps, StyleSheet, Platform, ViewStyle } from 'react-native';

interface CardCustomProps extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  isDarkMode?: boolean;
}

export default function Card({ isDarkMode = false, children, style, ...props }: CardCustomProps) {
  return (
    <View
      {...props}
      style={[
        styles.card,
        { backgroundColor: isDarkMode ? '#1E1E1E' : '#F5F5F5' },
        style,
        Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: isDarkMode ? 0.4 : 0.08,
            shadowRadius: 12,
          },
          android: {
            elevation: isDarkMode ? 4 : 2,
          },
        }),
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 24,
  },
});
