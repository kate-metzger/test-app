import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../Icon';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  isDarkMode?: boolean;
}

export default function ViewToggle({ viewMode, setViewMode, isDarkMode = false }: ViewToggleProps) {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => setViewMode('grid')}
          style={[styles.button, { backgroundColor: viewMode === 'grid' ? '#4A90E2' : isDarkMode ? '#1E1E1E' : '#F5F5F5' }]}
        >
          <Icon name="Grid" size={18} color={viewMode === 'grid' ? '#fff' : '#A0A0A0'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setViewMode('list')}
          style={[styles.button, { backgroundColor: viewMode === 'list' ? '#4A90E2' : isDarkMode ? '#1E1E1E' : '#F5F5F5' }]}
        >
          <Icon name="List" size={18} color={viewMode === 'list' ? '#fff' : '#A0A0A0'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 12 },
  buttons: { flexDirection: 'row', gap: 8 },
  button: { padding: 6, borderRadius: 8 },
});
