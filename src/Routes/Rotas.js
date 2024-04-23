import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from "../Context/AuthContext";

const Tab = createBottomTabNavigator();

import Home from "../Pages/Home";
import Busca from "../Pages/Busca";
import Login from "../Pages/Login";



export default function Rotas() {

    const { logado } = useContext(AuthContext);

    if (!logado) {
        return (<Login />)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#32CD32',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: { backgroundColor: 'black', height:60},
                tabBarShowLabel: false,
            }}>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={40} />
                    ),
                }} />
                <Tab.Screen name="Busca" component={Busca}
                    options={{
                        tabBarLabel: "Busca",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="card-search-outline" color={color} size={40} />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}