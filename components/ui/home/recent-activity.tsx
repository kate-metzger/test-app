import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

type ActivityStatus = 'Finished' | 'Started' | 'Added';

const activity: {
  type: ActivityStatus;
  book: string;
  author: string;
  date: string;
}[] = [
  { type: 'Finished', book: 'Project Hail Mary', author: 'Andy Weir', date: '2 days ago' },
  { type: 'Started', book: 'The Name of the Wind', author: 'Patrick Rothfuss', date: '3 days ago' },
  { type: 'Added', book: 'The Way of Kings', author: 'Brandon Sanderson', date: '5 days ago' },
];

const STATUS_STYLES: Record<ActivityStatus, { backgroundColor: string; color: string }> = {
  Finished: {
    backgroundColor: '#00C48C20',
    color: '#00C48C',
  },
  Started: {
    backgroundColor: '#4A90E220',
    color: '#4A90E2',
  },
  Added: {
    backgroundColor: '#FFB80020',
    color: '#FFB800',
  },
};

export default function RecentActivity() {
  return (
    <View style={styles.section}>
      <Text style={styles.header}>Recent Activity</Text>

      <View style={styles.list}>
        {activity.map((item, i) => {
          const statusStyle = STATUS_STYLES[item.type];

          return (
            <View key={i} style={styles.card}>
              {/* Status row */}
              <View style={styles.statusRow}>
                <View style={[styles.badge, { backgroundColor: statusStyle.backgroundColor }]}>
                  <Text style={[styles.badgeText, { color: statusStyle.color }]}>
                    {item.type}
                  </Text>
                </View>

                <Text style={styles.date}>{item.date}</Text>
              </View>

              {/* Book info */}
              <Text style={styles.book}>{item.book}</Text>
              <Text style={styles.author}>{item.author}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  header: {
    fontFamily: 'Georgia',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 12,
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
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  book: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 2,
  },
  author: {
    fontSize: 14,
    color: '#A0A0A0',
  },
});
