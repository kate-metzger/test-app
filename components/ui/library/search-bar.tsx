import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import Icon from '../Icon';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Icon name="Search" size={20} color="#A0A0A0" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search by title, author, tropes, mood..."
        placeholderTextColor="#A0A0A0"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center', // vertical centering for container
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    height: 40,
    paddingHorizontal: 10, // gives some space inside container
  },
  icon: {
    marginRight: 12, // space between icon and text
    marginTop: Platform.OS === 'ios' ? 1 : 0, // tiny nudge for iOS
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 0, // remove default padding
    marginTop: Platform.OS === 'ios' ? -1 : -2, // lifts the text slightly to center with icon
  },
});
