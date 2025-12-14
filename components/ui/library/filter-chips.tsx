import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface FilterChipsProps {
  filters: string[];
  selected: string;
  onSelect: (filter: string) => void;
  isDarkMode?: boolean;
}

export default function FilterChips({ filters, selected, onSelect, isDarkMode = false }: FilterChipsProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
      {filters.map((filter) => {
        const isSelected = filter === selected;
        return (
          <TouchableOpacity
            key={filter}
            onPress={() => onSelect(filter)}
            style={[
              styles.chip,
              {
                backgroundColor: isSelected
                  ? '#4A90E2'
                  : isDarkMode ? '#1E1E1E' : '#F5F5F5',
              },
            ]}
          >
            <Text style={{ color: isSelected ? '#fff' : isDarkMode ? '#A0A0A0' : '#666' }}>
              {filter}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
  },
});
