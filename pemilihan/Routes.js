/* eslint-disable */

import React from 'react'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import OTP from './OTP';
import Register from './Register';
import Home from './Home';

const Stack = createStackNavigator();


const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Login"
                component={Login} />
                <Stack.Screen name="OTP"
                component={OTP} />
                
                <Stack.Screen name="Register"
                component={Register} />
                
                <Stack.Screen name="Home"
                component={Home} />
                
                
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
