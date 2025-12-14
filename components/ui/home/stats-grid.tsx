import { View, Text, StyleSheet } from 'react-native';
import { BookOpen, Flame, Target } from 'lucide-react-native';

const stats = [
  { label: 'Pages Read', value: '12,453', icon: BookOpen, color: '#4A90E2' },
  { label: 'Day Streak', value: '23', icon: Flame, color: '#FF6B35' },
  { label: '2024 Goal', value: '34/50', icon: Target, color: '#00C48C' },
];

export default function StatsGrid() {
  return (
    <View style={styles.grid}>
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <View key={i} style={styles.card}>
            <View style={[styles.iconWrap, { backgroundColor: stat.color + '20' }]}>
              <Icon size={16} color={stat.color} />
            </View>
            <Text style={styles.value}>{stat.value}</Text>
            <Text style={styles.label}>{stat.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  card: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 12,
  },
  iconWrap: {
    width: 28,
    height: 28,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
  },
  label: {
    fontSize: 11,
    color: '#A0A0A0',
  },
});
