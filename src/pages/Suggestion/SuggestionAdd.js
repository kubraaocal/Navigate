import React from 'react';
import {TextInput, View} from 'react-native';

import Button from '../../component/Button';
import HeaderPage from '../../component/HeaderPage';
import styles from './Suggestion.style';

const SuggestionAdd = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <HeaderPage title="Soru Ekle" onPress={() => navigation.goBack()} /> */}
      <View style={{padding: 10}}>
        <TextInput
          style={styles.textInput}
          onChangeText={null}
          placeholder="Konu başlığı girin"
        />
        <View style={{margin:5}}/>
        <TextInput
          style={styles.textInput}
          onChangeText={null}
          placeholder="Konuyu açıklayın"
          multiline={true}
          numberOfLines={30}
          textAlignVertical="top"
        />
      </View>
      <View style={styles.viewQuestionAdd}>
        <Button
          title="Soru Ekle"
          color="lightblue"
          page={() => navigation.navigate('QuestionAdd')}
        />
      </View>
    </View>
  );
};
export default SuggestionAdd;
