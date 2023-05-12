import React, {useState} from 'react';
import {View , StyleSheet} from 'react-native';
import {RadioButton,Text } from 'react-native-paper';

export const RadioBtn = ({val,color}) => {

  return (

    <View style={styles.container}>
      <Text>{val}</Text>
      <RadioButton
        value={val}
        status={val === {val} ? 'checked' : 'unchecked'}
        color={color}
      />
    </View>
  );
};
const styles=StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    alignItems:"center",
    
  }
})
