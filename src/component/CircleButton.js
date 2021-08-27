import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const CircleButton = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={navigation}
        style={styles.roundButton1}>
            <Icon name="pencil-sharp" size={30} color="black"/>
      </TouchableOpacity>
    </View>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton1: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'lightblue',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
