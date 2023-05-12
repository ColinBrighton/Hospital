import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export const Input = ({
  type,
  placeholder,
  label,
  value,
  right,
  keyboardType,
  multiline,
  onChangeText,
  onBlur,
  disabled,
  secureText,
  mode,
  styles,
}) => {
  return (
    <TextInput
      style={styles}
      textContentType={type}
      secureTextEntry={secureText}
      mode={mode}
      value={value}
      label={label}
      placeholder={placeholder}
      right={right}
      keyboardType={keyboardType}
      multiline={multiline}
      numberOfLines={4}
      activeOutlineColor={'blue'}
      placeholderTextColor="gray"
      onChangeText={onChangeText}
      onBlur={onBlur}
      disabled={disabled}
      
      activeUnderlineColor={'black'}
    />
  );
};
