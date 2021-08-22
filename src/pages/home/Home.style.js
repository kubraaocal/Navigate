import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'flex-start',
    alignSelf:'center',
    width: windowWidth,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: windowWidth,
    backgroundColor: 'white',
  },
  image: {
    height: windowHeight / 10,
    width: windowWidth / 5,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
  },
  logOutButton: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 6,
    borderRadius: 15,
    width: 55,
    alignItems: 'center',
    margin: 5,
  },
  text: {
    textTransform: 'uppercase',
    margin: 5,
  },
  scrollView: {
    width: windowWidth,
  },
  view: {
    width: windowWidth,
     marginTop: 20,
    alignItems:"center",
    justifyContent:'center',
  },
});
