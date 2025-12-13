import { useEffect } from 'react';
import { useNavigation } from 'expo-router';

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Home',
    });
  }, []);

  return null;
}
