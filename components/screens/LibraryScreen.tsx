import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import SearchBar from '@/components/ui/library/search-bar';
import FilterChips from '@/components/ui/library/filter-chips';
import ViewToggle from '@/components/ui/library/view-toggle';
import BookGridItem from '@/components/ui/library/book-grid-item';
import BookListItem from '@/components/ui/library/book-list-item';
import { RelativePathString, ExternalPathString } from 'expo-router';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  status: string;
  progress: number;
}

interface LibraryScreenProps {
  isDarkMode: boolean;
  showSearch: boolean;
  searchQuery: string;
  setSearchQuery: (text: string) => void;
  navigate: (path: RelativePathString | ExternalPathString) => void;
}

export default function LibraryScreen({
  isDarkMode,
  showSearch,
  searchQuery,
  setSearchQuery,
  navigate,
}: LibraryScreenProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilter, setSelectedFilter] = useState('Reading');

  const filters = ['All', 'Reading', 'Read', 'Want to Read', 'Paused', 'DNF'];

  const books: Book[] = [
    {
      id: '1',
      title: 'The Name of the Wind',
      author: 'Patrick Rothfuss',
      cover: 'https://images.unsplash.com/photo-1711185892790-4cabb6701cb8',
      rating: 4.5,
      status: 'Reading',
      progress: 47
    },
    {
      id: '2',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      cover: 'https://images.unsplash.com/photo-1759234008322-70456fcf6aec',
      rating: 5,
      status: 'Read',
      progress: 100
    },
    // Add more books...
  ];

  const filteredBooks =
    selectedFilter === 'All'
      ? books
      : books.filter(book => book.status === selectedFilter);

  return (
    <ScrollView
      style={{ flex: 1, paddingHorizontal: 16, paddingTop: 16, backgroundColor: isDarkMode ? '#2C2C2C' : '#fff' }}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      {showSearch && (
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          isDarkMode={isDarkMode}
        />
      )}

      <FilterChips
        filters={filters}
        selected={selectedFilter}
        onSelect={setSelectedFilter}
        isDarkMode={isDarkMode}
      />

      <ViewToggle
        viewMode={viewMode}
        setViewMode={setViewMode}
        isDarkMode={isDarkMode}
      />

      <View style={{ flexDirection: viewMode === 'grid' ? 'row' : 'column', flexWrap: viewMode === 'grid' ? 'wrap' : 'nowrap', gap: 12 }}>
        {filteredBooks.map(book =>
          viewMode === 'grid' ? (
            <BookGridItem
              key={book.id}
              book={book}
              isDarkMode={isDarkMode}
              onPress={() => navigate(`./book/${book.id}`)}
            />
          ) : (
            <BookListItem
              key={book.id}
              book={book}
              isDarkMode={isDarkMode}
              onPress={() => navigate(`./book/${book.id}`)}
            />
          )
        )}
      </View>
    </ScrollView>
  );
}
