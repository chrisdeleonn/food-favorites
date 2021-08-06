import React, { useState, useEffect } from 'react'
import { View, Button, ScrollView, SafeAreaView, StatusBar } from 'react-native'

import Box from '../components/Box'
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
          {restaurants?.map((singleRestaurant) => {
            return (
              <View key={singleRestaurant.id}>
                <Box entireRestaurant={singleRestaurant} />
                <Button
                  title='Details'
                  color='#841584'
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
