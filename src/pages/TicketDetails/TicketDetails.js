import React from 'react';
import { useState } from "react";
import { SafeAreaView, Switch, Text, View, FlatList, TextInput, Alert, TouchableOpacity } from 'react-native';
import Button from '../../component/Button';
import styles from './TicketDetails.style';
import HeaderPage from '../../component/HeaderPage';


function TicketDetails({ navigation }) {
    return (
        <View style={styles.container} >
            <HeaderPage title="Detay" onPress={()=>navigation.goBack()}/>
            <View style={styles.subContainer} >
                
                    <View style={styles.card}>
                        <Text>Görevli</Text>
                        <Text>...</Text>
                        <Text>Talep Kodu:</Text>
                        <Text>...</Text>
                    </View>
                    <View style={styles.card2}>
                        <Text>Şirket Adı:</Text>
                        <Text>...</Text>
                        <Text>Müşteri Adı:</Text>
                        <Text>...</Text>
                        <Text>Email:</Text>
                        <Text>...</Text>
                        <Text>Telefon</Text>
                        <Text>...</Text>

                    </View>

                    <View style={styles.card3}>

                        <Text>Ürün:</Text>
                        <Text>...</Text>
                        <Text>Konu:</Text>
                        <Text>...</Text>
                        <Text>Soru:</Text>
                        <Text>...</Text>
                        <Text>Detaylı açıklama</Text>
                        <Text>...</Text>



                    </View>
                
                <View style={{ flexDirection: "row",marginTop:25,justifyContent:'space-between' }}>
                    <Button title="Dosya Göster" color="#2eb1bd" />
                    <Button title="Görev Ekle" color="#2eb1bd" page={() => navigation.navigate('Ticket')} />
                </View>
            </View>
        </View>
    )

}
export default TicketDetails;