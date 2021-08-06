import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'

import styles from '../styles'

const AddNewScreen = (navigation) => {
  const [restaurantName, setRestaurantName] = useState('')
  const [address, setAddress] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [rating, setRating] = useState('')

  const newRestaurant = {
    address: address,
    name: restaurantName,
    photoUrl: photoUrl,
    rating: rating,
  }

  const handleNewRestaurant = () => {
    fetch('https://bocacode-intranet-api.web.app/restaurants', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(newRestaurant),
    })
      .then(() => {
        Alert.alert('added new restaurant')
        navigation.navigate('Main')
      })
      .catch((err) => alert(err))
  }

  return (
    <View>
      <TextInput placeholder='Restaurant Name' style={styles.inputBox} autoCorrect={false} onChangeText={(text) => setRestaurantName(text)} />

      <TextInput placeholder='Address' style={styles.inputBox} onChangeText={(text) => setAddress(text)} />

      <TextInput placeholder='Photo URL' style={styles.inputBox} onChangeText={(text) => setPhotoUrl(text)} />

      <TextInput placeholder='Rating' style={styles.inputBox} onChangeText={(text) => setRating(text)} />

      <TouchableOpacity style={styles.customBtn} onPress={handleNewRestaurant}>
        <Text style={{ color: 'white' }}>send new restaurant</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddNewScreen
