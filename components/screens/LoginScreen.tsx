import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../ui/button';
import TextField from '../ui/text-field';
import BookIcon from '../../assets/icons/book.svg';

interface LoginScreenProps {
  onLogin: () => void;
  isDarkMode: boolean;
}

export default function LoginScreen({ onLogin, isDarkMode }: LoginScreenProps) {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#2C2C2C' : 'white' }]}>
      {/* Logo & Title */}
      <View style={styles.logoContainer}>
        <View style={styles.iconWrapper}>
          <BookIcon width={40} height={40} />
        </View>
        <Text style={[styles.title, { color: isDarkMode ? 'white' : 'black' }]}>ReadTracker</Text>
        <Text style={styles.subtitle}>Your personal reading companion</Text>
      </View>

      {/* Form Card */}
      <View style={[styles.formCard, { backgroundColor: isDarkMode ? '#1E1E1E' : '#F5F5F5' }]}>
        <Text style={[styles.heading, { color: isDarkMode ? 'white' : 'black' }]}>
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </Text>

        {isSignUp && (
          <TextField
            label="Name"
            value={name}
            onChange={setName}
            placeholder="Enter your name"
            isDarkMode={isDarkMode}
          />
        )}

        <TextField
          label="Email"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email"
          type="email"
          isDarkMode={isDarkMode}
        />

        <TextField
          label="Password"
          value={password}
          onChange={setPassword}
          placeholder="Enter your password"
          type="password"
          isDarkMode={isDarkMode}
        />
        {/*Comment out when auth is complete*/}
        <Button
          onPress={() => {
            // Navigate to the main tabs immediately
            router.replace('/(tabs)');
          }}
          variant="primary"
          fullWidth
          size="lg"
          isDarkMode={isDarkMode}
        >
          {isSignUp ? 'Sign Up' : 'Log In'}
        </Button>
        {/*Comment out when auth is complete*/}

        {/* <Button onPress={onLogin} variant="primary" fullWidth size="lg" isDarkMode={isDarkMode}>
          {isSignUp ? 'Sign Up' : 'Log In'}
        </Button> */}

        {!isSignUp && (
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={{ color: '#4A90E2' }}>Forgot Password?</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Toggle Sign Up / Login */}
      <View style={styles.toggleContainer}>
        <Text style={{ color: '#A0A0A0' }}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        </Text>
        <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
          <Text style={{ color: '#4A90E2' }}>
            {isSignUp ? 'Log In' : 'Sign Up'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Social Login */}
      <View style={styles.socialContainer}>
        <View style={styles.dividerRow}>
          <View style={[styles.divider, { backgroundColor: isDarkMode ? '#404040' : '#E0E0E0' }]} />
          <Text style={styles.dividerText}>Or continue with</Text>
          <View style={[styles.divider, { backgroundColor: isDarkMode ? '#404040' : '#E0E0E0' }]} />
        </View>

        <View style={{ gap: 12 }}>
          <Button onPress={() => { /* handle Google login */ }} variant="outline" fullWidth isDarkMode={isDarkMode}>
            Google
          </Button>
          <Button onPress={() => { /* handle Apple login */ }} variant="outline" fullWidth isDarkMode={isDarkMode}>
            Apple
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Georgia',
    marginBottom: 4,
  },
  subtitle: {
    color: '#A0A0A0',
  },
  formCard: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  heading: {
    fontSize: 20,
    marginBottom: 16,
  },
  forgotPassword: {
    marginTop: 12,
    alignItems: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 24,
  },
  socialContainer: {
    marginTop: 16,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  divider: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    marginHorizontal: 8,
    fontSize: 12,
    color: '#A0A0A0',
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 12,
  },
});
