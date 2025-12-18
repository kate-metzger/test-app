import { FlipHorizontal } from 'lucide-react-native';
import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    Pressable,
} from 'react-native';

export interface Recommendation {
    id: string;
    title: string;
    author: string;
    cover: string;
    match: number;
}

interface RecommendationCarouselProps {
    items: Recommendation[];
    isDarkMode?: boolean;
    onPressItem?: (item: Recommendation) => void;
}

export function RecommendationCarousel({
    items,
    isDarkMode = false,
    onPressItem,
}: RecommendationCarouselProps) {
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => onPressItem?.(item)}
                    style={styles.card}
                >
                    <View style={styles.coverWrapper}>
                        <Image
                            source={{ uri: item.cover }}
                            style={styles.cover}
                        />
                        <View style={styles.match}>
                            <Text style={styles.matchText}>
                                {item.match}% Match
                            </Text>
                        </View>
                    </View>

                    <Text
                        numberOfLines={2}
                        style={[
                            styles.title,
                            { color: isDarkMode ? '#FFFFFF' : '#000000' },
                        ]}
                    >
                        {item.title}
                    </Text>

                    <Text style={styles.author} numberOfLines={1}>
                        {item.author}
                    </Text>
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        paddingVertical: 4,
    },
    card: {
        width: 120,
        marginRight: 12,
    },
    coverWrapper: {
        position: 'relative',
        marginBottom: 6,
    },
    cover: {
        width: '100%',
        aspectRatio: 2 / 3,
        borderRadius: 10,
    },
    match: {
        position: 'absolute',
        top: 6,
        right: 6,
        backgroundColor: '#00C48C',
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    matchText: {
        fontSize: 11,
        color: '#FFFFFF',
        fontWeight: '600',
    },
    title: {
        fontSize: 13,
        fontWeight: '500',
        marginBottom: 2,
    },
    author: {
        fontSize: 11,
        color: '#A0A0A0',
    },
});