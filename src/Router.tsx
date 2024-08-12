import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{title: 'Categories', headerTintColor: 'orange'}}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{title: 'Meals', headerTintColor: 'orange'}}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{title: 'Detail', headerTintColor: 'orange'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
