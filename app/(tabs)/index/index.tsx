import { ScrollView, StyleSheet } from 'react-native';
import HomeGreeting from '../../../components/ui/home/home-greeting';
import CurrentlyReadingCard from '../../../components/ui/home/currently-reading-card';
import QuickAddButton from '../../../components/ui/home/quick-add-button';
import StatsGrid from '../../../components/ui/home/stats-grid';
import RecentActivity from '../../../components/ui/home/recent-activity';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <HomeGreeting />
      <CurrentlyReadingCard />
      <QuickAddButton />
      <StatsGrid />
      <RecentActivity />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
