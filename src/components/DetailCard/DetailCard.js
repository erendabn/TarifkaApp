import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './DetailCard.style';

function DetailCard(props) {
  const linkingYoutube = () => {
    Linking.openURL(meal.strYoutube);
  };

  const meal = props.meal;
  return (
    <View style={styles.container}>
      <Image source={{uri: meal.strMealThumb}} style={styles.image} />
      <View style={styles.top_container}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.bottom_title}>{meal.strArea}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.bottom_container}>
        <Text style={styles.ins_text}>{meal.strInstructions}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={linkingYoutube}>
        <Text style={styles.button_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DetailCard;
