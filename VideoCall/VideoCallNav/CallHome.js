import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const CallHome = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="Make Video Call"
        onPress={navigation.navigate('CallPage')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
