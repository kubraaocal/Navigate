import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = ({ onclick }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
              onPress={onclick}
            >
                <Image
                    style={styles.menu}
                    source={require('../assests/12.png')}
                /></TouchableOpacity>
            <View style={styles.view}>
                <Image
                    resizeMode="contain"
                    style={styles.logo}
                    source={require('../assests/logo.jpg')}
                />
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: windowHeight / 15,
        backgroundColor: '#021D49',
        width: '100%',
        flexDirection: "row",
    },
    title: {
        fontSize: 20,
    },
    logo: {
        height: 30,
        width: "80%",
        borderRadius: 1,

    },
    view: {
        width: "80%",
        alignItems: "center",
        borderRadius: 5,
    },
    menu: {
        borderRadius: 70,
        width: 40,
        height: 40
    }
});