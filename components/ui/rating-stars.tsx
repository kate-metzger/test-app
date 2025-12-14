import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from './Icon';

interface RatingStarsProps {
  rating: number; // e.g., 4.25
  size?: number;
  isDarkMode?: boolean;
}

export function RatingStars({ rating, size = 16, isDarkMode = false }: RatingStarsProps) {
  const stars = Array.from({ length: 5 });

  const getFillPercentage = (starIndex: number) => {
    const diff = rating - starIndex;
    if (diff >= 1) return 100;
    if (diff >= 0.75) return 75;
    if (diff >= 0.5) return 50;
    if (diff >= 0.25) return 25;
    return 0;
  };

  return (
    <View style={{ flexDirection: 'row', marginTop: 2 }}>
      {stars.map((_, i) => {
        const fillPercent = getFillPercentage(i);
        return (
          <View key={i} style={{ width: size, height: size, marginRight: 2 }}>
            {/* Gray background star */}
            <Icon name="Star" size={size} color={isDarkMode ? '#606060' : '#E0E0E0'} />
            {/* Gold overlay clipped to percentage */}
            {fillPercent > 0 && (
              <View style={[styles.overlay, { width: `${fillPercent}%`, height: size }]}>
                <Icon name="Star" size={size} color="#FFD700" />
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0,
  },
});
