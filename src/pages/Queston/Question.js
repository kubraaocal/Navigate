import React from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar, TextInput, ScrollView } from 'react-native'
import data from "./data";
import { Transition, Transitioning } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import styles from "./Question.style";
import Button from "../../component/Button"
import HeaderSearch from '../../component/HeaderSearch'

const Stack = createStackNavigator();

const transition = (
    <Transition.Together>
        <Transition.In type="fade" durationMs={200} />
        <Transition.Change />
        <Transition.Out type="fade" durationMs={200} />
    </Transition.Together>
);

export function Question({ navigation }) {

    const [currentIndex, setCurrentIndex] = React.useState(null);
    const ref = React.useRef();

    return (
        <View style={styles.container}>
            <HeaderSearch onPress={() => navigation.navigate("Home")} />

            <View style={styles.subcontainer} >
                <ScrollView>
                    <Transitioning.View
                        ref={ref}
                        transition={transition}
                        style={styles.container}
                    >
                        <StatusBar hidden />
                        {data.map(({ color, header, parag }, index) => {
                            return (<TouchableOpacity
                                key={header}
                                onPress={() => {
                                    ref.current.animateNextTransition();
                                    setCurrentIndex(index === currentIndex ? null : index);
                                }}
                                style={styles.cardContainer}
                                activeOpacity={0.9}
                            >
                                <View style={[styles.container2]}>
                                    <View style={styles.yatay}>
                                        <Text style={[styles.heading, { backgroundColor: 'grey' }]}>{header}</Text>
                                        <Icon name="chevron-down-outline" size={33} color="white" ></Icon>

                                    </View>
                                    {index === currentIndex &&
                                        <View style={styles.subCategoriesList}>
                                            <Text key={parag} style={styles.body} >{parag}</Text>
                                        </View>
                                    }
                                </View>
                            </TouchableOpacity>
                            );
                        })}
                    </Transitioning.View>
                </ScrollView></View>
            <View style={styles.viewFooter}>
                <Button title="Cevapla" color="green" page={() => navigation.navigate('SoruEkle')} />
            </View>
        </View>

        
    )
}

export default Question;