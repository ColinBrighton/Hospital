import { HomePage } from "./Screens/HomePage";
import { HostPage } from "./Screens/HostPage";
import { AudiancePage } from "./Screens/AudiancePage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Stack= createStackNavigator();
export const ScreensNav = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="homescreen" component={HomePage}/>
        <Stack.Screen name="hostscreen" component={HostPage}/>
        <Stack.Screen name="audiancescreen" component={AudiancePage}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}



const styles = StyleSheet.create({})