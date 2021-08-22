import React from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar, TextInput, ScrollView, Button } from 'react-native'
import data from "./data";
import { Transition, Transitioning } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import styles from "./Question.style";
import Setting from './Setting';

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
            <View style={styles.header} >
                <Text style={styles.headertext}>Sıkca Sorulan Sorular</Text>

            </View>
            <View style={[styles.yatay, { backgroundColor: '#f2f2f2' }]}>
                <TextInput
                    style={styles.textinput}
                    onChangeText={null}
                    placeholder="Sorunu Yazın"
                />
                <Icon name="search-outline" size={33} ></Icon>
            </View>
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
                </ScrollView></View><View style={styles.soru_eklez} >
                <Button
                    title="Soru Ekle"
                    color="#841584"
                    onPress={()=> navigation.navigate(Setting) }
                    accessibilityLabel="Press" /></View>
        </View>

        // <View style={styles.container}>
        //     <View style={styles.header}>
        //         <Image
        //             style={styles.image}
        //             source={require('C:/Users/suley/Desktop/proje/aa/src/Image/intimelogo.png')} />

        //     </View>
        //     <View style={styles.container2}>
        //         <Text>Şifremi Nasıl Değişririm </Text>
        //     </View>
        //     <View style={styles.container2}>
        //         <Text>Size nasıl ulaşabilirim? </Text>
        //     </View>
        //     <View style={styles.container2}>
        //         <Text>Ürün fiyatları değişir mi?</Text>
        //     </View>
        //     <View style={styles.container2}>
        //         <Text>Ürünler orjinal mi?</Text>
        //     </View>
        //     <View style={styles.container2}>
        //         <Text>Siteye Admin panelinden ürün eklenmiyor.</Text>
        //     </View>
        //     <View style={styles.container2}>
        //         <Text>Şifre değiştirilmiyor.</Text>
        //     </View>
        //     <View style={styles.container2}>
        //         <Text>Ürünler nerde tanıtılıyor?</Text>
        //     </View>
        //     <View
        //         style={{
        //             borderBottomColor: 'red',
        //             borderBottomWidth: 1,
        //         }}
        //     />
        // </View>
    )
}

export default Question;