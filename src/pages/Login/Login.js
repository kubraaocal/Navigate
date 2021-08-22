import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';


import styles from './Login.styles';

const Login = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground
        source={require('./assests/arkaplan.jpg')}
        style={styles.image}>
        <Image
          source={require('./assests/logo.jpg')}
          style={styles.logo}
          resizeMode="stretch"
        />
        <View style={styles.view}>
          <View style={styles.altView}>
            <Text style={{fontSize: 18}}>E-posta</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.altView}>
            <Text style={{fontSize: 18}}>Şifre</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <View
            style={[
              styles.altView,
              {
                flexDirection: 'row',
                paddingTop: 25,
                paddingBottom: 25,
                justifyContent: 'space-between',
              },
            ]}>
            <View style={styles.checkboxContainer}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
              <Text>Beni Hatırla</Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity 
              style={styles.ileriButton}
              onPress={()=>navigation.navigate("Drawer")}
              >
                <Text style={styles.textYazi}>İleri</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewText}>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.altText}>Şifremi Unuttum</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text 
              onPress={()=>navigation.navigate("SingIn")}
              style={styles.altText}>Kayıtlı değil misiniz?</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    </ScrollView>
  );
};

export default Login;
