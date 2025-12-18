import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface BookHeaderProps {
    book : any;
    isDarkMode: boolean;
}

export function BookHeader({ book, isDarkMode }: BookHeaderProps) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: book.cover }} style={styles.cover} />

            <View style={styles.meta}>
                <Text style={[styles.title, { color: isDarkMode ? '#FFF' : '#000'}]}>
                    {book.title}
                </Text>
                <Text style={styles.subtle}>{book.author}</Text>
                <Text style={[styles.subtle, styles.series]}>{book.series}</Text>

                <View style={styles.genreRow}>
                    {book.genres.map((g: string) => (
                        <View key={g} style={styles.genreChip}>
                            <Text style={styles.genreText}>{g}</Text>
                        </View>
                    ))}
                </View>

                <Text style={styles.subtle}>
                    {book.pages} pages * {book.publishedYear}
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginBottom: 24 },
    cover: {
        width: 128,
        height: 192,
        borderRadius: 12, 
        marginRight: 16,
    },
    meta: { 
        flex: 1 
    },
    title: {
        fontSize: 20,
        fontFamily: 'Georgia',
        marginBottom: 4,
    },
    subtle: {
        color: '#A0A0A0',
        fontSize: 13,
    },
    series: { 
        marginBottom: 8 
    },
    genreRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        marginBottom: 8,
    },
    genreChip: {
        backgroundColor: '#4A90E220',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    genreText: {
        fontSize: 11,
        color: '#4A90E2',
    },
});