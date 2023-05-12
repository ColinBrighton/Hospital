import React, {useState, useRef} from 'react';
import {Text, View, StyleSheet, ScrollView, Modal} from 'react-native';
import {Input} from '../Components/Input';
import {Formik} from 'formik';
import {ButtonComp} from '../Components/Button';
import {formSchema} from '../Components/ValidationSchema';
import {RadioBtn} from '../Components/Radio';
import {RadioButton} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {IconComp} from '../Components/Icon';
import {DropdownComp} from '../Components/Dropdown';
import {bloodGroups} from '../Components/Datas';
import DatePicker from 'react-native-modern-datepicker';

export const UserRegistration = props => {
  // -------DateModal----------
  const [openModal, setOpenModal] = useState(false);

  //--------DROPDOWN--------------
  const [selectedValue, setSelectedValue] = useState('');
  const bloodGroupDd = useRef();
  const onReset = formikprops => {
    formikprops.resetForm();
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.icon}>
        <IconComp
          name={'bars'}
          size={30}
          color={'black'}
          onPress={() => props.navigation.openDrawer()}
        />
      </View>
      <Text style={styles.head}>NEW PATIENT REGISTRATION</Text>
      <View style={styles.form}>
        <View>
          <Formik
            initialValues={{
              patient_id: '',
              patient_name: '',
              father_name: '',
              date_of_birth: '',
              age: '',
              gender: 'Male',
              address: '',
              phone_number: '',
              blood_group: '',
            }}
            validationSchema={formSchema}
            onSubmit={value => {
              console.log(value);
            }}>
            {formikprops => (
              <View>
                <View style={styles.inputs}>
                  <Input
                    mode={'outlined'}
                    placeholder={'Enter Id'}
                    label={'Patient Id'}
                    keyboardType="numeric"
                    value={formikprops.values.patient_id}
                    onChangeText={formikprops.handleChange('patient_id')}
                    onBlur={formikprops.handleBlur('patient_id')}
                    right={
                      <TextInput.Icon
                        icon={() => (
                          <IconComp
                            name={'credit-card-alt'}
                            size={18}
                            color={'black'}
                          />
                        )}
                      />
                    }
                  />
                  <Text style={styles.error}>
                    {formikprops.touched.patient_id &&
                      formikprops.errors.patient_id}
                  </Text>
                </View>
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
                    {formikprops.touched.address && formikprops.errors.address}
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
                          <IconComp name={'phone'} size={22} color={'black'} />
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
                          bgColor={'#e4fffa'}
                          textColor={'black'}
                          onPress={() => setOpenModal(true)}
                        />
                      </View>
                      <Text style={styles.dateselected}>
                        {formikprops.values.date_of_birth || (
                          <Text style={{color: 'grey'}}>No Date Selected</Text>
                        )}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.error}>
                    {formikprops.touched.date_of_birth &&
                      formikprops.errors.date_of_birth}
                  </Text>
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
                        <RadioBtn val={'Male'} color={'white'} />
                        <RadioBtn val={'Female'} color={'white'} />
                      </View>
                    </RadioButton.Group>
                  </View>
                </View>
                <View style={styles.btnStyle}>
                  <View style={styles.btn}>
                    <ButtonComp
                      mode={'contained'}
                      text={'Cancel'}
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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#01cfa9',
    flex: 1,
  },
  form: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  inputs: {
    marginHorizontal: 15,
  },
  head: {
    paddingHorizontal: '23%',
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  addressBox: {
    margin: 5,
    marginHorizontal: 15,
  },
  btnStyle: {
    paddingVertical: 30,
    gap: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    elevation: 5,
    shadowColor: 'black',
  },
  error: {
    color: 'red',
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
    color: 'black',
  },
  rrr: {
    flexDirection: 'row',
  },
  fff: {
    flex: 0.7,
  },
  IconComp: {
    alignItems: 'flex-end',
  },
  icon: {
    position: 'absolute',
    margin: 10,
  },
  DropdownWrapper: {
    flexDirection: 'column',
    marginHorizontal: 15,
  },
  DropdownHolder: {
    flexDirection: 'row',
  },
  bloodgrouptext: {
    flex: 0.6,
    paddingTop: 4,
    fontSize: 18,
    marginLeft: 12,
    color: 'black',
  },
  bloodgroup: {
    flex: 1.05,
    width: '100%',
    alignSelf: 'stretch',
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
  },
  dobHolder: {
    flex: 0.4,
  },
  dobtext: {
    marginHorizontal: 15,
    fontSize: 18,
    color: 'black',
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
