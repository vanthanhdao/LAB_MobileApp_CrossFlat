import { Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { ContactScreen, ProfileScreen } from '../screens/indexScreens';


const Stack = createNativeStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ContactScreen'>
                <Stack.Screen name='ContactScreen' component={ContactScreen} />
                <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

