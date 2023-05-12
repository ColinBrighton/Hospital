import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {CallHome} from './VideoCallNav/CallHome';
import {CallPage} from './VideoCallNav/CallPage';

const Stack = createStackNavigator();

export const VideoCallTest = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CallHome" component={CallHome} />
        <Stack.Screen name="CallPage" component={CallPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
