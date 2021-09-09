import { StyleSheet,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    page:{
        height:windowHeight/1.5,
        width:"95%",
        padding:5,
    },
    view:{
        width:"100%",
        padding:5,
        borderRadius:5,
        borderBottomWidth:0.5,
        marginBottom:10,
    },
    text:{
        fontSize:16,
        fontWeight:"normal"
    },
    input:{
        fontSize:16,
        marginTop:0,
        borderWidth:1,
        lineHeight:4,
        borderColor:"lightgray"
    },
    viewButton:{
        marginTop:"10%",
        width:"100%",
        padding:5,
    },
    buttonView:{
        marginTop:0,
        width:windowWidth-20,
        borderBottomWidth:1,
    } 
})