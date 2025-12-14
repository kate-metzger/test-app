import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import SearchBar from '../ui/library/search-bar';
import FilterChips from '../ui/library/filter-chips';
import ViewToggle from '../ui/library/view-toggle';
import BookGridItem from '../ui/library/book-grid-item';
import BookListItem from '../ui/library/book-list-item';
import { RatingStars } from '../ui/rating-stars';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  status: string;
  progress: number;
}

export default function LibraryScreen({ isDarkMode = false, navigate }: { isDarkMode?: boolean, navigate: (path: string) => void }) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilter, setSelectedFilter] = useState('Reading');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Reading', 'Read', 'Want to Read', 'Paused', 'DNF'];

  const books: Book[] = [
    // ... same book data
  ];

  const filteredBooks = selectedFilter === 'All' ? books : books.filter(b => b.status === selectedFilter);

  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingTop: 16, backgroundColor: isDarkMode ? '#2C2C2C' : '#fff' }}>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} isDarkMode={isDarkMode} />
      <FilterChips filters={filters} selected={selectedFilter} onSelect={setSelectedFilter} isDarkMode={isDarkMode} />
      <ViewToggle viewMode={viewMode} setViewMode={setViewMode} isDarkMode={isDarkMode} />

      {viewMode === 'grid' ? (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          {filteredBooks.map(book => (
            <BookGridItem key={book.id} book={book} isDarkMode={isDarkMode} onPress={() => navigate(`/book/${book.id}`)} />
          ))}
        </View>
      ) : (
        <View style={{ gap: 12 }}>
          {filteredBooks.map(book => (
            <BookListItem key={book.id} book={book} isDarkMode={isDarkMode} onPress={() => navigate(`/book/${book.id}`)} />
          ))}
        </View>
      )}
    </ScrollView>
  );
}
