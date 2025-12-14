import { ScrollView, StyleSheet, View } from 'react-native';
import { TopNavBar } from '../../../components/ui/top-nav-bar';

import HomeGreeting from '../../../components/ui/home/home-greeting';
import CurrentlyReadingCard from '../../../components/ui/home/currently-reading-card';
import QuickAddButton from '../../../components/ui/home/quick-add-button';
import StatsGrid from '../../../components/ui/home/stats-grid';
import RecentActivity from '../../../components/ui/home/recent-activity';

export default function HomeScreen() {
  return (
    <View style={styles.root}>
      <TopNavBar title="Home" showMenu />

      <ScrollView contentContainerStyle={styles.container}>
        <HomeGreeting />
        <CurrentlyReadingCard />
        <QuickAddButton />
        <StatsGrid />
        <RecentActivity />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    padding: 16,
    paddingBottom: 40,
  },
});
