import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from '../Icon';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  isDarkMode?: boolean;
}

export default function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search by title, author, tropes, mood...',
  isDarkMode = false,
}: SearchBarProps) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? '#1E1E1E' : '#F5F5F5',
          borderColor: isDarkMode ? '#404040' : '#E0E0E0',
        },
      ]}
    >
      <View style={styles.iconWrapper}>
        <Icon
          name="Search"
          size={18}
          color={isDarkMode ? '#A0A0A080' : '#60606080'} 
        />
      </View>
      <TextInput
        style={[styles.input, { color: isDarkMode ? '#FFF' : '#000' }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={isDarkMode ? '#A0A0A080' : '#A0A0A0'}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    height: 40,
    marginBottom: 12,
  },
  iconWrapper: {
    width: 36,           // fixed width to push text away
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: 12,
    lineHeight: 24,
    paddingBottom: 12,
    paddingTop: 12,
    paddingRight: 16,
    paddingLeft: 40
  },
});
