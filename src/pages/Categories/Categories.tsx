import React from 'react';
import {SafeAreaView, Text, FlatList, View, StyleSheet} from 'react-native';

import {API_GENERAL_URL} from '@env';

import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/CategoryCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Categories(props: any) {
  const navigation = props.navigation;

  function handleCategorySelect(strCategory) {
    navigation.navigate('MealsPage', {strCategory});
  }
  const {data, loading, error} = useFetch(
    `${API_GENERAL_URL}/json/v1/1/categories.php`,
  );

  const renderCategory = ({item}) => (
    <CategoryCard
      cat={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && (
        <FlatList
          keyExtractor={item => item.idCategory}
          data={data.categories}
          renderItem={renderCategory}
        />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
  },
});

export default Categories;
