import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DoctorLogin} from './DoctorLogin';
import {DoctorHome} from './DoctorHome';
import {DoctorBottomTab} from './DoctorBottomTab';
import {PatientAppointments} from './PatientAppointments';
import { Chat } from '../../UserModule/Chat';
import { DoctorHomePage } from '../../Screens/DoctorHomePage';
import { HostPage } from '../../Screens/HostPage';

const DoctorHomeStack = createStackNavigator();

export const DoctorHomeStackScreen = () => {
  return (
    <DoctorHomeStack.Navigator
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
      <DoctorHomeStack.Screen name="DocHome" component={DoctorHome} />
      <DoctorHomeStack.Screen
        name="PatientAppointments"
        component={PatientAppointments}
      />
      <DoctorHomeStack.Screen
        name="Chat"
        component={Chat}
      />
       <DoctorHomeStack.Screen
        name="DoctorHomePage"
        component={DoctorHomePage}
      />
       <DoctorHomeStack.Screen
        name="HostPage"
        component={HostPage}
      />
    </DoctorHomeStack.Navigator>
  );
};
