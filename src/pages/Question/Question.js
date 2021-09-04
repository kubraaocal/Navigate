import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import data from './data';
import {Transition, Transitioning} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import styles from './Question.style';
import Button from '../../component/Button';
import HeaderPage from '../../component/HeaderPage';
import QuestionCard from '../../component/QuestionCard';
import CircleButton from '../../component/CircleButton';

const Tab = createMaterialTopTabNavigator();



const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export function Question({navigation}) {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
    <View>
      <ScrollView>
        <Transitioning.View ref={ref} transition={transition}>
          <StatusBar hidden />
          {data.map(({color, header, parag}, index) => {
            return (
              <TouchableOpacity
                key={header}
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                activeOpacity={0.9}>
                <View style={{borderBottomWidth: 0.5, margin: 5}}>
                  <View style={styles.yatay}>
                    <Text style={[styles.heading]}>{header}</Text>
                    <Icon name="chevron-down-outline" size={30} color="black" />
                  </View>
                  {index === currentIndex && (
                    <View style={styles.subCategoriesList}>
                      <Text key={parag} style={styles.body}>
                        {parag}
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </Transitioning.View>
      </ScrollView>
      <View style={styles.viewFooter}>
        <CircleButton navigation={() => navigation.navigate('QuestionAdd')} />
      </View>
    </View>
  );
}

export default Question;
