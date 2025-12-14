import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This is a modal</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 4,
  },
  inner: {
    height: 56,                 // ← THIS fixes the Home header height issue
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  side: {
    width: 64,                  // keeps title perfectly centered
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Georgia',
    fontWeight: '500',
  },
  iconButton: {
    padding: 6,
  },
  label: {
    fontSize: 11,
    color: '#A0A0A0',
    marginBottom: 4,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
