import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './button';
import Icon from './Icon';

interface ActionButtonRowProps {
    isDarkMode?: boolean;
    isFavorite: boolean;
    onUpdatePress: () => void;
    onFavoritePress: () => void;
    onSharePress: () => void;
}

export function ActionButtonRow({
    isDarkMode = false,
    isFavorite,
    onUpdatePress,
    onFavoritePress,
    onSharePress,
}: ActionButtonRowProps) {
    return (
        <View style={styles.container}>
            {/* Primary */}
            <Button
                variant='primary'
                fullWidth
                onPress={onUpdatePress}
                style={styles.primary}
            >
                Update Progress
            </Button>

            {/* Favorite */}
            <Button
                variant='chip'
                chipSize='icon'
                onPress={onFavoritePress}
                isDarkMode={isDarkMode}
            >
                <Icon
                    name='Heart'
                    size={20}
                    fill={isFavorite ? '#FF6B35' : 'none'}
                    strokeWidth={1.5}
                />
            </Button>

            {/* Favorite */}
            <Button
                variant='chip'
                chipSize='icon'
                onPress={onSharePress}
                isDarkMode={isDarkMode}
            >
                <Icon
                    name='Share2'
                    size={20}
                    color='#A0A0A0'
                    strokeWidth={1.5}
                />
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 20,
    },
    primary: {
        flex: 1,
    },
});