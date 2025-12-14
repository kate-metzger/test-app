import { View } from 'react-native';
import { Slot } from 'expo-router';
import TopNavBar from '../../../components/ui/top-nav-bar';

export default function HomeLayout() {
  return (
    <View style={{ flex: 1 }}>
      <TopNavBar
        title="Home"
        isDarkMode={false}
      />
      <Slot />
    </View>
  );
}
