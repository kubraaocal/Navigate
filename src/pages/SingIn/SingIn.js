import React from 'react';
import { useState } from "react";
import { SafeAreaView, Switch, Text, View, TextInput, Alert,Button} from 'react-native';
import styles from './SingIn.style';
import Input from '../Input/input';

function SignIn({ navigation }) {
    const [userName, setUserName] = useState('');

    return(
            <View style={styles.container}> 
            <View style={styles.header}>
                  </View>
                  <View style={styles.frame}>   
                 
                 <Input label="İsim:" placeholder="İsim:" onChangeText={(e)=>setUserName(e)} />
                 <Input label="Soyİsim:" placeholder="Soyİsim:" onChangeText={(e)=>setUserName(e)} />
                 <Input label="Telefon" placeholder="Telefon:" onChangeText={(e)=>setUserName(e)} />
                 <Input label="Email:" placeholder="Email:" onChangeText={(e)=>setUserName(e)} />
                 <Input label="Adres:" placeholder="Adres:" onChangeText={(e)=>setUserName(e)} />
                 <Input label="Şirket Adı" placeholder="Şirket Adı" onChangeText={(e)=>setUserName(e)} />
                 <Input label="Kunlanıcı Adı" placeholder="Kunlanıcı Adı" onChangeText={(e)=>setUserName(e)} />
                 </View>
            </View>
    )
}
export default SignIn;

