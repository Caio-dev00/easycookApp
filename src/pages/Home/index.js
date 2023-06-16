import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { FontAwesome } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

export default function Home({navigation}) {

  const navegar = useNavigation();

  useEffect(() => {

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navegar.navigate("Profile")}>
            <FontAwesome name="user" size={30} color="#FFF" />
        </TouchableOpacity>
      ),
    })
  }, [])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}