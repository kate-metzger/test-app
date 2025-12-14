import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Button from '../button';

interface FilterChipsProps {
  filters: string[];
  selected: string;
  onSelect: (filter: string) => void;
  isDarkMode?: boolean;
}

export default function FilterChips({
  filters,
  selected,
  onSelect,
  isDarkMode = false,
}: FilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      {filters.map((filter) => (
        <Button
          key={filter}
          variant="chip"
          selected={filter === selected}
          onPress={() => onSelect(filter)}
          isDarkMode={isDarkMode}
          style={styles.chip}
        >
          {filter}
        </Button>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 4,
  },
  scroll: {
    marginBottom: 12,
  },
  chip: {
    marginRight: 8,
  },
});
