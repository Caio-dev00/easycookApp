import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Receipes({data, conteudo}) {

  return (
    <View style={{ alignItems:'center'}} key={data.id}>
      <View style={styles.container}>
        <Text style={styles.title}>{data.nome}</Text> 
        <Text style={styles.other}></Text> 
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 5,
  },

  title: {
    fontSize: 18,
    fontWeight: 600
  }
})