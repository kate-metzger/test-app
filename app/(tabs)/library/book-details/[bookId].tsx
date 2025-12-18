import { useLocalSearchParams } from 'expo-router';
import { ScrollView, View, Text } from 'react-native';
import BookDetailsScreen from '../../BookDetails';

export default function PageWrapper() {
    const { bookId } = useLocalSearchParams<{ bookId: string }>();

    if (!bookId) return <Text>Book not found.</Text>;

    return (
        <ScrollView style={{ flex: 1 }}>
            <BookDetailsScreen
                bookId={bookId}
                isDarkMode={false}
            />
        </ScrollView>
    );
}