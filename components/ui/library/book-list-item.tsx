import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { RatingStars } from '../rating-stars';

interface BookListItemProps {
  book: any;
  isDarkMode?: boolean;
  onPress: () => void;
}

export default function BookListItem({ book, isDarkMode = false, onPress }: BookListItemProps) {
  const statusColors: Record<string, { bg: string; text: string }> = {
    Read: { bg: '#00C48C20', text: '#00C48C' },
    Reading: { bg: '#4A90E220', text: '#4A90E2' },
    Paused: { bg: '#FFB80020', text: '#FFB800' },
    DNF: { bg: '#FF6B3520', text: '#FF6B35' },
    'Want to Read': { bg: '#A0A0A020', text: '#A0A0A0' },
  };

  const status = statusColors[book.status] || { bg: '#A0A0A020', text: '#A0A0A0' };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: isDarkMode ? '#1E1E1E' : '#F5F5F5' }]}>
      <Image source={{ uri: book.cover }} style={styles.image} />
      <View style={{ marginLeft: 8, flex: 1 }}>
        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <RatingStars rating={book.rating} size={16} isDarkMode={isDarkMode} />
        <View style={[styles.statusBox, { backgroundColor: status.bg }]}>
          <Text style={{ fontSize: 10, color: status.text }}>{book.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', borderRadius: 12, padding: 8, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 },
  image: { width: 64, height: 96, borderRadius: 8 },
  title: { fontSize: 14, fontWeight: '500' },
  author: { fontSize: 12, color: '#A0A0A0', marginBottom: 2 },
  statusBox: { marginTop: 4, paddingHorizontal: 4, paddingVertical: 2, borderRadius: 6, alignSelf: 'flex-start' },
});
