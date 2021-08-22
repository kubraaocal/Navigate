import React from 'react';
import { useState } from "react";
import { SafeAreaView, Switch, Text, View, TextInput, Button, Alert, TouchableOpacity, FlatList } from 'react-native';
import styles from './Task.style';
import SelectDropdown from 'react-native-select-dropdown';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderSearch from '../../component/HeaderSearch';
import TaskCustem from '../../component/TaskCustem';


const Stack = createStackNavigator();
function Ticket({ navigation }) {
  const countries = ["Tarih", "Şirket", "Konu", "Öncelik"];
  const arrangement = ["Tarihe Göre Artan", "Tarihe Göre azalan", "Alfabetik", "Önem Derecesine göre Göre"]

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const DATA = [
    {
      name: 1
    },
    {
      name: 2
    }, {
      name: 3
    }
  ]
  return (
    <View style={styles.container} >
  <HeaderSearch title="Görev" onPress={()=>navigation.navigate('Home')} />
      <View style={styles.subContainer1} >
        <View style={styles.filter}>
          <SelectDropdown
            containerStyle={{ width: 100 }}
            borderBottomColor='red'
            thumbColor='red'
            defaultButtonText="Filtrele"
            data={countries}
            onSelect={(selectedItem, index) => {
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
          />
        </View>
        <View style={styles.filter2}>
          <SelectDropdown
            containerStyle={{ width: 100 }}
            defaultButtonText="Sırala"
            data={arrangement}
            onSelect={(selectedItem, index) => {
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
          />
        </View>
      </View>
      <View style={styles.subContainer2} >
        <FlatList data={DATA}                       // Görev detayına gidecek 
          renderItem={({ item }) => <TaskCustem onclick={()=> navigation.navigate("TaskDetail")} />} />
      </View>
    </View>
  )
}
export default Ticket;