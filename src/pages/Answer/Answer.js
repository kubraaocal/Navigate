import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Button from '../../component/Button';
import HeaderPage from '../../component/HeaderPage';
import DocumentPicker from 'react-native-document-picker';

import styles from './Answer.style';

const Answer = ({navigation}) => {
  const [documentName, setDocumentName] = useState('');
  async function openDocumentFile() {
    try {
      const res = await DocumentPicker.pickSingle({
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

  const git = () => {
    navigation.navigate('Anasayfa');
  };
  console.log(documentName);
  return (
    <View style={styles.container}>
      {/* <HeaderPage title="Mail Gönder" onPress={() => navigation.goBack()} /> */}
      <View style={styles.mView}>
        <View style={styles.view}>
          <Text style={styles.text}>CC:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>BCC:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Konu:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.view}>
          <TextInput
            multiline={true}
            numberOfLines={30}
            textAlignVertical="top"
            style={styles.answerInput}
            placeholder="Cevabınızı giriniz.."
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => openDocumentFile()}>
            <Text style={{margin: 10}}>Ek Dosya Yükle</Text>
            {/* <Image/> */}
          </TouchableOpacity>
        </View>
        <View>
          <Text>{documentName}</Text>
        </View>
      </View>
      <View>
        <Button title="Gönder" color="lightblue" page={git} />
      </View>
    </View>
  );
};

export default Answer;
