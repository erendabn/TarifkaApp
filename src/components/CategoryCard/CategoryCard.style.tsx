import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  image: {
    minHeight: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  title: {padding: 20, fontWeight: 'bold', fontSize: 20},
});
