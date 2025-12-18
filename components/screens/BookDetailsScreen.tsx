import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { BookHeader } from '../ui/book/book-header';
import { RatingCard } from '../ui/book/rating-card';
import { NotesCard } from '../ui/book/notes-card';
import { RatingStars } from '../ui/rating-stars';
import { PillList } from '../ui/pill-list';
import { ActionButtonRow } from '../ui/action-button-row';
import { RecommendationCarousel } from '../ui/recommendation-carousel';

interface BookDetailsScreenProps {
    bookId: string;
    isDarkMode: boolean;
}

interface Book {
    id: string;
    title: string;
    author: string;
    coverUrl: string;
    genres: string[];
    // add other properties like pages, publishedYear, etc.
}

export default function BookDetailsScreen({ bookId, isDarkMode }: BookDetailsScreenProps) {
    const [overallRating, setOverallRating] = useState(4.5);
    const [notes, setNotes] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const mockBooks: Book[] = [
        {
            id: '1',
            title: 'Fourth Wing',
            author: 'Rebecca Yarros',
            coverUrl: '',
            genres: ['Fantasy', 'Romance', 'Dragons'],
        },
        {
            id: '2',
            title: 'The Way of Kings',
            author: 'Brandon Sanderson',
            coverUrl: '',
            genres: ['Fantasy', 'Epic Fantasy']
        },
    ];
    const mockContentWarnings = [
        'Violence',
        'Explicit Language',
    ];
    const mockTags = [
        'Enemies to Lovers',
        'Slow Burn',
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
    const book = mockBooks.find((b: Book) => b.id === bookId);

    if (!book) {
        return (
            <View>
                <Text>
                    Book not found.
                </Text>
            </View>
        );
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: isDarkMode ? '#2C2C2C' : '#FFF'
        }}>
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <BookHeader book={book} isDarkMode={isDarkMode} />
                <ActionButtonRow
                    isDarkMode={isDarkMode}
                    isFavorite={isFavorite}
                    onUpdatePress={() => console.log('Update progress')}
                    onFavoritePress={() => setIsFavorite(!isFavorite)}
                    onSharePress={() => console.log('Share')}
                />
                <RatingCard title="Overall Rating" isDarkMode={isDarkMode}>
                    <RatingStars
                        rating={overallRating}
                        size={32}
                        interactive
                        allowQuarter
                        onRatingChange={setOverallRating}
                        isDarkMode={isDarkMode}
                    />
                </RatingCard>

                <NotesCard
                    notes={notes}
                    setNotes={setNotes}
                    isDarkMode={isDarkMode}
                />

                {/* Genres */}
                <PillList
                    pills={book.genres.map((genre) => ({
                        id: genre,
                        label: genre,
                    }))}
                    variant="accent"
                    isDarkMode={isDarkMode}
                />

                {/* Content Warnings */}
                <PillList
                    pills={mockContentWarnings.map((warning) => ({
                        id: warning,
                        label: warning,
                    }))}
                    variant="warning"
                    isDarkMode={isDarkMode}
                />

                {/* Tags */}
                <PillList
                    pills={mockTags.map((tag) => ({
                        id: tag,
                        label: tag,
                    }))}
                    variant="neutral"
                    isDarkMode={isDarkMode}
                    showAddButton
                    onAddPress={() => {
                        console.log('Add tag');
                    }}
                />

                <RecommendationCarousel
                    items={mockRecommendations}
                    isDarkMode={isDarkMode}
                    onPressItem={(item) => console.log(item.title)}
                />

            </ScrollView>
        </View>
    )
}