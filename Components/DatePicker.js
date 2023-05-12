import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';

export const DatePickerComp = ({displayDate, ViewDate,datechange}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  {
    
      useEffect(() => {
        displayDate &&
        setOpen(!open);
      }, [displayDate]);
      
  }
  const selectedDate = date => {
    setOpen(false);
    setDate(date);
    ViewDate(date);
  };

  // console.log(displayDate, 'ddddd');
  // console.log(open, 'rrrrr');

  return (
    <>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => selectedDate(date)}
        onCancel={() => {
          setOpen(false);
        }}
        onDateChange={date=>{
          formikProps.setFieldValue('date',date)
        }}
      />
    </>
  );
};
