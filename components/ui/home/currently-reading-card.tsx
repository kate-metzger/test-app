import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../button';
import { router } from 'expo-router';

export default function CurrentlyReadingCard() {
  const book = {
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    cover: 'https://images.unsplash.com/photo-1711185892790-4cabb6701cb8',
    progress: 47,
    currentPage: 312,
    totalPages: 662,
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: book.cover }} style={styles.cover} />

        <View style={styles.info}>
          <Text style={styles.label}>CURRENTLY READING</Text>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>

          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${book.progress}%` }]} />
          </View>

          <Text style={styles.pageText}>
            Page {book.currentPage} of {book.totalPages}
          </Text>

          <Button size="sm" fullWidth onPress={() => router.push('/book/1')}>
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
    padding: 16,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  cover: {
    width: 90,
    height: 135,
    borderRadius: 8,
  },
  info: {
    flex: 1,
  },
  label: {
    fontSize: 11,
    color: '#A0A0A0',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  author: {
    fontSize: 13,
    color: '#A0A0A0',
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4A90E2',
  },
  pageText: {
    fontSize: 11,
    color: '#A0A0A0',
    marginBottom: 8,
  },
});
