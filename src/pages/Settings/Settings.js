import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import styles from './Settings.style'

const Settings = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Question')}>
        <Text style={styles.text}>Sıkça Sorulan Sorular</Text>
      </TouchableOpacity>
      <View style={{width:"100%",backgroundColor:"black",height:0.5}}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Konu ve Öneriler</Text>
      </TouchableOpacity>
      <View style={{width:"100%",backgroundColor:"black",height:0.5}}/>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Person')}>
        <Text style={styles.text}>Ekip Arkadaşlarım</Text>
      </TouchableOpacity>
      <View style={{width:"100%",backgroundColor:"black",height:0.5}}/>
    </View>
  );
};

export default Settings;
