import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import Question from './Question';
import HeaderPage from '../../component/HeaderPage';
import Suggestions from './Suggestions'

function Fonk() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sorular" component={Question} />
      <Tab.Screen name="Öneriler" component={Suggestions} />
    </Tab.Navigator>
  );
}

const QuestionPage = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <HeaderPage title="Sıkça Sorulan Sorular" onPress={()=>navigation.goBack()}/>
      <Fonk />
    </View>
  );
};

export default QuestionPage;

const styles = StyleSheet.create({});
