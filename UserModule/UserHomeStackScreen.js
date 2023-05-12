import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {UserHome} from './UserHome';
import {HomeVisit} from './HomeVisit';
import {AboutUs} from './AboutUs';
import {BookAppointments} from './BookAppointments';
import {SelectSymptoms} from './SelectSymptoms';
import {ChooseDoctor} from './ChooseDoctor';
import {ConfirmAppointmentPage} from './ConfirmAppointment';
import {Chat} from './Chat';
import {HomePage} from '../Screens/HomePage';
import {HostPage} from '../Screens/HostPage';
import {AudiancePage} from '../Screens/AudiancePage';
import { PatientHomePage } from '../Screens/PatientHomePage';


const UserHomeStack = createNativeStackNavigator();
export const UserHomeStackScreen = () => {
  return (
    <UserHomeStack.Navigator
      initialRouteName="UserHomePage"
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
      <UserHomeStack.Screen name="UserHomePage" component={UserHome} />
      <UserHomeStack.Screen
        name="BookAppointments"
        component={BookAppointments}
        options={{animationEnabled: false}}
      />
      <UserHomeStack.Screen name="Chat" component={Chat} />
      <UserHomeStack.Screen name="HomeVisit" component={HomeVisit} />
      <UserHomeStack.Screen name="AboutUs" component={AboutUs} />
      <UserHomeStack.Screen name="SelectSymptoms" component={SelectSymptoms} />
      <UserHomeStack.Screen name="ChooseDoctor" component={ChooseDoctor} />
      <UserHomeStack.Screen
        name="ConfirmAppointmentPage"
        component={ConfirmAppointmentPage}
      />
      <UserHomeStack.Screen name="PatientHomePage" component={PatientHomePage} />
      <UserHomeStack.Screen name="liveAudiancePage" component={AudiancePage} />

    </UserHomeStack.Navigator>
  );
};
