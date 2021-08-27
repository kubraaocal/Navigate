import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import data from './data';
import {Transition, Transitioning} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './Suggestion.style';
import HeaderPage from '../../component/HeaderPage';
import QuestionCard from '../../component/QuestionCard';//buraya özel card yapılabilir
import CircleButton from '../../component/CircleButton';

const DATA = [
  {
    title: 'Ürünler hakkında bilgi',
    text: '5 dakika önce', // burası fazlaysa ... olması gerek
  },
];

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export function Suggestion({navigation}) {
  const [isModalVisible, setisModalVisible] = useState('absolute');
  const [isOpacity, setisOpacity] = useState(1);
  const [isClick1, setisClick1] = useState(true);
  const [isClick2, setisClick2] = useState(false);

  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
    <View style={styles.container}>
      <HeaderPage
        title="Konu ve Öneriler"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.top}>
        <TouchableOpacity
          style={[styles.button, {borderEndWidth: 0.1,backgroundColor:isClick1===true ? "lightgray":"white"}]}
          onPress={() => {
            setisModalVisible('absolute'), setisOpacity(1),setisClick1(true),setisClick2(false);
          }}>
          <Text style={{fontSize:20}}>Sorular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {borderStartWidth: 0.2,backgroundColor:isClick2===true ? "lightgray":"white"}]}
          onPress={() => {
            setisModalVisible('relative'), setisOpacity(0),setisClick1(false),setisClick2(true);
          }}>
          <Text style={{fontSize:20}}>Öneriler</Text>
        </TouchableOpacity>
      </View>
      <View style={{position: isModalVisible}}>
        <FlatList
          style={{width: Dimensions.get('window').width, maxHeight: '100%'}}
          data={DATA}
          renderItem={({item}) => (
            <QuestionCard item={item} navigation={isModalVisible} />
          )}
          horizontal={false}
        />
      </View>
      <View style={{opacity: isOpacity, height: '87%'}}>
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
                      <Icon
                        name="chevron-down-outline"
                        size={30}
                        color="black"
                      />
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
          <CircleButton navigation={()=>navigation.navigate('QuestionAdd')} />
        </View>
      </View>
    </View>
  );
}

export default Suggestion;
