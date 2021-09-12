import React from 'react';
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

const Filters = ({data}) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
        alignItems: 'flex-end',
      }}
      onPress={() => data()}>
      <View
        style={{
          position: 'absolute',
          width: windowWidth / 2,
          height: windowHeight,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            padding: 10,
            width: windowWidth / 2,
            alignItems: 'center',
            borderBottomWidth: 0.5,
          }}>
          <Text style={{fontSize: 17, color: 'black'}}>Filtreleme</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Şirket İsmi</Text>
          <Icon
            name="chevron-forward-outline"
            color="darkgray"
            size={20}
            style={{marginBottom: 10}}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Filters;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    marginLeft: 5,
    width: windowWidth / 2.07,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
