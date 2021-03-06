import React from 'react';
import {TextInput, View} from 'react-native';

import Button from '../../component/Button';
import HeaderPage from '../../component/HeaderPage';
import styles from './Question.style';

const QuestionAdd = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <HeaderPage title="Soru Ekle" onPress={() => navigation.goBack()} /> */}
      <View style={{height:"85%",padding: 10}}>
        <TextInput
          style={styles.textInput}
          onChangeText={null}
          placeholder="Soru başlığını girin"
        />
        <View style={{margin:5}}/>
        <TextInput
          style={styles.textInput}
          onChangeText={null}
          placeholder="Soruyu açıklayın"
          multiline={true}
          numberOfLines={27}
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
export default QuestionAdd;
