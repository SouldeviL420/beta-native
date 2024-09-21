import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login/LoginScreen';
import SingupScreen from '../screens/signup/SignupScreen';
import Dashboard from '../screens/dashboard/dashboard';

const Stack=createNativeStackNavigator();

export default function RootNavigator() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        {/* <Stack.Screen
        name='LOGIN'
        component={LoginScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='SIGNUP'
        component={SingupScreen}
        /> */}
        <Stack.Screen
        name='Dashboard'
        component={Dashboard}
        />
        
    </Stack.Navigator>
   </NavigationContainer>
  )
}