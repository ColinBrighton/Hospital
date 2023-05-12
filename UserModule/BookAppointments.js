import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-native-modern-datepicker';
import {RadioButton, TextInput} from 'react-native-paper';
import {ButtonComp} from '../Components/Button';
import {DropdownComp} from '../Components/Dropdown';
import {IconComp} from '../Components/Icon';
import {Input} from '../Components/Input';
import {RadioBtn} from '../Components/Radio';
import {formSchema} from '../Components/ValidationSchema';
import {bloodGroups} from '../Components/Datas';
import { updatePatientDetails } from '../Store/Action';

const {width, height} = Dimensions.get('screen');

export const BookAppointments = props => {

  // -------DateModal----------
  const [openModal, setOpenModal] = useState(false);

  //--------DROPDOWN--------------
  const [selectedValue, setSelectedValue] = useState('');
  const bloodGroupDd = useRef();
  const onReset = formikprops => {
    formikprops.resetForm();
    bloodGroupDd.current.reset();
    setSelectedValue('');
  };
const dispatch = useDispatch();

  return (
    <ImageBackground
      source={require('../Images/signup.jpg')}
      style={styles.background}>
      <ScrollView style={styles.container}>
        <View style={styles.appointmentcontainer}>
          <Text style={styles.head}>Patient Details</Text>
          <View>
            <Formik
              initialValues={{
                patient_name: '',
                father_name: '',
                date_of_birth: '',
                age: '',
                gender: 'Male',
                address: '',
                phone_number: '',
                blood_group: '',
              }}
              // validationSchema={formSchema}
              onSubmit={value => {
                console.log(value)
                dispatch(updatePatientDetails(value))
                props.navigation.navigate('SelectSymptoms')
              }}>
              {formikprops => (
                <View>
                  <View style={styles.inputs}>
                    <Input
                      mode={'outlined'}
                      placeholder={'Enter Name'}
                      label={'Patient Name'}
                      value={formikprops.values.patient_name}
                      onChangeText={formikprops.handleChange('patient_name')}
                      onBlur={formikprops.handleBlur('patient_name')}
                      right={
                        <TextInput.Icon
                          icon={() => (
                            <IconComp name={'user'} size={20} color={'black'} />
                          )}
                        />
                      }
                    />
                    <Text style={styles.error}>
                      {formikprops.touched.patient_name &&
                        formikprops.errors.patient_name}
                    </Text>
                  </View>
                  <View style={styles.inputs}>
                    <Input
                      mode={'outlined'}
                      placeholder={'Enter Father Name'}
                      label={'Father Name'}
                      value={formikprops.values.father_name}
                      onChangeText={formikprops.handleChange('father_name')}
                      onBlur={formikprops.handleBlur('father_name')}
                      right={
                        <TextInput.Icon
                          icon={() => (
                            <IconComp name={'user'} size={20} color={'black'} />
                          )}
                        />
                      }
                    />
                    <Text style={styles.error}>
                      {formikprops.touched.father_name &&
                        formikprops.errors.father_name}
                    </Text>
                  </View>
                  <View style={styles.inputs}>
                    <Input
                      mode={'outlined'}
                      placeholder={'Enter Age'}
                      label={'Age'}
                      keyboardType="numeric"
                      value={formikprops.values.age}
                      onChangeText={formikprops.handleChange('age')}
                      onBlur={formikprops.handleBlur('age')}
                      right={
                        <TextInput.Icon
                          icon={() => (
                            <IconComp
                              name={'area-chart'}
                              size={20}
                              color={'black'}
                            />
                          )}
                        />
                      }
                    />
                    <Text style={styles.error}>
                      {formikprops.touched.age && formikprops.errors.age}
                    </Text>
                  </View>
                  <View style={styles.inputs}>
                    <Input
                      mode={'outlined'}
                      placeholder={'Enter Address'}
                      label={'Address'}
                      multiline
                      value={formikprops.values.address}
                      onChangeText={formikprops.handleChange('address')}
                      onBlur={formikprops.handleBlur('address')}
                      right={
                        <TextInput.Icon
                          icon={() => (
                            <IconComp name={'home'} size={20} color={'black'} />
                          )}
                        />
                      }
                    />
                    <Text style={styles.error}>
                      {formikprops.touched.address &&
                        formikprops.errors.address}
                    </Text>
                  </View>
                  <View style={styles.inputs}>
                    <Input
                      mode={'outlined'}
                      placeholder={'Enter Phone Number'}
                      label={'Phone Number'}
                      keyboardType="numeric"
                      value={formikprops.values.phone_number}
                      onChangeText={formikprops.handleChange('phone_number')}
                      onBlur={formikprops.handleBlur('phone_number')}
                      right={
                        <TextInput.Icon
                          icon={() => (
                            <IconComp
                              name={'phone'}
                              size={22}
                              color={'black'}
                            />
                          )}
                        />
                      }
                    />
                    <Text style={styles.error}>
                      {formikprops.touched.phone_number &&
                        formikprops.errors.phone_number}
                    </Text>
                  </View>
                  <View>
                    <View>
                      <Modal visible={openModal}>
                        <View>
                          <View>
                            <DatePicker
                              mode={'calendar'}
                              onDateChange={val =>
                                formikprops.setFieldValue('date_of_birth', val)
                              }
                              options={{
                                backgroundColor: '#e4fffa',
                                textHeaderColor: 'black',
                                textDefaultColor: 'black',
                                selectedTextColor: 'white',
                                mainColor: '#1ffed5',
                                textSecondaryColor: 'black',
                                borderColor: '#01cfa9',
                              }}
                            />
                          </View>
                          <View style={styles.btn2}>
                            <ButtonComp
                              mode={'contained'}
                              text={'Confirm'}
                              onPress={() => setOpenModal(false)}
                              textColor="black"
                              bgColor={'#01cfa9'}
                            />
                          </View>
                        </View>
                      </Modal>
                      <View>
                        <Text style={styles.dobtext}>DateOfBirth</Text>
                      </View>
                      <View style={styles.dobWrapper}>
                        <View style={styles.dobHolder}>
                          <ButtonComp
                            mode={'contained'}
                            text={'Select DOB'}
                            bgColor={'#AEE2FF'}
                            textColor={'black'}
                            onPress={() => setOpenModal(true)}
                          />
                        </View>
                        <Text style={styles.dateselected}>
                          {formikprops.values.date_of_birth || (
                            <Text style={{color: 'grey'}}>
                              No Date Selected
                            </Text>
                          )}
                        </Text>
                      </View>
                    </View>
                    <View style={{marginLeft: 15}}>
                      <Text style={styles.error}>
                        {formikprops.touched.date_of_birth &&
                          formikprops.errors.date_of_birth}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.DropdownWrapper}>
                    <View style={styles.DropdownHolder}>
                      <Text style={styles.bloodgrouptext}>Blood Group</Text>
                      <View style={styles.bloodgroup}>
                        <DropdownComp
                          data={bloodGroups}
                          defaultBtnText="select"
                          onSelect={formikprops.handleChange('blood_group')}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem;
                          }}
                          rowTextForSelection={(item, index) => {
                            return item;
                          }}
                          refference={bloodGroupDd}
                        />
                      </View>
                    </View>
                    <Text style={styles.error}>
                      {formikprops.touched.blood_group &&
                        formikprops.errors.blood_group}
                    </Text>
                  </View>
                  <View style={styles.gender}>
                    <Text style={styles.genderTest}>Gender </Text>
                    <View style={styles.fff}>
                      <RadioButton.Group
                        value={formikprops.values.gender}
                        onValueChange={formikprops.handleChange('gender')}
                        onBlur={formikprops.handleBlur('gender')}>
                        <View style={styles.rrr}>
                          <RadioBtn val={'Male'} color={'#150E56'} />
                          <RadioBtn val={'Female'} color={'#150E56'} />
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                  <View style={styles.btnStyle}>
                    <View style={styles.btn}>
                      <ButtonComp
                        mode={'contained'}
                        text={'Clear'}
                        onPress={() => onReset(formikprops)}
                        bgColor="red"
                      />
                    </View>
                    <View style={styles.btn}>
                      <ButtonComp
                        mode={'contained'}
                        text={'Save'}
                        onPress={formikprops.handleSubmit}
                        bgColor="green"
                      />
                    </View>
                  </View>
                 
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
   
  },
  container: {
    padding: 20,
    // backgroundColor:'red',
     width:width,
    height:height
  },
  head: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 20,
    color: '#150E56',
  },
  appointmentcontainer: {},
  inputs: {
    marginHorizontal: 15,
    marginVertical: 3,
    // backgroundColor:'red',
    // width:width,
  },
  addressBox: {
    margin: 5,
    marginHorizontal: 15,
  },
  btnStyle: {
    // paddingVertical: 30,
    gap: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:90,
    marginTop:30
  },
  btn: {
    elevation: 5,
    shadowColor: 'black',
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
  gender: {
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  genderTest: {
    flex: 0.3,
    paddingTop: 4,
    fontSize: 18,
    marginLeft: 12,
    color: '#150E56',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  rrr: {
    flexDirection: 'row',
  },
  fff: {
    flex: 0.7,
    // marginLeft:90,
    // justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor:'red'
    
  },
  IconComp: {
    alignItems: 'flex-end',
  },
  icon: {
    position: 'absolute',
    margin: 10,
  },
  DropdownWrapper: {
    // flexDirection: 'row',
    marginHorizontal: 15,
    // marginBottom:3,
    // backgroundColor:'yellow'
  },
  DropdownHolder: {
    flexDirection: 'row',
  },
  bloodgrouptext: {
    flex: 0.9,
    paddingTop: 0,
    fontSize: 18,
    marginLeft: 12,
    color: '#150E56',
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 5,
  },
  bloodgroup: {
    flex: 1,
width:width,
    alignSelf: 'flex-end',
  },
  btn2: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: 10,
    marginRight: 10,
  },
  dobWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    // backgroundColor:'red',
    width:width*0.82,
  },
  dobHolder: {
    flex: 0.4,
    width:width,
  },
  dobtext: {
    marginHorizontal: 15,
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#150E56',
    paddingLeft: 12,
    marginBottom: 5,
  },
  dateselected: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    flex: 0.5,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
