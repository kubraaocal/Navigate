import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Button from '../../component/Button';
import HeaderPage from '../../component/HeaderPage';

import styles from './Answer.style';

const Answer = ( {navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderPage title="Mail Gönder" onPress={() => navigation.goBack()} />
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
                        style={styles.answerInput}
                        placeholder="Cevabınızı giriniz.."
                    />
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity>
                        <Text style={{ margin: 10 }}>Ek Dosya Yükle</Text>
                        {/* <Image/> */}
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.buttonView}>
          <Image/>
        </View> */}
            </View>
            <View>
                <Button title="Gönder" color="red" />
            </View>
        </View>
    );
};

export default Answer;
