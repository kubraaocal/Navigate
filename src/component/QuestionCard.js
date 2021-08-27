import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const QuestionCard = ({navigation, item}) => {
  return (
    <TouchableOpacity style={{position:navigation}}>
      <View
        style={{
          flexDirection: 'row',
          height: 90,
          alignItems: 'center',
          width: windowWidth,
        }}>
        <View style={styles.view_text}>
          <Text style={styles.text_title}>{item.title}</Text>
          <View style={styles.view_message}>
            <Text style={styles.text_text}>{item.text}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  text_text: {
    fontSize: 17,
    color: 'gray',
  },
  text_title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
  },
  view_message: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view_text: {
    margin: 15,
    width: windowWidth / 1.8,
  },
});
