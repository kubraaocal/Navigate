import React from 'react';
import {useState} from 'react';
import {
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const windowsHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function CustomTicket({onclick}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onclick}>
      <View style={styles.viewTop}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.view}>
            <Text style={styles.textTitle}>Ürün:</Text>
            <Text style={{color: 'black'}}>Gösterilecek Cevap</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.textTitle}>Önem Derecesi:</Text>
            <Text style={{color: 'black'}}>Gösterilecek Cevap</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.view}>
            <Text style={styles.textTitle}>Konu:</Text>
            <Text style={{color: 'black'}}>Gösterilecek Cevap</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.textTitle}>
              Oluşturma Tarihi:
            </Text>
            <Text style={{color: 'black'}}>Gösterilecek Cevap</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.view}>
            <Text style={styles.textTitle}>Şirket Adı:</Text>
            <Text style={{color: 'black'}}>Gösterilecek Cevap</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.textTitle}>
              Bitiş Tarihi:
            </Text>
            <Text style={{color: 'black'}}>Gösterilecek Cevap</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth-20,
    margin:10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 9,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 5,
  },
  view: {
    width: windowWidth / 2.18,
    padding: 3,
    margin: 3,
  },
  textTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default CustomTicket;
