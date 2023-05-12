import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyAppointments} from './BottomTab/MyAppointments';
import {IconComp} from '../Components/Icon';
import {UserHomeStackScreen} from './UserHomeStackScreen';
import {ProfileStackScreen} from './BottomTab/ProfileStackScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { MyAppointmentStack } from './MyAppointmentStack';

const Tab = createBottomTabNavigator();

export const BottomTabNavComp = () => {
  return (
    <Tab.Navigator
      // tabBar={()=> <Tab.Screen/>}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let name;
          let iconsize;
          if (route.name === 'Home') {
            name = 'home';
            iconsize = focused ? 28 : 24;
          } else if (route.name === 'My Appointments') {
            name = 'file-text';
            iconsize = focused ? 24 : 20;
          } else if (route.name === 'Profile') {
            name = 'user';
            iconsize = focused ? 24 : 20;
          }
          return <IconComp name={name} size={iconsize} color={'#150E56'} />;
        },
        // tabBarVisible: route.name === 'Profile' ? true : false,

        tabBarInactiveTintColor: 'black',
        // tabBarStyle: {
        //   paddingVertical: 5,
        //   borderRadius: 50,
        //   backgroundColor: 'white',
        //   position: 'absolute',
        //   height: 50,
        //   marginBottom: 5,
        //   marginHorizontal: 10,
        // },
        tabBarLabelStyle: {paddingBottom: 3},
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="Home"
        component={UserHomeStackScreen}
        options={({route}) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'Chat') {
              return {display: 'none'};
            }
            else if (routeName === 'HomeVisit') {
              return {display: 'none'};
            }
            else if (routeName === 'AboutUs') {
              return {display: 'none'};
            }
           else if (routeName === 'SelectSymptoms') {
              return {display: 'none'};
            }
            else if (routeName === 'ChooseDoctor') {
              return {display: 'none'};
            }
            else if (routeName === 'ConfirmAppointmentPage') {
              return {display: 'none'};
            }
            else if (routeName === 'BookAppointments') {
              return {display: 'none'};
            }
            else if (routeName === 'PatientHomePage') {
              return {display: 'none'};
            }
            else if (routeName === 'liveAudiancePage') {
              return {display: 'none'};
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name="My Appointments"
        component={MyAppointmentStack}
        options={({route}) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'Chat') {
              return {display: 'none'};
            } 
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={({route}) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'EditProfile') {
              return {display: 'none'};
            } 
           
            return;
          })(route),
        })}
      />
    </Tab.Navigator>
  );
};
