import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    },
    mView:{
        width:windowWidth,
        height:windowHeight-150,
        alignItems:"center",
    },
    view:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        width:windowWidth,
        margin:5
    },
    input:{
        backgroundColor:"white",
        borderRadius:18,
        borderWidth:1,
        borderColor:"lightgray",
        width:windowWidth/1.2,
        height:"80%",
    },
    text:{
        textAlign:'left',
        width:40,
        height:25,
        marginRight:2
    },
    answerInput:{
        width:windowWidth/1.05,
        height:windowHeight/3,
        borderRadius:18,
        borderColor:"lightgray",
        borderWidth:1,
        backgroundColor:"white",
    },
    buttonView:{
        marginTop:10,
        width:windowWidth-20,
        borderBottomWidth:1,
    }  
})