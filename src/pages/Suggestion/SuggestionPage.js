import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import HeaderPage from '../../component/HeaderPage';
import Suggestions from './Suggestion'
import Proposition from './Proposition';

function Fonk() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Konular" component={Suggestions} />
      <Tab.Screen name="Öneriler" component={Proposition} />
    </Tab.Navigator>
  );
}

const SuggestionPage = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      {/* <HeaderPage title="Konu ve Öneriler" onPress={()=>navigation.goBack()}/> */}
      <Fonk />
    </View>
  );
};

export default SuggestionPage;

const styles = StyleSheet.create({});
