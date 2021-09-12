import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#021D49',
    flex: 0.1,
  },
  anaView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    width: windowWidth,
  },
  viewFooter: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    marginTop: windowHeight - 160,
    marginLeft: '60%',
  },
  
});
