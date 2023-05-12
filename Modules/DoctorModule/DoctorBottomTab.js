import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconComp} from '../../Components/Icon';
import {DoctorHome} from './DoctorHome';
import {DoctorProfile} from './DoctorProfile';
import {DoctorHomeStackScreen} from './DoctorHomeStackScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const DoctorBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let name;
          let iconsize;
          if (route.name === 'DoctorHome') {
            name = 'home';
            iconsize = focused ? 28 : 24;

          } else if (route.name === 'Profile') {
            name = 'user';
            iconsize = focused ? 24 : 20;
          }
          return <IconComp name={name} size={iconsize} color={'#150E56'} />;
        },
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 5,
          borderRadius: 50,
          backgroundColor: 'white',
          position: 'absolute',
          height: 50,
          marginBottom: 5,
          marginHorizontal: 10,
        },
        tabBarLabelStyle: {paddingBottom: 3},
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="DoctorHome"
        component={DoctorHomeStackScreen}
        options={({route}) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'PatientAppointments') {
              return {display: 'none'};
            } 
            else if (routeName === 'Chat') {
              return {display: 'none'};
            } 
            else if (routeName === 'DoctorHomePage') {
              return {display: 'none'};
            } 
            else if (routeName === 'HostPage') {
              return {display: 'none'};
            } 
            return;
          })(route),
        })}
        // options={{
        //  tabBarIcon:()=>{
        //   return <IconComp name={'home'} size={28} color={'#150E56'} />;
        //  }
        // }}
    
      />
         
      <Tab.Screen
        name="Profile"
        component={DoctorProfile}
        // options={{
        //   tabBarIcon: () => {
        //     return <IconComp name={'user'} size={28} color={'#150E56'} />;
        //   },
        // }}
        options={({route}) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'Profile') {
              return {display: 'none'};
            } 
            return;
          })(route),
        })}
      />
    </Tab.Navigator>
   
  );
};
