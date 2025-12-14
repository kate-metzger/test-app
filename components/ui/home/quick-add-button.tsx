import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import Button from '../button';
import Icon from '../Icon';

export default function QuickAddButton() {
  return (
    <View style={styles.container}>
      <Button
        fullWidth
        onPress={() => router.back()}
        icon={<Icon name="Plus" size={18} color="#fff" />}
      >
        Add New Book
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    marginRight: 8, // space between icon and text
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});
