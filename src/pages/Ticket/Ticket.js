import React from 'react';
import {useState} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Text,
  Modal,
  Dimensions,
} from 'react-native';
import styles from './Ticket.style';
import SelectDropdown from 'react-native-select-dropdown';
import HeaderSearch from '../../component/HeaderSearch';
import CustomTicket from '../../component/CustomTicket';
import CircleButton from '../../component/CircleButton';
import TopButton from '../../component/ShortandFilter'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisible = () => {
    setisModalVisible(!isModalVisible);
  };
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
