import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Search = ({ executeSearch }) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearch = () => {
    executeSearch(searchPhrase);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Search by last name..."
      value={searchPhrase}
      onChangeText={(text) => setSearchPhrase(text)}
      onSubmitEditing={handleSearch}
      returnKeyType="search"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Search;
