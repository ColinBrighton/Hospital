import React, {useState} from 'react';
import { Text, View, TextInput, Button, Modal} from 'react-native';
import {Formik} from 'formik';
import DatePicker from 'react-native-modern-datepicker';
import {ButtonComp} from './Components/Button';
export const DateofBirth = () => {
  const [formData, setFormData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = values => {
    console.log(values);
    setFormData(values);
  };

  return (
    <View>
      <Text>Registration Form</Text>
      <Formik
        initialValues={{name: '', dob: '', phoneNumber: ''}}
        onSubmit={handleSubmit}>
        {({handleChange, handleBlur, handleSubmit, values, setFieldValue}) => (
          <View>
            <Text>Name:</Text>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Enter your name"
            />
            <Text>Date of Birth:</Text>
            <View>
              <Modal visible={openModal}>
                <DatePicker
                  mode="calendar"
                  onDateChange={date => setFieldValue('dob', date)}
                />
                <ButtonComp
                  mode={'contained'}
                  text={'Confirm'}
                  onPress={() => setOpenModal(false)}
                  textColor="black"
                  bordercolor="red"
                />
              </Modal>
              <ButtonComp
                mode={'contained'}
                text={'Set Date'}
                onPress={() => setOpenModal(true)}
                textColor="black"
              />
            </View>
            <Text>Phone Number:</Text>
            <TextInput
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              placeholder="Enter your phone number"
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
      {formData && (
        <View style={styles.formData}>
          <Text style={styles.formDataTitle}>Form Data:</Text>
          <Text>Name: {formData.name}</Text>
          <Text>Date of Birth: {formData.dob}</Text>
          <Text>Phone Number: {formData.phoneNumber}</Text>
        </View>
      )}
    </View>
  );
};
