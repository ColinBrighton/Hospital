import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Modal,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {ButtonComp} from '../Components/Button';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-native-modern-datepicker';
import {DoctorsList2} from '../Components/Datas';
import {confirmAppointment} from '../Store/Action';

const {width, height} = Dimensions.get('screen');

export const ChooseDoctor = props => {
  const PatientDetails = useSelector(state => state.PatientDetails);

  // const [sympList, setSympList] = useState(SymptomsList);
  const UserSymptoms = useSelector(state => state.UserSymptoms);
  const [consultDoctor, setConsultDoctor] = useState('');

  //----------------- Date ---------
  const [openModal, setOpenModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState('');
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  const date = ('0' + currentDate.getDate()).slice(-2);
  const formattedDate = year + '/' + month + '/' + date;
  const dispatch = useDispatch();
  // filter doctor list
  const filteredDoctors = DoctorsList2.filter(doctor => {
    return doctor.category.some(symptom => symptom.symptom === UserSymptoms[0]);
  });
  // const selectFilteredDoctors = filteredDoctors.filter(doc => {
  //   return doc.key === consultDoctor;
  // });
  // console.log(filteredDoctors, 'filteredDoctors');
  const handleConsult = val => {
    const selectFilteredDoctors = filteredDoctors.filter(doc => {
      return doc.key === val;
    });

    if (selectedDate == '') {
      Alert.alert('Alert!', 'Please Select Appointment Date', [{text: 'OK'}]);
    } else {
      setConsultDoctor(val);
      const values = {
        selected_doctor: selectFilteredDoctors,
        appointment_date: selectedDate,
        user_symptoms: UserSymptoms,
        patient_details: [PatientDetails],
        status: false,
      };
      dispatch(confirmAppointment(values)),
        // Alert.alert('Alert!', 'Appointment Sucess', [{text: 'OK'}]);
        props.navigation.navigate('ConfirmAppointmentPage');
    }
  };

  return (
    <ImageBackground
      source={require('../Images/signup.jpg')}
      style={styles.background}>
      <ScrollView
        style={styles.maincontainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Book Appointment</Text>
        </View>
        <View style={styles.appointmentwrap}>
          <Text style={styles.appointmentfor}>Symptom :</Text>
          <Text style={styles.symptoms}>{UserSymptoms}</Text>
        </View>
        <View style={styles.headwrap}>
          <Text style={styles.head}>Pick a Date..</Text>
        </View>

        <View style={styles.datewrapper}>
          <Modal visible={openModal}>
            <View>
              <View>
                <DatePicker
                  mode={'calendar'}
                  onDateChange={val => setSelectedDate(val)}
                  minimumDate={formattedDate}
                  maximumDate={'2050/12/31'}
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

          <View style={styles.dobHolder}>
            <ButtonComp
              mode={'contained'}
              text={'Select Date'}
              bgColor={'#AEE2FF'}
              textColor={'black'}
              onPress={() => setOpenModal(true)}
            />
          </View>

          <View style={styles.dateselected}>
            <Text style={{textAlign: 'center', color: 'black'}}>
              {selectedDate || 'No Date Selected'}
            </Text>
          </View>
        </View>
        <View style={styles.headwrap}>
          <Text style={styles.head}>Choose a Doctor.</Text>
        </View>
        <View>
          {filteredDoctors.map(values => (
            <View style={styles.container} key={values.key}>
              <Image source={values.photo} style={styles.Image} />
              <View style={styles.textcontainer}>
                <View>
                  <Text style={styles.text1}> {values.doctor_name} </Text>
                  <Text style={styles.text}>{values.course}</Text>
                  <Text style={styles.text}>{values.type}</Text>
                  <Text style={styles.text}>
                    {values.experience} Years Experience
                  </Text>
                  <Text style={styles.text}>{values.contact_number}</Text>
                </View>
                <View style={styles.btnnnn}>
                  <ButtonComp
                    mode={'elevated'}
                    text={'Consult'}
                    textColor={'white'}
                    bgColor={'#141E61'}
                    onPress={() => handleConsult(values.key)}
                  />
                </View>
              </View>
            </View>
          ))}
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
  maincontainer: {
    padding: 20,
    // backgroundColor:'red',
    width: width,
    height: height,
  },
  head: {fontSize: 20, fontWeight: 'bold', color: 'black'},
  btn: {},

  btn2: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: 10,
    marginRight: 10,
  },
  datewrapper: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  header: {marginBottom: 10},
  headertext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 5,
    color: '#150E56',
  },
  appointmentfor: {fontSize: 20, fontWeight: 'bold', color: 'black'},
  appointmentwrap: {
    // marginTop: 15,
    marginBottom: 5,
    paddingVertical: 5,
  },
  symptoms: {
    fontSize: 15,
    color: 'black',
    marginLeft: 5,
    paddingVertical: 5,
  },
  dobHolder: {
    flex: 0.4,
    width: width,

  },
  dateselected: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    flex: 0.5,
    textAlign: 'center',
    paddingVertical: 10,
    // marginRight: 10,
    marginBottom: 10,
    // backgroundColor:'red'
  },
  container: {
    backgroundColor: '#DAF5FF',
    marginVertical: 5,
    flexDirection: 'row',
    elevation: 5,
    // marginHorizontal: 10,
  },
  Image: {
    width: 100,
    height: 100,
    top: 12,
    left: 5,
  },
  text1: {
    color: '#150E56',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingVertical: 5,
  },
  text: {
    color: 'black',
    paddingVertical: 2,
  },
  textcontainer: {
    paddingLeft: 20,
    flexDirection: 'row',
  },
  btnnnn: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 5,
    // marginLeft: 10,
    paddingVertical: 12,
    width:width*0.3,
    // backgroundColor:'red'
  },
});
