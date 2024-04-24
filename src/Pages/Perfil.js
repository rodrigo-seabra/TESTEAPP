import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useFocusEffect } from '@react-navigation/native';

export default function Perfil() {

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


    return (
        <View style={styles.container}>
            <Animated.View style={{opacity: fade}}>
                <Text style={styles.title}>Perfil</Text>
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
})