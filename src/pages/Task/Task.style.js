import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:"#eeeeee",
        flex:1,
   
        
        },
        header:{
            backgroundColor:'#021D49',
            flex:0.1,
          
         },
         //
        subContainer1:{
            backgroundColor:'white',
            flex:0.044,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
           },
        //En dış container
        subContainer2:{
      
            flex:0.966,
            padding:2,
           
            
        },
        
       
        
        frame:{
            justifyContent:'center',
            backgroundColor:'#eeeeee',
            width: Dimensions.get('window').width/1,
            height: Dimensions.get('window').height/2,
            justifyContent:'center',
          
            
        },
         bottonText:{
            fontSize:20,
            color:'white'
        },
        
     
        subframe1:{
         
            flex:1,
            borderRadius:18,
            backgroundColor:"black",
            
        },
        subframe2:{
            marginTop:30,
            flex:1,
            borderRadius:18,
            marginBottom:30
            
        },
        filter:{
             alignItems:'center',
             flex:1,
             height:'100%',
             width:'50%',
             backgroundColor:'#eeeeee',
             borderColor:'black',
             borderWidth:1,
             
        },
        filter2:{
            alignItems:'center',
            height:'100%',
            width:'50%',
            borderColor:'black',
            borderWidth:1,
            borderRightWidth:1,
            borderWidth:1,
            backgroundColor:'#eeeeee',
        }   


})