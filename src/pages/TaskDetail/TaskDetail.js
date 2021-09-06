import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  Modal,
  Dimensions,
} from 'react-native';
import Button from '../../component/Button';
import HeaderPage from '../../component/HeaderPage';

import styles from './TaskDetail.style';
import CustomModal from '../../component/CustomModal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Task = ({navigation}) => {
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisible = () => {
    setisModalVisible(!isModalVisible);
  };

  const git = () => {
    navigation.navigate('Anasayfa');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal transparent={true} animationType="fade" visible={isModalVisible}>
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: 'black',
            opacity: 0.5,
          }}
        />
        <CustomModal
          deger={changeModalVisible}
          git={git}
          text="Görevlerimden silmek istiyor musunuz?"
        />
      </Modal>
      {/* <HeaderPage title="Detay" onPress={() => navigation.goBack()} /> */}
      <ScrollView>
        <View style={styles.view}>
          <Text style={styles.textTitle}>Talep Kodu:</Text>
          <Text style={styles.text}>1212121212</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.textTitle}>Şirket Adı:</Text>
          <Text style={styles.text}>Öçal Holding</Text>
          <Text style={styles.textTitle}>Müşteri Adı:</Text>
          <Text style={styles.text}>Kübra Öçal</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.textTitle}>Ürün:</Text>
          <Text style={styles.text}>Yazılım</Text>
          <Text style={styles.textTitle}>Konu:</Text>
          <Text style={styles.text}>asdasdasd</Text>
          <Text style={styles.textTitle}>Soru:</Text>
          <Text style={styles.text}>Yazılım</Text>
          <Text style={styles.textTitle}>Detaylı açıklama:</Text>
          <Text style={styles.text}>asdasdasd</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.textTitle}>Yüklenen dosya:</Text>
          <Image></Image>
        </View>
      </ScrollView>
      <View style={styles.viewFooter}>
        <Button
          title="Cevapla"
          color="green"
          page={() => navigation.navigate('Answer')}
        />
        <Button
          title="İptal Et"
          color="red"
          page={() => changeModalVisible()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Task;
