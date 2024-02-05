import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, SafeAreaView } from 'react-native';
import Search from './components/Search';
import Row from './components/Row';
import DATA from './Data';

const App = () => {
  const [data, setData] = useState(DATA);
  const [filteredData, setFilteredData] = useState(DATA);

  useEffect(() => {
    setData(DATA);
  }, []);

  const executeSearch = (searchPhrase) => {
    const filteredResults = DATA.filter(
      (item) => item.lastname.toLowerCase().startsWith(searchPhrase.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const renderItem = ({ item }) => <Row person={item} />;

  return (
    <SafeAreaView>
      {/* Search component */}
      <Search executeSearch={executeSearch} />

      {/* FlatList rendering */}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default App;
