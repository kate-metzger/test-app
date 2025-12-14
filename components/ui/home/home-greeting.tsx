import { View, Text, StyleSheet } from 'react-native';

export default function HomeGreeting() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good Evening, Sarah</Text>
      <Text style={styles.subtitle}>
        Ready to continue your reading journey?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Georgia',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#A0A0A0',
  },
});
