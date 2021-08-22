import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import styles from "./Question.style";

const Setting = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Text style={styles.headertext}>Konu Ekle</Text>
            </View>
            <View style={[styles.subcontainer, { paddingStart: 0, paddingEnd: 0 }]} >
                <TextInput
                    style={styles.textinputt}
                    onChangeText={null}
                    placeholder="Eklemek İstediğiniz Soruyu Girin"
                />

                <TextInput
                    style={styles.multitextinput}
                    onChangeText={null}
                    placeholder="Soruyu Acıklayın"
                    multiline={true}
                    numberOfLines={30}
                    textAlignVertical="top"
                />
            </View>
        </View>
    )
}
export default Setting

