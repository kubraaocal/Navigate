import React from 'react';
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
    <View style={styles.container}>
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
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Oluşturma Tarihi:
            </Text>
            <Text style={{color: 'black'}}>Gösterilecek Cevap</Text>
          </View>
        </View>
      </View>
      <View style={styles.viewCenter}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.view}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Şirket Adı:</Text>
            <Text style={{color: 'black'}}>Gösterilecek Cevap</Text>
          </View>
          <View style={styles.view}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Görevli Adı:</Text>
            <Text style={{color: 'black'}}>Gösterilecek Cevap</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.view}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Gönderici Adı:
            </Text>
            <Text style={{color: 'black'}}>Gösterilecek Cevap</Text>
          </View>
          <View style={styles.view}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Bitiş Tarihi:
            </Text>
            <Text style={{color: 'black'}}>Gösterilecek Cevap</Text>
          </View>
        </View>
        <View style={styles.view}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Talep Kodu:</Text>
          <Text style={{color: 'black'}}>Gösterilecek Cevap</Text>
        </View>
      </View>
      <View style={styles.viewFooter}>
        <TouchableOpacity onPress={onclick}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Detaya Git</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowsHeight / 2.5,
    width: windowWidth-30,
    marginBottom:10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  view: {
    width: windowWidth / 2.18,
    padding: 3,
    margin: 3,
  },
  viewTop: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  viewCenter: {borderBottomColor: 'black', borderBottomWidth: 1},
  viewFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default CustomTicket;
