import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
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
    backgroundColor: '#F2F2F2',
    flex: 0.9,
    margin: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  cardContainer: {
    flexGrow: 1,
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: 'left',
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subCategoriesList: {
    marginTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: '900',
    textTransform: 'lowercase',
    letterSpacing: -1,
    width: '90%',
  },
  yatay: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  soru_ekle: {
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    flex: 0.1,
  },
  textinput: {
    borderRadius: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width: '83%',
  },
  textinputt: {
    borderRadius: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width: '90%',
  },
  multitextinput: {
    borderRadius: 10,
    height: 500,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width: '90%',
  },
  altmenu: {
    flex: 0.1,
  },
  viewFooter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
});
