import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../button';
import Icon from '../Icon';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  isDarkMode?: boolean;
}

export default function ViewToggle({
  viewMode,
  setViewMode,
  isDarkMode = false,
}: ViewToggleProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftGroup}>
        <Button
          onPress={() => setViewMode('grid')}
          variant="chip"
          selected={viewMode === 'grid'}
          isDarkMode={isDarkMode}
          icon={
            <Icon
              name="Grid"
              size={18}
              color={viewMode === 'grid' ? '#FFFFFF' : '#A0A0A0'}
            />
          }
          style={{ marginRight: 8}}
        />

        <Button
          onPress={() => setViewMode('list')}
          variant="chip"
          selected={viewMode === 'list'}
          isDarkMode={isDarkMode}
          icon={
            <Icon
              name="List"
              size={18}
              color={viewMode === 'list' ? '#FFFFFF' : '#A0A0A0'}
            />
          }
        />
      </View>

        <Button
          onPress={() => console.log('Open filters')}
          variant="chip"
          isDarkMode={isDarkMode}
          icon={
            <Icon
              name="Funnel"
              size={16}
              strokeWidth={1.5}
              color={isDarkMode ? '#A0A0A0' : '#666666'}
            />
          }
        >
          Sort & Filter
        </Button>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  leftGroup: {
    flexDirection: 'row',
  }
});
