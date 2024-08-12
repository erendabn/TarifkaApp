import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import useFetch from '../../hooks/useFetch';
import {API_GENERAL_URL} from '@env';
import MealCard from '../../components/MealCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard';

function Detail(props) {
  const meal = props.route.params.strMeal;
  const navigation = props.navigation;

  const {data, loading, error} = useFetch(
    `${API_GENERAL_URL}/json/v1/1/search.php?s=${meal}`,
  );
  function handleDetailSelect(strMeal) {
    navigation.navigate('MealsPage', {strMeal});
  }
  const renderDetail = ({item}) => <DetailCard meal={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      {error && <Error />}
      <FlatList data={data.meals} renderItem={renderDetail} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Detail;
