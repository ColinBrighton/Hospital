import React from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';

export const ButtonComp = ({
  mode,
  onPress,
  text,
  bgColor,
  textColor,
  borderwidth,
  bordercolor,
  disabled
}) => {
  return (
    <StyledButton
      mode={mode}
      bgColor={bgColor}
      bordercolor={bordercolor}
      borderwidth={borderwidth}
      textColor={textColor}
      disabled={disabled}
      onPress={onPress}>
      {text}
      
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  background-color: ${props => props.bgColor};
  border-color: ${props => props.bordercolor};
  border-width: ${props => props.borderwidth || '0px'};
  
`;
 