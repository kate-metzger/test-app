import React from 'react';
import { Image, StyleSheet, View, Text, Pressable } from 'react-native';
import Button from '../button';
import { useRouter } from 'expo-router';

interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  progress: number;
  currentPage: number;
  totalPages: number;
}

interface CurrentlyReadingCardProps {
  book: Book;
}

export function CurrentlyReadingCard({ book }: CurrentlyReadingCardProps) {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: book.coverUrl }} style={styles.cover} />

        <View style={styles.info}>
          <Text style={styles.label}>CURRENTLY READING</Text>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>

          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${book.progress}%` }]}
            />
          </View>

          <Text style={styles.pageText}>
            Page {book.currentPage} of {book.totalPages}
          </Text>

          <Button
            onPress={() => router.push(`/library/book-details/${book.id}`)}
            variant='primary'
            textStyle={styles.buttonText}
            style={styles.button}>
            Continue Reading
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  cover: {
    width: 90,
    height: 140,
    borderRadius: 10,
  },
  info: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#A0A0A0',
    marginBottom: 4,
    lineHeight: 16,
    fontWeight: 400,
  },
  progressBackground: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: -0.3125,
  },
  author: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 8,
    fontWeight: 400, 
    lineHeight: 20,
    letterSpacing: -0.1504,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4A90E2',
    borderRadius: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 6,
  },
  pageText: {
    fontSize: 12,
    color: '#A0A0A0',
    marginBottom: 8,
    fontWeight: 400,
    lineHeight: 16,
    letterSpacing: 0,
  },
  buttonText: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.1504,
    textAlign: 'center',
  },
  button: {
    height: 32,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 6,
    justifyContent: 'center',
  }
});

