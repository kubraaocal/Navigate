import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: windowHeight,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    backgroundColor: 'white',
    width: windowWidth - 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    padding: 10,
  },
  altView: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 5,
  },
  input: {
    marginTop: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 18,
    fontSize: 18,
  },
  checkboxContainer: {
    width: windowWidth / 3.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 30,
  },
  textButton: {
    width: windowWidth / 3.5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 30,
  },
  button: {
    width: windowWidth / 5,
    height: 30,
  },
  ileriButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    height: '100%',
    borderRadius: 10,
  },
  textYazi: {
    color: 'white',
  },
  logo: {
    height: 60,
    width: 200,
    margin: 50,
  },
  viewText: {
    width: '100%',
    alignItems: 'flex-end',
  },
  altText: {
    color: 'blue',
    margin:5,
    width: 150,
    textAlign: 'right',
  },
});
