import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import RestaurantDetailsScreen from './screens/RestaurantDetailsScreen'
import AddNewScreen from './screens/AddNewScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Welcome' }} />

        <Stack.Screen name='RestaurantDetails' component={RestaurantDetailsScreen} options={{ title: 'Restaurant Details' }} />

        <Stack.Screen name='AddNewRestaurant' component={AddNewScreen} options={{ title: 'Add New Restaurant' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
