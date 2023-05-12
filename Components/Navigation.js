import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../Modules/Home';
import {AddCode} from '../Modules/AddCode';
import {AddMedicine} from '../Modules/AddMedicine';
import {IconComp} from './Icon';
import {CustomDrawer} from './CustomDrawer';
import {UserRegistration} from '../Modules/UserRegistration';

import {NavigationContainer} from '@react-navigation/native'

const Drawer = createDrawerNavigator();
export const NavigationComp = () => {
  return (

   <NavigationContainer>
     <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({focused}) => (
            <IconComp name="home" size={focused ? 25 : 20} color="black" />
          ),
          swipeEnabled: false,
          drawerLabelStyle: {color: 'black'},
          drawerActiveTintColor: '#01cfa9',
          drawerInactiveTintColor: '#01cfa9',
          drawerInactiveBackgroundColor: 'white',
          drawerStyle: {backgroundColor: 'white'},
          drawerItemStyle: {
            borderRadius: 15,
            paddingHorizontal: 5,
            borderWidth: 1,
            borderColor: 'black',
          },
        }}
      />
      <Drawer.Screen
        name="Add Medicine"
        component={AddMedicine}
        options={{
          drawerIcon: ({focused}) => (
            <IconComp name="medkit" size={focused ? 25 : 20} color="black" />
          ),
          drawerLabelStyle: {color: 'black'},
          drawerActiveTintColor: '#01cfa9',
          drawerInactiveTintColor: '#01cfa9',
          drawerInactiveBackgroundColor: 'white',
          drawerStyle: {backgroundColor: 'white'},
          drawerItemStyle: {
            borderRadius: 15,
            paddingHorizontal: 5,
            borderWidth: 1,
            borderColor: 'black',
          },
        }}
      />
      <Drawer.Screen
        name="Inventory"
        component={AddCode}
        options={{
          drawerIcon: ({focused}) => (
            <IconComp
              name="plus-circle"
              size={focused ? 25 : 20}
              color="black"
            />
          ),

          drawerLabelStyle: {color: 'black'},
          drawerActiveTintColor: '#01cfa9',
          drawerInactiveTintColor: '#01cfa9',
          drawerInactiveBackgroundColor: 'white',
          drawerStyle: {backgroundColor: 'white'},
          drawerItemStyle: {
            borderRadius: 15,
            paddingHorizontal: 5,
            borderWidth: 1,
            borderColor: 'black',
          },
        }}
      />
      <Drawer.Screen
        name="UserRegistration"
        component={UserRegistration}
        options={{
          drawerIcon: ({focused}) => (
            <IconComp name="user-plus" size={focused ? 25 : 20} color="black" />
          ),

          drawerLabelStyle: {color: 'black'},
          drawerActiveTintColor: '#01cfa9',
          drawerInactiveTintColor: '#01cfa9',
          drawerInactiveBackgroundColor: 'white',
          drawerStyle: {backgroundColor: 'white'},
          drawerItemStyle: {
            borderRadius: 15,
            paddingHorizontal: 5,
            borderWidth: 1,
            borderColor: 'black',
          },
        }}
      />
    </Drawer.Navigator>
   </NavigationContainer>
  );
};
