import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  Switch,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './Ticket.style';
import SelectDropdown from 'react-native-select-dropdown';
import HeaderSearch from '../../component/HeaderSearch';
import CustomTicket from '../../component/CustomTicket';
import CircleButton from '../../component/CircleButton';

function Ticket({navigation}) {
  const countries = [
    'Yeni Biletler',
    'Eski Biletler',
    'A-Z Sıralama',
    'Z-A Sıralama',
  ];

  const DATA = [
    {
      name: 1,
    },
    {
      name: 2,
    },
    {
      name: 3,
    },
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
              <CustomTicket
                onclick={() => navigation.navigate('TicketDetails')}
              />
            )}
          />
        </View>
      </ScrollView>
      <View style={styles.viewFooter}>
        <CircleButton navigation={() => navigation.navigate('CreateRequest')} />
      </View>
    </View>
  );
}
export default Ticket;
