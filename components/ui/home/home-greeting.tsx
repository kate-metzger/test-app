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
  title: {},
  subtitle: {},
});
