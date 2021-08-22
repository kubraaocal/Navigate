import { StyleSheet,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#E8F0F2",
        alignItems:"center",
        justifyContent:"center"
    },
    page:{
        height:windowHeight/1.1,
        width:"95%",
        borderColor:"gray",
        borderWidth:1,
        padding:5,
        borderRadius:18,
        backgroundColor:"white"
    },
    view:{
        width:"100%",
        padding:5,
        borderRadius:5,
        borderBottomWidth:0.5,
        marginBottom:10
    },
    text:{
        fontSize:18,
        fontWeight:"normal"
    },
    input:{
        fontSize:18,
        marginTop:10,
        borderWidth:1,
        lineHeight:4,
        borderColor:"lightgray"
    }
})