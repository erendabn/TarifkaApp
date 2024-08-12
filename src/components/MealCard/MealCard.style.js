import {Dimensions, StyleSheet} from 'react-native';

const device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    height: device.height / 5,
    maxWidth: device.width,
    marginHorizontal: 4,
    justifyContent: 'space-between',
  },
  image_container: {
    flex: 1,
    height: device.height / 6,
    maxWidth: device.width,
    margin: 10,
    borderRadius: 10,
  },
  text_container: {
    backgroundColor: '#00000099',
    maxHeight: device.height / 6,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 14,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
    marginRight: 10,
  },
});
