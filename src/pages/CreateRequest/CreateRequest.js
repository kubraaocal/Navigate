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
import DocumentPicker from 'react-native-document-picker';
import styles from './CreateRequest.style';
import Button from '../../component/Button';
import HeaderPage from '../../component/HeaderPage';

// bu sayfaya dosya eklenince eklendi yazısı gerek

const CreateRequest = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('java');
  const [selectedValue1, setSelectedValue1] = useState('java');
  const [selectedValue2, setSelectedValue2] = useState('java');

  const [documentName, setDocumentName] = useState('');
  async function openDocumentFile() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
      setDocumentName(res.name);
      console.log(documentName);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <HeaderPage title="Yeni Bilet Ekle" onPress={() => navigation.goBack()} /> */}

        <View style={styles.page}>
          <View style={styles.view}>
            <Text style={styles.text}>Ürün seçiniz</Text>
            <Picker
              selectedValue={selectedValue}
              style={{height: 50, width: '100%'}}
              onValueChange={(itemValue1, itemIndex) =>
                setSelectedValue(itemValue1)
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
              selectedValue={selectedValue1}
              style={{height: 50, width: '100%'}}
              onValueChange={(itemValue2, itemIndex) =>
                setSelectedValue1(itemValue2)
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
              selectedValue={selectedValue2}
              style={{height: 50, width: '100%'}}
              onValueChange={(itemValue3, itemIndex) =>
                setSelectedValue2(itemValue3)
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
              style={[styles.input, {height: 70}]}
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => openDocumentFile()}>
            <Text style={{margin: 10}}>Ek Dosya Yükle</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>{documentName}</Text>
        </View>
        <View style={[styles.viewButton],{justifyContent:"center"}}>
          <Button
            title="Gönder"
            color="lightblue"
            page={() => navigation.navigate('Answer')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateRequest;
