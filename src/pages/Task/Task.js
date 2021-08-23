import React from 'react';

import {
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './Task.style';
import SelectDropdown from 'react-native-select-dropdown';
import HeaderSearch from '../../component/HeaderSearch';
import CustomTask from '../../component/CustomTask'

function Task({navigation}) {
  const countries = ['Yeni Biletler', 'Eski Biletler', 'A-Z Sıralama', 'Z-A Sıralama'];

  const DATA = [
    {
      name: 1,
    }
  ];
  return (
    <View style={styles.container}>
      <HeaderSearch
        title="Ticket"
        onPress={() => navigation.navigate('Home')}
      />
      <SelectDropdown
        defaultButtonText="Sıralama"
        data={countries}
        onSelect={(selectedItem, index) => {}}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
      <ScrollView>
        <View style={styles.anaView}>
          <FlatList
            data={DATA}
            renderItem={() => (
              <CustomTask
                onclick={() => navigation.navigate('TaskDetails')}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
export default Task;
