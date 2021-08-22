import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import styles from "./pages/Queston/Question.style";
import HeaderPage from './component/HeaderPage';
import Button from './component/Button'

const Home = ({navigation,title}) => {
    return (
        <View style={styles.container}>
            <HeaderPage title={"Topic and Suggestions"} onPress={()=> navigation.navigate("Home")} />
            <View style={[styles.subcontainer, { paddingStart: 0, paddingEnd: 0 }]} >
                <TextInput
                    style={styles.textinputt}
                    onChangeText={null}
                    placeholder="Eklemek İstediğiniz Konuyu veya Öneriyi Girin"
                />

                <TextInput
                    style={styles.multitextinput}
                    onChangeText={null}
                    placeholder="Konuyu veya Öneriyi Acıklayın"
                    multiline={true}
                    numberOfLines={30}
                    textAlignVertical="top"
                />
            </View>
            <View style={styles.viewFooter}>
                <Button title="Gönder" color="green" page={() => navigation.navigate('Home')} />
            </View>
        </View>
    )
}

export default Home
