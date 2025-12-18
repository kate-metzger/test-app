import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HomeGreeting from '../../../components/ui/home/home-greeting';
import { CurrentlyReadingCard } from '../../../components/ui/home/currently-reading-card';
import QuickAddButton from '../../../components/ui/home/quick-add-button';
import StatsGrid from '../../../components/ui/home/stats-grid';
import RecentActivity from '../../../components/ui/home/recent-activity';
import { RecommendationCarousel } from '@/components/ui/recommendation-carousel';

const mockBooks = [
  {
      id: '1',
      title: 'Fourth Wing',
      author: 'Rebecca Yarros',
      coverUrl: 'https://example.com/fourth-wing.jpg',
      genres: ['Fantasy', 'Romance', 'Dragons'],
      progress: 47,
      currentPage: 312,
      totalPages: 662,
  },
  {
      id: '2',
      title: 'The Way of Kings',
      author: 'Brandon Sanderson',
      coverUrl: 'https://example.com/way-of-kings.jpg',
      genres: ['Fantasy', 'Epic Fantasy'],
      progress: 20,
      currentPage: 124,
      totalPages: 1200,
  },
];

const mockRecommendations = [
  {
      id: '1',
      title: 'Iron Flame',
      author: 'Rebecca Yarros',
      cover: 'https://example.com/iron-flame.jpg',
      match: 92,
  },
  {
      id: '2',
      title: 'A Court of Thorns and Roses',
      author: 'Sarah J. Maas',
      cover: 'https://example.com/acotar.jpg',
      match: 88,
  },
];

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <HomeGreeting />
      {mockBooks.map((book) => (
        <CurrentlyReadingCard key={book.id} book={book}/>
      ))}
      <QuickAddButton />
      <StatsGrid />
      <RecentActivity />
      <RecommendationCarousel items={mockRecommendations} />
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
