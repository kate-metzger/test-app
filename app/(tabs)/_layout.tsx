import { Tabs } from 'expo-router';
import BottomTabBar from '../../components/ui/bottom-tab-bar';

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <BottomTabBar {...props} />}>
      <Tabs.Screen name="Home" options={{ title: 'Home' }} />
      <Tabs.Screen name="Library" options={{ title: 'Library' }} />
      <Tabs.Screen name="Discover" options={{ title: 'Discover' }} />
      <Tabs.Screen name="Social" options={{ title: 'Social' }} />
      <Tabs.Screen name="Profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
