import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import useFetch from '../../hooks/useFetch';
import {API_GENERAL_URL} from '@env';
import MealCard from '../../components/MealCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Meals(props: any) {
  const category = props.route.params.strCategory;
  const navigation = props.navigation;

  const {data, loading, error} = useFetch(
    `${API_GENERAL_URL}/json/v1/1/filter.php?c=${category}`,
  );
  function handleMealSelect(strMeal) {
    navigation.navigate('DetailPage', {strMeal});
  }
  const renderMeals = ({item}) => (
    <MealCard meal={item} onSelect={() => handleMealSelect(item.strMeal)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      {error && <Error />}
      <FlatList data={data.meals} renderItem={renderMeals} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default Meals;
