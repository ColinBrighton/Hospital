import React, { useState } from 'react';
import {Text, View, Button,Modal} from 'react-native';
import {Formik} from 'formik';
import DatePicker from 'react-native-date-picker';

export const Demo = () => {
  const [open, setOpen] =useState(true)

  const handleopen=()=>{
    setOpen(false)
  }
  
  return (
    
    <Formik
      initialValues={{date: new Date()}}
      onSubmit={values => {
        console.log(values);
      }}>
      {formikProps => (
        <View>
          <Modal visible={handleopen}>
          <DatePicker
          modal={open}
          date={formikProps.values.date}
          mode={'date'}
          onDateChange={date=>{
            formikProps.setFieldValue('date',date)
          }}
          />
          </Modal>
          <Button title='setdate' onPress={handleopen}/>
          <Button onPress={formikProps.handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};
