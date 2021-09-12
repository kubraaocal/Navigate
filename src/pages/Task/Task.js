import React, {useState} from 'react';

import {
  View,
  FlatList,
  ScrollView,
  Modal,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './Task.style';
import SelectDropdown from 'react-native-select-dropdown';
import HeaderSearch from '../../component/HeaderSearch';
import CustomTicket from '../../component/CustomTicket';
import Sirala from '../../component/Short';
import Filtre from '../../component/Filters';
import TopButton from '../../component/ShortandFilter';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Task({navigation}) {
  const DATA = [
    {
      name: 1,
    },
  ];
  return (
    <View style={styles.container}>
      <HeaderSearch
        title="Ticket"
        onPress={() => navigation.navigate('Home')}
      />
      <TopButton />
      <ScrollView>
        <View style={styles.anaView}>
          <FlatList
            data={DATA}
            renderItem={() => (
              <CustomTicket
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
