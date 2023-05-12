import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EditProfile} from '../EditProfile';
import {Profile} from './Profile';

const profileStack = createStackNavigator();
export const ProfileStackScreen = () => {
  return (
    <profileStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({current: {progress}}) => {
          return {
            cardStyle: {
              opacity: progress,
              transform: [
                {
                  translateX: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0],
                  }),
                },
              ],
            },
          };
        },
      }}>
      <profileStack.Screen name="UserProfile" component={Profile} />
      <profileStack.Screen name="EditProfile" component={EditProfile} />
    </profileStack.Navigator>
  );
};
