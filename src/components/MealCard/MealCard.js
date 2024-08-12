import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  ImageBackground,
  Text,
} from 'react-native';
import styles from './MealCard.style';

function MealCard(props) {
  const meal = props.meal;
  return (
    <TouchableWithoutFeedback onPress={props.onSelect}>
      <View style={styles.container}>
        <ImageBackground
          imageStyle={styles.image_container}
          source={{uri: meal.strMealThumb}}></ImageBackground>
        <View style={styles.text_container}>
          <Text style={styles.title}>{meal.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MealCard;
