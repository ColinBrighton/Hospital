import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const IconComp = ({name, size, color, onPress}) => {
  return <Icon name={name} size={size} color={color} onPress={onPress} />;
};
