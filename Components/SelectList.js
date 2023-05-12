import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

export const DateDemo = ({
  mode,
  startingYear,
  onSelectedChange,
  
}) => {
  const [date, setDate] = useState('');

  // console.log(updateDate,'updddd')
  return (
    <DatePicker
      mode={mode}
      selectorStartingYear={startingYear}
      onSelectedChange={selectedDate => {
        setDate(selectedDate),
          onSelectedChange(selectedDate)
      }}
    />
  );
};
