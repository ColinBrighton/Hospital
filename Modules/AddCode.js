import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {Input} from '../Components/Input';
import {addCodeSchema} from '../Components/ValidationSchema';
import {ButtonComp} from '../Components/Button';
import {TableComp} from '../Components/Table';
import {IconComp} from '../Components/Icon';
import {COL_TYPES} from 'react-native-datatable-component';

export const AddCode = props => {
  const [inventoryData, setInventoryData] = useState([]);

  const colSettings = [
    {name: 'medicine_id', type: COL_TYPES.INT, width: '25%'},
    {name: 'medicine_name', type: COL_TYPES.STRING, width: '25%'},
    {name: 'medicine_brand', type: COL_TYPES.STRING, width: '25%'},
    {name: 'minimum_quantity', type: COL_TYPES.INT, width: '25%'},
  ];

  const colNames = [
    'medicine_id',
    'medicine_name',
    'medicine_brand',
    'minimum_quantity',
  ];

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
      <Text style={styles.head}>ADD CODE</Text>
      <View style={styles.form}>
        <Formik
          initialValues={{
            medicine_id: '',
            medicine_name: '',
            medicine_brand: '',
            minimum_quantity: '',
            dob: '',
          }}
          validationSchema={addCodeSchema}
          onSubmit={values => {
            console.log(values), setInventoryData(pre => [...pre, values]);
          }}>
          {formikprops => (
            <View>
              <View style={styles.inputs}>
                <Input
                 mode={'outlined'}
                  placeholder={'Enter Medicine Id'}
                  label={'Medicine Id'}
                  keyboardType="numeric"
                  onChangeText={formikprops.handleChange('medicine_id')}
                  value={formikprops.values.medicine_id}
                  onBlur={formikprops.handleBlur('medicine_id')}
                />
                <Text style={styles.error}>
                  {formikprops.touched.medicine_id &&
                    formikprops.errors.medicine_id}
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
                  placeholder={'Enter Medicine Brand'}
                  label={'Medicine Brand'}
                  onChangeText={formikprops.handleChange('medicine_brand')}
                  value={formikprops.values.medicine_brand}
                  onBlur={formikprops.handleBlur('medicine_brand')}
                />
                <Text style={styles.error}>
                  {formikprops.touched.medicine_brand &&
                    formikprops.errors.medicine_brand}
                </Text>
              </View>
              <View style={styles.inputs}>
                <Input
                 mode={'outlined'}
                  placeholder={'Enter Minimum Quantity'}
                  label={'Minimum Quantity'}
                  keyboardType="numeric"
                  onChangeText={formikprops.handleChange('minimum_quantity')}
                  value={formikprops.values.minimum_quantity}
                  onBlur={formikprops.handleBlur('minimum_quantity')}
                />
                <Text style={styles.error}>
                  {formikprops.touched.minimum_quantity &&
                    formikprops.errors.minimum_quantity}
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
              <View>
                <TableComp
                  data={inventoryData}
                  colNames={colNames}
                  colSettings={colSettings}
                  bgColor={'white'}
                  noOfPages={3}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
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
    paddingHorizontal: '40%',
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },

  btnStyle: {
    paddingVertical: 10,
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
  },
  icon: {
    position: 'absolute',
    margin: 10,
  },
});
