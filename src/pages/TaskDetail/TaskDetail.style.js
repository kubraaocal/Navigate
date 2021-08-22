import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom:25,
  },
  view: {
    padding: 15,
    backgroundColor: 'white',
    margin: 10,
    width: windowWidth / 1.1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  text: {
    margin: 2,
    color: 'black',
    fontSize: 15,
  },
  textTitle: {
    margin: 2,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewFooter: {
    flexDirection: 'row',
    width: windowWidth,
    justifyContent: 'space-evenly',
  },
});
