import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomModal = ({deger}) => {
  return (
    <View style={styles.container}>
        <View style={styles.view}>
          <View style={styles.modal}>
            <Text>Görevlerime eklemek istiyor musunuz?</Text>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={[styles.button, {borderEndWidth: 0.1}]}
              onPress={() => deger()}>
              <Text>Evet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, {borderStartWidth: 0.2}]}
              onPress={() => deger()}>
              <Text>Hayır</Text>
            </TouchableOpacity>
          </View>
        </View>
      
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:windowHeight,
    width:windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    position:"absolute"
  },
  view: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: windowHeight / 7,
    width: windowWidth - 80,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  modal: {
    width: '100%',
    height: '50%',
    flexDirection: 'column',
    borderColor: 'gray',
    borderWidth: 0.2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 0.2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: {
    height: windowHeight / 15,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
