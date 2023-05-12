import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {UserLogin} from '../UserModule/UserLogin';
import React, {useEffect, useState} from 'react';
import {Home} from '../Modules/Home';
import {UserSignIn} from '../UserModule/UserSignIn';
import {BottomTabNavComp} from '../UserModule/BottomTabNav';
import {DoctorLogin} from '../Modules/DoctorModule/DoctorLogin';
import {DoctorHomeStackScreen} from '../Modules/DoctorModule/DoctorHomeStackScreen';
import {DoctorBottomTab} from '../Modules/DoctorModule/DoctorBottomTab';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();

export const StackNavigationComp = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [initializingDoctor, setInitializingDoctor] = useState(true);
  const [doctor, setDoctor] = useState();
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  useEffect(() => {
    const subscriberDoc = auth().onAuthStateChanged(onAuthStateChangedDoctor);
    return subscriberDoc;
  }, []);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  const onAuthStateChangedDoctor = doc => {
    setDoctor(doc);
    if (initializingDoctor) setInitializingDoctor(false);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress,
                transform: [
                  {
                    // translateX: progress.interpolate({
                    //   inputRange: [0, 1],
                    //   outputRange: [100, 0],
                    // }),
                    translateY: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [100, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}>
        {user ? (
          <>
            <Stack.Screen
              name={'UserHome'}
              component={BottomTabNavComp}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name={'Homie'}
              component={Home}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name={'UserLogin'}
              component={UserLogin}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={'UserSignIn'}
              component={UserSignIn}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}

        <Stack.Screen
          name="DoctorBottomTab"
          component={DoctorBottomTab}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'DoctorLogin'}
          component={DoctorLogin}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
