import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

function Rating({ rate, count }){
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesome key={i} name="star" size={12} color="gold" />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesome key="half" name="star-half" size={12} color="gold" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesome key={`empty-${i}`} name="star-o" size={12} color="gold" />);
    }
    return stars;
  };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, justifyContent:'space-around' }}>
      {renderStars()}
      <Text style={{color: 'white', marginLeft: 5,}}>({count})</Text>
    </View>
  );
};


export default function Produto({ title, price, category, image, rating }) {
    return (
        <View style={styles.box}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.boxDetails}>
                <TouchableOpacity style={styles.Details}>
                    <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.price}>
                    <Text style={styles.priceText}>{price}</Text>
                </TouchableOpacity>
                <Rating rate={rating.rate} count={rating.count} />
                <Text style={styles.productInfo}>{category}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
      width: '44%',
      height: 320,
      backgroundColor: '#696969', // Light background example, adjust as needed
      borderRadius: 5,
      display: 'flex',
      alignItems: 'center',
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      textShadowRadius: 3.84,
      elevation: 5,
      margin: 12,
  
    },
    Details: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    boxDetails: {
      height: 170,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    title: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: 'bold', // Make title bolder
      color: 'white',
    },
    price: {
      backgroundColor: '#00ff00',
      padding: 5,
      borderRadius: 5,
      width: '80%',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    priceText: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    productInfo: { // New style for category and data
      fontSize: 14,
      color: '#00ff00', // Subdued gray for less prominence
      fontStyle: "italic",
    },
  
    image: {
      width: '100%',
      height: 150,
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      overflow: 'hidden',
    },
  });
