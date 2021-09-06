import {StyleSheet, Dimensions} from 'react-native';

const windowsHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginBottom: 10,
    width: windowWidth - 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize:16,
    color: 'gray',
    marginBottom: 10,
  },
});
