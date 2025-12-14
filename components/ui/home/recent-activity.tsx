import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const activity = [
  { type: 'Finished', book: 'Project Hail Mary', author: 'Andy Weir', date: '2 days ago' },
  { type: 'Started', book: 'The Name of the Wind', author: 'Patrick Rothfuss', date: '3 days ago' },
  { type: 'Added', book: 'The Way of Kings', author: 'Brandon Sanderson', date: '5 days ago' },
];

export default function RecentActivity() {
  return (
    <View style={styles.section}>
      <Text style={styles.header}>
        Recent Activity
      </Text>

      <View style={styles.list}>
        {activity.map((item, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.book}>
              {item.book}
            </Text>
            <Text style={styles.author}>
              {item.author}
            </Text>
            <Text style={styles.type}>
              {item.type} · {item.date}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  list: {
    gap: 12,
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  book: {
    marginBottom: 2,
  },
  author: {
    marginBottom: 4,
    color: '#A0A0A0',
  },
  type: {
    color: '#A0A0A0',
  },
  header: {
    marginBottom: 12,
  },
});
