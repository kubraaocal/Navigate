import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import styles from './Settings.style';
import Sorusayfasi from '../Question/QuestionPage';
import Question from '../Question/Question';
import KonuSayfasi from '../Suggestion/SuggestionPage'



const Settings = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sorusayfasi')}>
        <Text style={styles.text}>Sıkça Sorulan Sorular</Text>
      </TouchableOpacity>
      <View style={{width: '100%', backgroundColor: 'black', height: 0.5}} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('KonuSayfasi')}>
        <Text style={styles.text}>Konu ve Öneriler</Text>
      </TouchableOpacity>
      <View style={{width: '100%', backgroundColor: 'black', height: 0.5}} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Person')}>
        <Text style={styles.text}>Ekip Arkadaşlarım</Text>
      </TouchableOpacity>
      <View style={{width: '100%', backgroundColor: 'black', height: 0.5}} />
    </View>



    // <View style={{flex:1}}>
    //   <HeaderPage title="sıkça sorulan sorular"/>
    //   <Sorusayfasi />
    // </View>
  );
};
// function SettingStack() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Settings" component={Settings} />
//       <Tab.Screen name="Sorusayfasi" component={Sorusayfasi} />
//       <Tab.Screen name="Question" component={Question} />
//       <Tab.Screen name="fonk" component={Question} />
//     </Tab.Navigator>
//   );
// }

export default Settings;
