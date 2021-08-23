import React from 'react'
import { View,FlatList,Dimensions } from 'react-native'
import HeaderPage from '../../component/HeaderPage'
import PersonCard from '../../component/PersonCard'

import styles from './Person.style'

const DATA = [
    {
        image: require("../../assests/1.jpeg"),
        nickname: "Hatice Öçal",
        text: "5 dakika önce",
        icon:"trending-up-sharp" //yeşil kırmızı olabilir
    }
]

const Person = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderPage title="Arkadaşlarım" onPress={()=>navigation.goBack()}/>
                <FlatList
                    style={{ width: Dimensions.get('window').width, maxHeight: "100%" }}
                    data={DATA}
                    renderItem={({item})=> <PersonCard  item={item} />}
                    horizontal={false}
                />
        </View>
    )
}

export default Person

