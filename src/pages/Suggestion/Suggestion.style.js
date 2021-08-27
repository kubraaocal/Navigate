import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headertext: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 21,
    marginLeft: 15,
  },
  image: {
    backgroundColor: 'white',
    width: 100,
    height: 50,
    borderRadius: 5,
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#2eb1bd',
    flexGrow: 0.1,
  },
  subcontainer: {
    backgroundColor: 'red',
    flex: 0.9,
    margin: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  cardContainer: {
    flexGrow: 1,
  },
  body: {
    fontSize: 18,
    lineHeight: 20 * 1.2,
    textAlign: 'left',
  },
  subCategoriesList: {
    margin: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: '900',
    // textTransform: 'lowercase',
    letterSpacing: -1,
    width: '90%',
  },
  yatay: {
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewFooter: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    marginTop: windowHeight - 200,
    marginLeft: '60%',
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 10,
  },
  top: {
    width: '100%',
    height: '6%',
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 0.2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: {
    height: windowHeight / 17,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewQuestionAdd: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
