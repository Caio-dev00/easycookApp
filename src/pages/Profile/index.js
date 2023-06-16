import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons"


export default function Profile({navigation}) {

  useEffect(() => {

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navegar.navigate("Profile")}>
            <MaterialCommunityIcons name="heart" size={30} color="#FFF" />
        </TouchableOpacity>
      ),
    })
  }, [])

  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}