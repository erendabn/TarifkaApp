import React from 'react';
import {Image, Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';

function CategoryCard(props: any) {
  const cat = props.cat;

  return (
    <TouchableWithoutFeedback onPress={props.onSelect}>
      <View style={styles.container}>
        <Image source={{uri: cat.strCategoryThumb}} style={styles.image} />
        <Text style={styles.title}>{cat.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default CategoryCard;
