import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { greaterOrEq } from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeaderPage = ({ title ,onPress}) => {
    return (
        <View style={{ flexDirection: "row", backgroundColor: "#021D49",height:windowHeight/12, width:windowWidth}}>
            <View style={{ width: windowWidth / 9, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={onPress} >
                    <Image style={styles.image} source={require('../assests/back.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ width: windowWidth - 90, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 25 }}>{title}</Text>
            </View>
        </View>
    )
}

export default HeaderPage

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 30
    }
})
