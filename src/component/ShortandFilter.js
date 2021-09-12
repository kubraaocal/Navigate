import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import Sirala from './Short';
import Filtre from './Filters';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ShortandFilter = () => {
  const [isModalFilterVisible, setisModalFilterVisible] = useState(false);
  const [isModalShortVisible, setisModalShortVisible] = useState(false);

  const changeModalFilterVisible = () => {
    setisModalFilterVisible(!isModalFilterVisible);
  };

  const changeModalShortVisible = () => {
    setisModalShortVisible(!isModalShortVisible);
  };

  return (
    <View style={{flexDirection: 'row',paddingBottom:10,paddingTop:10,borderBottomWidth:0.5}}>
      <TouchableOpacity
        style={{
          width: windowWidth / 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => changeModalShortVisible()}>
        <Text style={{fontSize: 18}}>Sırala</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalShortVisible}>
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: 'black',
            opacity: 0.5,
            position: 'relative',
          }}
        />
        <Sirala data={changeModalShortVisible} />
      </Modal>
      <View style={{backgroundColor:"gray",width:1}}></View>
      <TouchableOpacity
        style={{
          width: windowWidth / 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => changeModalFilterVisible()}>
        <Text style={{fontSize: 18}}>Filtrele</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="none"
        visible={isModalFilterVisible}>
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: 'black',
            opacity: 0.5,
            position: 'relative',
          }}
        />
        <Filtre data={changeModalFilterVisible} />
      </Modal>
    </View>
  );
};

export default ShortandFilter;

const styles = StyleSheet.create({});
