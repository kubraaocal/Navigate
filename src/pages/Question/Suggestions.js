import React from 'react';
import {StyleSheet, Text, View,FlatList,Dimensions} from 'react-native';

import QuestionCard from '../../component/QuestionCard';

const DATA = [
  {
    title: 'Ürünler hakkında bilgi',

    text: '5 dakika önce', // burası fazlaysa ... olması gerek
  },
];

const Suggestions = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: Dimensions.get('window').width, maxHeight: '100%'}}
        data={DATA}
        renderItem={({item}) => <QuestionCard item={item} />}
        horizontal={false}
      />
    </View>
  );
};

export default Suggestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
