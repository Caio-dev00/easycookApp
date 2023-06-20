import { View, Text, Button, TouchableOpacity, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import receitas from "../../afrodite.json";

import Receipes from '../../components/Receipes';

export default function Home({navigation}) {

  const navegar = useNavigation();

  const receipes = receitas;

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
    <SafeAreaView>
        <Text style={styles.title}> Lista de Receitas </Text>
        <FlatList
          data={receipes}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Receipes data={item} conteudo={item.secao} />}
          maxToRenderPerBatch={5}
          initialNumToRender={5}
          
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    textAlign: 'center',
    marginBottom: 40,
    fontSize: 25,
    fontWeight: 500
  }
})