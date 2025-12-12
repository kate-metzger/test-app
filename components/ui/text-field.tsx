// components/ui/TextField.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface TextFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  onChange: (value: string) => void;
  isDarkMode?: boolean;
}

export default function TextField({
  label,
  value,
  placeholder,
  type = 'text',
  onChange,
  isDarkMode = false,
}: TextFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: isDarkMode ? '#A0A0A0' : '#606060' }]}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={isDarkMode ? '#606060' : '#A0A0A0'}
        secureTextEntry={type === 'password'}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        style={[
          styles.input,
          {
            backgroundColor: isDarkMode ? '#2C2C2C' : '#FFFFFF',
            borderColor: isDarkMode ? '#404040' : '#E0E0E0',
            color: isDarkMode ? '#FFFFFF' : '#000000',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 16,
  },
});
