import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Card from '../card';
import Icon from '../Icon';

export function NotesCard({ notes, setNotes, isDarkMode }: any) {
    return (
        <Card isDarkMode={isDarkMode}>
            <View style={styles.header}>
                <Text style={{ color: isDarkMode ? '#FFF' : '#000' }}>
                    Notes & Thoughts
                </Text>
                <Icon name="Edit3" size={18} color="A0A0A0" />
            </View>

            <TextInput
                value={notes}
                onChangeText={setNotes}
                placeholder="Add your thoughts, favorite quotes, or reflections..."
                placeholderTextColor="#808080"
                multiline
                style={[
                    styles.input,
                    {
                        backgroundColor: isDarkMode ? '#2C2C2C' : '#FFF',
                        color: isDarkMode ? '#FFF' : '#000',
                    },
                ]}
            />
        </Card>
    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    input: {
        borderRadius: 8,
        padding: 12,
        minHeight: 80,
    },
})