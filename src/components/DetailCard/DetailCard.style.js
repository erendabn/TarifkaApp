import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1},
  image: {width: deviceSize.width, height: deviceSize.height / 2.5},
  top_container: {
    margin: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7e382c',
    marginBottom: 3,
  },
  bottom_title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#7e382c',
  },
  line: {backgroundColor: '#bdbdbd', height: 1},
  bottom_container: {
    margin: 10,
  },
  ins_text: {
    fontSize: 15,
  },
  button: {
    backgroundColor: 'red',
    marginHorizontal: 10,
    height: 40,
    borderRadius: 10,
  },
  button_text: {
    color: 'white',
    textAlign: 'center',
    font: 'bold',
    fontSize: 20,
    marginTop: 6,
  },
});
