import BookDetailsScreen from '@/components/BookDetailsScreen';
import { useLocalSearchParams } from 'expo-router';

export default function BookDetailsPage() {
  const { bookId } = useLocalSearchParams<{ bookId?: string }>();

  if (!bookId) return null;

  return (
    <BookDetailsScreen
        bookId={bookId}
        isDarkMode={false} 
    />
  );
}
