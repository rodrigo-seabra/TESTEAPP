import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Busca() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busca</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
  }
})