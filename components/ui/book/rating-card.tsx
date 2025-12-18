import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../card';

interface RatingCardProps {
    title: string,
    children: React.ReactNode;
    isDarkMode: boolean;
}

export function RatingCard({ title, children, isDarkMode}: RatingCardProps) {
    return (
        <Card isDarkMode={isDarkMode}>
            <Text style={[styles.title, { color: isDarkMode ? '#FFF' : '#000' }]}>
                {title}
            </Text>
            {children}
        </Card>
    );
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 12,
        fontSize: 16,
    },
})