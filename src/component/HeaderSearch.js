import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View, Dimensions, TextInput } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeaderSearch = ({ title, onPress }) => {
    return (
        <View style={{ flexDirection: "row", backgroundColor: "#021D49", height: windowHeight / 12, alignItems:"center",justifyContent:"flex-start"}}>
            {/* <View style={{ width: windowWidth / 9, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={onPress} >
                    <Image style={styles.image} source={require('../assests/back.png')} />
                </TouchableOpacity>
            </View> */}
            <View style={{ width: windowWidth/1.03,flexDirection:"row", alignItems: "center",justifyContent:"flex-end",height:windowHeight/15}}>
                <TextInput style={{width:"90%",fontSize:20,color:"white"}} placeholder="Ara" placeholderTextColor="white"/>
                <Image style={styles.image}  source={require('../assests/search.png')} />
            </View>
        </View>
    )
}

export default HeaderSearch

const styles = StyleSheet.create({
    image:{
        height:25,
        width:25,
        margin:2
    }
})
