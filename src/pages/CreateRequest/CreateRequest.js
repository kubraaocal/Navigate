import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import Header from '../../component/Header';
import styles from './CreateRequest.style';
import Button from '../../component/Button';
import HeaderPage from '../../component/HeaderPage';

// bu sayfaya dosya eklenince eklendi yazısı gerek

const CreateRequest = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View style={styles.container}>
      <HeaderPage title="Yeni Bilet Ekle" onPress={() => navigation.goBack()} />
      <View style={styles.page}>
        <View style={styles.view}>
          <Text style={styles.text}>Ürün seçiniz</Text>
          <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item
              style={{color: 'gray'}}
              enabled={false}
              label="Seçiniz.."
              value="sec"
            />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Konu seçiniz</Text>
          <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item
              style={{color: 'gray'}}
              enabled={false}
              label="Seçiniz.."
              value="sec"
            />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Soru başlığı</Text>
          <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item
              style={{color: 'gray'}}
              enabled={false}
              label="Seçiniz.."
              value="sec"
            />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Kısaca soru</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Detaylı açıklama</Text>
          <TextInput
            multiline={true}
            numberOfLines={30}
            textAlignVertical="top"
            style={[styles.input, {height: 100}]}
          />
        </View>
      </View>
      <View
        style={[
          styles.viewButton,
          {flexDirection: 'row', justifyContent: 'space-around'},
        ]}>
        <Button
          title="Dosya Ekle"
          color="lightblue"
          page={() => navigation.navigate('Answer')}
        />
        <Button
          title="Gönder"
          color="lightblue"
          page={() => navigation.navigate('Answer')}
        />
      </View>
    </View>
  );
};

export default CreateRequest;
