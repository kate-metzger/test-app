import { StyleSheet, View, Text } from 'react-native';

export default function HomeGreeting() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Good Evening, Sarah
            </Text>
            <Text style={styles.subtitle}>
                Ready to continue your reading journey?
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Georgia',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.03125,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    color: '#A0A0A0',
  },
});
