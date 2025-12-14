import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { RatingStars } from '../rating-stars';

interface BookGridItemProps {
  book: any;
  isDarkMode?: boolean;
  onPress: () => void;
}

export default function BookGridItem({ book, isDarkMode = false, onPress }: BookGridItemProps) {
  return (
    <TouchableOpacity style={{ width: '32%' }} onPress={onPress}>
      <View style={{ marginBottom: 4 }}>
        <Image source={{ uri: book.cover }} style={styles.image} />
        {book.progress > 0 && book.progress < 100 && (
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${book.progress}%` }]} />
          </View>
        )}
      </View>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]} numberOfLines={2}>
        {book.title}
      </Text>
      <Text style={styles.author} numberOfLines={1}>
        {book.author}
      </Text>
      {book.rating > 0 && <RatingStars rating={book.rating} size={14} isDarkMode={isDarkMode} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: { width: '100%', aspectRatio: 2/3, borderRadius: 12 },
  progressBarBackground: { height: 4, backgroundColor: '#40404020', borderRadius: 2, marginTop: 2 },
  progressBarFill: { height: '100%', backgroundColor: '#4A90E2', borderRadius: 2 },
  title: { fontSize: 14, fontWeight: '500', marginTop: 4 },
  author: { fontSize: 12, color: '#A0A0A0', marginBottom: 2 },
});
