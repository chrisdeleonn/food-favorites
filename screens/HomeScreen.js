import React, { useState, useEffect } from 'react'
import { View, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import Box from '../components/QuickInfo'
import styles from '../styles'

const HomeScreen = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then((response) => response.json())
      .then((allData) => {
        setRestaurants(allData)
      })
      .catch((err) => alert(err))
  }, [])

  return (
    <View>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <StatusBar style='auto' />
          {restaurants?.map((singleRestaurant) => {
            return (
              <View key={singleRestaurant.id}>
                <Box entireRestaurant={singleRestaurant} />
                <Button
                  title='Details'
                  color='skyblue'
                  onPress={() => {
                    navigation.navigate('RestaurantDetails', { restaurant: singleRestaurant })
                  }}
                />
              </View>
            )
          })}
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
