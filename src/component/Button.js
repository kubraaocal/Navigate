import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native'

const Button = ({title,color,page}) => {
    return (
        <TouchableOpacity style={[styles.container,{backgroundColor:color}]} onPress={page}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container:{
        padding:10,
        height:50,
        margin:5,
        backgroundColor:"#2eb1bd",
        width:Dimensions.get("window").width/2.5,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    title:{
        fontSize:18,
        color:"white",
        fontWeight:"bold"
    }
})
