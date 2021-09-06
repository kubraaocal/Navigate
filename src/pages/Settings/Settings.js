import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import styles from './Settings.style';
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sorusayfasi')}>
        <Text style={styles.text}>Sıkça Sorulan Sorular</Text>
        <Icon
          name="chevron-forward-outline"
          color="darkgray"
          size={20}
          style={{marginBottom: 10}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('KonuSayfasi')}>
        <Text style={styles.text}>Konu ve Öneriler</Text>
        <Icon
          name="chevron-forward-outline"
          color="darkgray"
          size={20}
          style={{marginBottom: 10}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Person')}>
        <Text style={styles.text}>Ekip Arkadaşlarım</Text>
        <Icon
          name="chevron-forward-outline"
          color="darkgray"
          size={20}
          style={{marginBottom: 10}}
        />
      </TouchableOpacity>
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
