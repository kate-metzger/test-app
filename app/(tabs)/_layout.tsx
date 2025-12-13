import { Tabs, usePathname } from 'expo-router';
import BottomTabBar from '../../components/ui/bottom-tab-bar';
import TopNavBar from '../../components/ui/top-nav-bar';

export default function TabsLayout() {
  const pathname = usePathname();

  const titleMap: Record<string, string> = {
    '/(tabs)': 'Home',
    '/(tabs)/library': 'Library',
    '/(tabs)/discover': 'Discover',
    '/(tabs)/social': 'Social',
    '/(tabs)/profile': 'Profile',
    '/BookDetails': 'Book Details', // example of a nested screen
    '/EditProfile': 'Edit Profile',
    '/FriendProfile': 'Friend Profile',
    '/UpdateProgress': 'Update Progress',
  };

  const title = titleMap[pathname] ?? 'ReadTracker';

  const searchPaths = ['/(tabs)/library', '/(tabs)/discover', '/(tabs)/social'];

  return (
    <>
      {/* Top Navigation */}
      <TopNavBar
        title={title}
        isDarkMode={false}
        showBack={pathname !== '/(tabs)'} // show back arrow for all non-home screens
        showSearch={searchPaths.includes(pathname)} // show search icon
        showMenu={pathname === '/profile'} // show menu
      />

      {/* Bottom Tabs */}
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <BottomTabBar {...props} />}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="library" />
        <Tabs.Screen name="discover" />
        <Tabs.Screen name="social" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </>
  );
}
