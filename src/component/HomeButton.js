import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const HomeButton = ({name,onclick}) => {
  return (
    <TouchableOpacity style={styles.cart} onPress={onclick} >
        <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  cart: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    margin:10,
    height: 100,
    backgroundColor: '#021D49',
    borderRadius: 10,
    alignSelf:'center',
    marginLeft:20
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
