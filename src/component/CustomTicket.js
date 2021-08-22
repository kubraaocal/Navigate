import React from 'react';
import { useState } from "react";
import { SafeAreaView, Switch, Dimensions, Text, View, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

function CustomTicket({ onclick }) {

  const TicketDetails = () => {
    navigation.navigate('TicketDetails')

  }
  const [text, onChangeText] = React.useState("");
  const [customerName, onChangecustomerName] = React.useState("");
  const [personelName, onChangepersonelName] = React.useState("");
  const [companyName, onChangecompanyName] = React.useState("");
  const [ticketCode, onChangeticketCode] = React.useState("");
  const [degree, onChangedegree] = React.useState("");
  const [date, onChangedate] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  return (

    <View style={styles.card}>
      <View style={styles.subCard1}>
        <View style={styles.ssubCard1}>
          <View style={styles.question}>
            <Text>Konu:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangecustomerName}
              placeholder="Çekilicek cevap"
              value={text}
            />
          </View>
          <View style={styles.question}>
            <Text>Konu:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangepersonelName}
              placeholder="Çekilicek cevap"
              value={text}
            />
          </View>


        </View>




      </View>
      <View style={styles.subCard2}>

        <View style={styles.subCard2Left}>
          <View style={styles.question}>
            <Text>Müşteri Adı:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={customerName}
              placeholder="Çekilicek cevap"
            />

          </View>
          <View style={styles.question}>
            <Text>Görevli Adı:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Çekilicek cevap"
              value={personelName}
            />

          </View>
          <View style={styles.question}>
            <Text>Şirket Adı:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Çekilicek cevap"
              value={companyName}
            />

          </View>
        </View>
        <View style={styles.subCard2Right}>
          <View style={styles.question}>
            <Text>Tarih:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangedate}
              placeholder="Çekilicek cevap"
              value={date}
            />

          </View>
          <View style={styles.question}>
            <Text>Önem</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangedegree}
              placeholder="Çekilicek cevap"
              value={degree}
            />

          </View>
          <View style={styles.question}>
            <Text>Talep Kodu:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeticketCode}
              placeholder="Çekilicek cevap"
              value={ticketCode}
            />

          </View>
        </View>

      </View>
      <View style={styles.subCard3}>

        <TouchableOpacity style={styles.button} onPress={onclick} ><Text>Detaya Git</Text></TouchableOpacity>

      </View>


    </View>
  )

}



const styles = StyleSheet.create({

  card: {//kartın dışındakiview
    //backgroundColor: '#021D49',
    borderRadius: 18,
    shadowColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  subCard1: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 7,
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    padding: 3,

  },
  ssubCard1: {

    flexDirection: 'column',

  },
  subCard2: {
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 6,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 5,


  },
  subCard2Right: {
    backgroundColor: 'white',
    flex: 1,
    marginLeft: 10,
  },
  subCard2Left: {

    backgroundColor: 'white',
    flex: 1,

  },
  subCard3: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 19,
    alignItems: 'center',
    padding: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

  },

  question: {

    padding: 1,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 16,


  },
  input: {
    height: 40,
  }



});
export default CustomTicket;