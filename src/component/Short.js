import React,{useState}from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Short = ({data}) => {

    const [siralamaText, setSiralamaText] = useState("");

  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'flex-end',
      }}
      onPress={() => data()}>
      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          height: windowHeight / 3.5,
          backgroundColor: 'white',
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
        }}>
        <View
          style={{
            padding: 10,
            width: windowWidth,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 0.5,
          }}>
          <Text style={{fontSize: 17, color: 'black'}}>Sıralama</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>[data(),setSiralamaText("Yeni Biletler")]}>
          <Text style={styles.text}>Yeni Biletler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>[data(),setSiralamaText("Yeni Biletler")]}>
          <Text style={styles.text}>Eski Biletler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>[data(),setSiralamaText("Yeni Biletler")]}>
          <Text style={styles.text}>A-Z Sıralama</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>[data(),setSiralamaText("Yeni Biletler")]}>
          <Text style={styles.text}>Z-A Sıralamar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Short;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
  },
  button: {
    padding: 10,
    width: windowWidth,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
