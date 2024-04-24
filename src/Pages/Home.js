import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Produto from '../Components/Produto'
import { useFocusEffect } from '@react-navigation/native';

export default function Home() {
  const fade = useRef(new Animated.Value(0)).current;

  useFocusEffect(
      React.useCallback(() => {
          fade.setValue(0)
          Animated.timing(fade, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
          }).start();
      }, [])
  )

  const [produtos, setProdutos] = useState([])
  const [error, setError] = useState(false)

  async function getProducts() {
    await fetch('https://fakestoreapi.com/products', {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    })
      .then(res => (res.ok == true) ? res.json() : false)
      .then(json => setProdutos(json))
      .catch(err => setError(true))
  }


  useEffect(() => {
    getProducts()
  }, [])


  return (
    <View style={styles.container}>
      <Animated.View style={{height:'100%', width:'100%', opacity:fade}}>
        
      <Image source={require("../../assets/LogoAPP.png")} style={styles.img} />
      <Text style={styles.title}>Produtos</Text>
      {produtos.length > 0 ? <FlatList
        data={produtos}
        renderItem={({ item }) => <Produto
          title={item.title}
          price={item.price}
          category={item.category}
          image={item.image}
          rating={item.rating}
        />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        horizontal={false}
        numColumns={2}
      /> :
        <ActivityIndicator size="large" color="#00ff00" />
      }
            </Animated.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold', 
    color: 'white',
  },
  lista: {
    width: "100%",
    display: "flex",
},
  img: {
  width: "95%",
  height: "20%",
  marginTop: 25,

},
})