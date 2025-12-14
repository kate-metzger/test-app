import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: number;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  allowQuarter?: boolean;
  allowZero?: boolean;
  isDarkMode?: boolean;
}

export function RatingStars({
    rating,
    maxRating = 5,
    size = 20, 
    interactive = false,
    onRatingChange,
    allowQuarter = false,
    allowZero = false,
    isDarkMode = false,
}: RatingStarsProps) {
    const handlePress = (index: number, half: boolean) => {
        if (!interactive || !onRatingChange) return;
        let newRating = allowQuarter ? (half ? index + 0.5 : index + 1) : index + 1;
        if (allowZero && newRating === rating) newRating = 0;
        onRatingChange(newRating);
    };

    const renderStar = (i: number) => {
        const diff = rating - i;
        let fillPercentage = 0;

        if (diff >= 1) fillPercentage = 100;
        else if (allowQuarter && diff >= 0.75) fillPercentage = 75;
        else if (diff >= 0.5) fillPercentage = 50;
        else if (allowQuarter && diff >= 0.25) fillPercentage = 25;

        return (
            <View key={i} style={{ width: size, height: size, marginRight: 2}}>
                {interactive ? (
                    <View style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
                        <TouchableOpacity
                            style={{ width: '50%', height: '100%' }}
                            onPress={() => handlePress(i, true)}
                        />
                        <TouchableOpacity
                            style={{ width: '50%', height: '100%' }}
                            onPress={() => handlePress(i, false)}
                        />
                </View>
            ) : null}

            {/* Base star */}
            <Icon name="Star" size={size} fill="none" strokeWidth={1.5} color="#E0E0E0"/>

            {/* Overlay filled portion */}
            {fillPercentage > 0 && (
                <View style={[styles.overlay, {width: `${fillPercentage}%`, height: size }]}>
                    <Icon name="Star" size={size}  color="#E0E0E0" fill="#FFB800" strokeWidth={1.5} />
                </View>
            )}
        </View>
        );
    };
    
    return <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2}}>
        {Array.from({ length: maxRating}, (_, i) => renderStar(i))}
    </View>;
}
const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: 0,
    },
});
