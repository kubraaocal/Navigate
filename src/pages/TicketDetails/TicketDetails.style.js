import { StyleSheet,Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container:{
        backgroundColor:'#E8F0F2',
        flex:1,
        },
      
         frame:{
            backgroundColor:'red',
            height:Dimensions.get('window')/11,
        },
        frame2:{
            backgroundColor:'#E8F0F2',
            flex:1,
            marginRight:20,
            marginLeft:20,
        },
        subContainer:{
            backgroundColor:'#E8F0F2',
            height:windowHeight,
            padding:2,
            margin:20,
            flexDirection:"column",
        },
        card:{//kartın dışındakiview
            marginBottom:20,
            backgroundColor:'white', 
            borderRadius:18,
            flexDirection:'column',
            shadowColor: "#000",
            borderRadius:18,
            padding:15,
            elevation:26,

            width:Dimensions.get('window').width/1.125,
            //height:Dimensions.get('window').height/9.3
            height:Dimensions.get('window').height/7,
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            
        },
        card2:{
            marginTop:30,
            marginBottom:20,
            padding:15,
            backgroundColor:'white', 
            borderRadius:18,
            width:Dimensions.get('window').width/1.125,
            height:Dimensions.get('window').height/4.1,
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation:26,
        },  
        card3:{
            elevation:26,
            marginTop:40,
            padding:15,
            backgroundColor:'white', 
            borderRadius:18,
            width:Dimensions.get('window').width/1.125,
            //  height:Dimensions.get('window').height/5,
            height:Dimensions.get('window').height/4.1,
            shadowOpacity: 0.29,
            shadowRadius: 4.65,


        },
        buttonContainer:{
            marginTop:70,
            padding:10,
            backgroundColor:'#2eb1bd',
            borderRadius:18,
            width:Dimensions.get('window').width/3.125,
            //  height:Dimensions.get('window').height/5,
            height:Dimensions.get('window').height/20,
        marginLeft:50,
        },
        button:{
            height:"50%",
            width:"45%",
            marginBottom:5,
            backgroundColor:"red",
          
            borderRadius:10
        
        },
        title:{
            fontSize:18,
            color:"white"
        }
        
    
})
