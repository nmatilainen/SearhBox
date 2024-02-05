import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Row = ({ person: { firstname, lastname } }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{lastname}, {firstname}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Row;
