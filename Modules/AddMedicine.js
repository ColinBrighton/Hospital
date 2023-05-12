import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, Modal} from 'react-native';
import {Formik} from 'formik';
import {Input} from '../Components/Input';
import {ButtonComp} from '../Components/Button';
import {addMedicineScehema} from '../Components/ValidationSchema';
import {IconComp} from '../Components/Icon';
import DatePicker from 'react-native-modern-datepicker';

export const AddMedicine = props => {
  // -------DateModal----------
  const [openModal, setOpenModal] = useState(false);
  const [purchaseOpenModal, setPurchaseOpenModal] = useState(false);
  const [stockOpenModal, setStockOpenModal] = useState(false);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.icon}>
          <IconComp
            name={'bars'}
            size={30}
            color={'black'}
            onPress={() => props.navigation.openDrawer()}
          />
        </View>
        <Text style={styles.head}>Add Medicines</Text>
        <View style={styles.form}>
          <Formik
            initialValues={{
              unique_id: '',
              brand_name: '',
              medicine_name: '',
              medicine_dose: '',
              quantity: '',
              expiry_date: '',
              purchased_date: '',
              stocked_date: '',
              price: '',
            }}
            validationSchema={addMedicineScehema}
            onSubmit={values => {
              console.log(values);
            }}>
            {formikprops => (
              <View>
                <View style={styles.inputs}>
                  <Input
                   mode={'outlined'}
                    placeholder={'Enter Unique Id'}
                    label={'Unique Id'}
                    keyboardType="numeric"
                    onChangeText={formikprops.handleChange('unique_id')}
                    value={formikprops.values.unique_id}
                    onBlur={formikprops.handleBlur('unique_id')}
                  />
                  <Text style={styles.error}>
                    {formikprops.touched.unique_id &&
                      formikprops.errors.unique_id}
                  </Text>
                </View>
                <View style={styles.inputs}>
                  <Input
                   mode={'outlined'}
                    placeholder={'Enter Brand Name'}
                    label={'Brand Name'}
                    onChangeText={formikprops.handleChange('brand_name')}
                    value={formikprops.values.brand_name}
                    onBlur={formikprops.handleBlur('brand_name')}
                  />
                  <Text style={styles.error}>
                    {formikprops.touched.brand_name &&
                      formikprops.errors.brand_name}
                  </Text>
                </View>
                <View style={styles.inputs}>
                  <Input
                   mode={'outlined'}
                    placeholder={'Enter Medicine Name'}
                    label={'Medicine Name'}
                    onChangeText={formikprops.handleChange('medicine_name')}
                    value={formikprops.values.medicine_name}
                    onBlur={formikprops.handleBlur('medicine_name')}
                  />
                  <Text style={styles.error}>
                    {formikprops.touched.medicine_name &&
                      formikprops.errors.medicine_name}
                  </Text>
                </View>
                <View style={styles.inputs}>
                  <Input
                   mode={'outlined'}
                    placeholder={'Enter Medicine Dose'}
                    label={'Medicine Dose'}
                    keyboardType="numeric"
                    onChangeText={formikprops.handleChange('medicine_dose')}
                    value={formikprops.values.medicine_dose}
                    onBlur={formikprops.handleBlur('medicine_dose')}
                  />
                  <Text style={styles.error}>
                    {formikprops.touched.medicine_dose &&
                      formikprops.errors.medicine_dose}
                  </Text>
                </View>
                <View style={styles.inputs}>
                  <Input
                   mode={'outlined'}
                    placeholder={'Enter Quantity'}
                    label={'Quantity'}
                    keyboardType="numeric"
                    onChangeText={formikprops.handleChange('quantity')}
                    value={formikprops.values.quantity}
                    onBlur={formikprops.handleBlur('quantity')}
                  />
                  <Text style={styles.error}>
                    {formikprops.touched.quantity &&
                      formikprops.errors.quantity}
                  </Text>
                </View>
                <View style={styles.inputs}>
                  <Input
                   mode={'outlined'}
                    placeholder={'Enter Price'}
                    label={'Price'}
                    keyboardType="numeric"
                    onChangeText={formikprops.handleChange('price')}
                    value={formikprops.values.price}
                    onBlur={formikprops.handleBlur('price')}
                  />
                  <Text style={styles.error}>
                    {formikprops.touched.price && formikprops.errors.price}
                  </Text>
                </View>

                {/* purchased date */}
                <View>
                  <View>
                    <Modal visible={purchaseOpenModal}>
                      <View>
                        <View>
                          <Text>Purchase</Text>
                          <DatePicker
                            mode={'calendar'}
                            onDateChange={val =>
                              formikprops.setFieldValue('purchased_date', val)
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
                            onPress={() => setPurchaseOpenModal(false)}
                            textColor="black"
                            bgColor={'#01cfa9'}
                          />
                        </View>
                      </View>
                    </Modal>
                    <View>
                      <Text style={styles.dobtext}>Select Purchased Date</Text>
                    </View>
                    <View style={styles.dobWrapper}>
                      <View style={styles.dobHolder}>
                        <ButtonComp
                          mode={'contained'}
                          text={'Select Date'}
                          bgColor={'#e4fffa'}
                          textColor={'black'}
                          onPress={() => setPurchaseOpenModal(true)}
                        />
                      </View>
                      <Text style={styles.dateselected}>
                        {formikprops.values.purchased_date || (
                          <Text style={{color: 'grey'}}>No Date Selected</Text>
                        )}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.error}>
                    {formikprops.touched.purchased_date &&
                      formikprops.errors.purchased_date}
                  </Text>
                </View>
                {/* stocked date */}
                <View>
                  <View>
                    <Modal visible={stockOpenModal}>
                      <View>
                        <View>
                          <DatePicker
                            mode={'calendar'}
                            onDateChange={val =>
                              formikprops.setFieldValue('stocked_date', val)
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
                            onPress={() => setStockOpenModal(false)}
                            textColor="black"
                            bgColor={'#01cfa9'}
                          />
                        </View>
                      </View>
                    </Modal>
                    <View>
                      <Text style={styles.dobtext}>Select Stocked Date</Text>
                    </View>
                    <View style={styles.dobWrapper}>
                      <View style={styles.dobHolder}>
                        <ButtonComp
                          mode={'contained'}
                          text={'Select Date'}
                          bgColor={'#e4fffa'}
                          textColor={'black'}
                          onPress={() => setStockOpenModal(true)}
                        />
                      </View>
                      <Text style={styles.dateselected}>
                        {formikprops.values.stocked_date || (
                          <Text style={{color: 'grey'}}>No Date Selected</Text>
                        )}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.error}>
                    {formikprops.touched.stocked_date &&
                      formikprops.errors.stocked_date}
                  </Text>
                </View>
                {/* expiry date */}
                <View>
                  <View>
                    <Modal visible={openModal}>
                      <View>
                        <View>
                          <Text>Expire</Text>

                          <DatePicker
                            mode={'calendar'}
                            onDateChange={val =>
                              formikprops.setFieldValue('expiry_date', val)
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
                      <Text style={styles.dobtext}>Select Expiry Date</Text>
                    </View>
                    <View style={styles.dobWrapper}>
                      <View style={styles.dobHolder}>
                        <ButtonComp
                          mode={'contained'}
                          text={'Select Date'}
                          bgColor={'#e4fffa'}
                          textColor={'black'}
                          onPress={() => setOpenModal(true)}
                        />
                      </View>
                      <Text style={styles.dateselected}>
                        {formikprops.values.expiry_date || (
                          <Text style={{color: 'grey'}}>No Date Selected</Text>
                        )}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.error}>
                    {formikprops.touched.expiry_date &&
                      formikprops.errors.expiry_date}
                  </Text>
                </View>
                <View style={styles.btnStyle}>
                  <View style={styles.btn}>
                    <ButtonComp
                      mode={'contained'}
                      text={'Cancel'}
                      onPress={formikprops.handleReset}
                      bgColor={'red'}
                    />
                  </View>
                  <View style={styles.btn}>
                    <ButtonComp
                      mode={'contained'}
                      text={'Save'}
                      onPress={formikprops.handleSubmit}
                      bgColor={'green'}
                    />
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#01cfa9',
  },
  form: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  inputs: {
    marginHorizontal: 15,
  },
  head: {
    paddingHorizontal: '35%',
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
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
    borderRadius: 50,
    elevation: 5,
    shadowColor: 'black',
  },
  error: {
    color: 'red',
    marginHorizontal: 15,
  },
  icon: {
    position: 'absolute',
    margin: 10,
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
    fontSize: 17,
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
