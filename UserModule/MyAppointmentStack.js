import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { MyAppointments } from './BottomTab/MyAppointments';
import { Chat } from './Chat';

const Stack = createStackNavigator();

export const MyAppointmentStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='MyAppointmentsPage' component={MyAppointments}/>
        <Stack.Screen name='Chat' component={Chat}/>
    </Stack.Navigator>
  )
}

