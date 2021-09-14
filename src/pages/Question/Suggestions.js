import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItem, { Separator } from '../Swipe';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={quotes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem
              {...item}
              onSwipeFromLeft={() => alert('swiped from left!')}
              onRightPress={() => alert('pressed right!')}
            />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </SafeAreaView>
    );
  }
}

const quotes = [
  { id: '0', text: 'Yeni ürün eklenmesi' },
  { id: '1', text: 'aaaaaaaaaaaaaaaaa' },
  {
    id: '2',
    text: 'sddasdasdasdasdasdasdas',
  },
];