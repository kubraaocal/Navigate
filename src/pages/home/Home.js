import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';

import styles from './Home.style';
import Header from '../../component/Header';
import HomeButton from '../../component/HomeButton';



const DATA = [
  {
    name: 'Biletler',
    navigation: "Ticket"
  },
  {
    name: 'Görevlerim',
    navigation:"Task"
  },
  {
    name: 'Biten görevler',
    navigation:"Drawer"
  },
  {
    name: 'Konu ve Öneriler',
    navigation:"Topic and Suggestions"
  },
  {
    name: 'Sıkça sorulan sorular',
    navigation:"Question"
  },
];

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header  onclick={()=> navigation.openDrawer()} />
      <View style={styles.insideContainer}>
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={require('../../assests/logo.jpg')}
          />
          <Text style={styles.text}>İsim Soyisim</Text>
          <Text style={styles.text}>Departman</Text>
          <TouchableOpacity style={styles.logOutButton}>
            <Text style={{color: 'red'}}>Çıkış</Text>
          </TouchableOpacity>
        </View>
        {/* <ScrollView style={styles.scrollView}> */}
          <View style={styles.view}>
            <FlatList
              numColumns={2}
              data={DATA}
              renderItem={({item}) =><HomeButton name={item.name} onclick={()=>navigation.navigate(item.navigation)} /> 
                  
                  }
               
            />
          </View>
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

export default Home;
