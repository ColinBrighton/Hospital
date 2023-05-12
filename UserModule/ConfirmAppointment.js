import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {ButtonComp} from '../Components/Button';
import {appointmentCheck, confirmAppointment1} from '../Store/Action';

const {width, height} = Dimensions.get('screen');

export const ConfirmAppointmentPage = props => {
  const [showmodal, setShowmodal] = useState(false);
  const ConfirmAppointment1 = useSelector(state => state.ConfirmAppointment1);
  const ConfirmAppointment = useSelector(state => state.ConfirmAppointment);
  const PatientDetails = useSelector(state => state.PatientDetails);

  // const specificValue = myArray.find(item => item.id === 'some_id');
  // const doctorName = ConfirmAppointment.selected_doctor[0].doctor_name;
  // const selectedDoctor = ConfirmAppointment1[0].selected_doctor[0];
  // const appointmentDate = ConfirmAppointment1[0].appointment_date;
  // const userSymptoms = ConfirmAppointment1[0].user_symptoms;

  // const doctorName = selectedDoctor.doctor_name;

  // console.log(doctorName, 'doctorName');
  console.log(ConfirmAppointment1, '///////////////');
  const Cancel = () => {
    setShowmodal(false);
  };
  const okBtn = () => {
    dispatch(appointmentCheck(true));
    setShowmodal(false), props.navigation.navigate('UserHomePage');
  };
  const dispatch = useDispatch();
  return (
    <ImageBackground
      source={require('../Images/signup.jpg')}
      style={styles.background}>
      <ScrollView style={styles.container}>
        <Text style={styles.headtext1}>Confirm Appointment</Text>
        <View style={styles.patientcontainer}>
          <Text style={styles.subtext}>Patient Details</Text>
          {ConfirmAppointment1.map((value, index) => (
            <View key={index}>
              {value.patient_details.map((val, index) => (
                <View key={index}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text1}>NAME</Text>
                    <Text style={styles.text2}>: {val.patient_name}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text1}>FATHER NAME</Text>
                    <Text style={styles.text2}>: {val.father_name}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text1}>AGE</Text>
                    <Text style={styles.text2}>: {val.age}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text1}>PHONE NUMBER</Text>
                    <Text style={styles.text2}>: {val.phone_number}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text1}>DATE OF BIRTH</Text>
                    <Text style={styles.text2}>: {val.date_of_birth}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text1}>BLOOD GROUP</Text>
                    <Text style={styles.text2}>: {val.blood_group}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text1}>GENDER</Text>
                    <Text style={styles.text2}>: {val.gender}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text1}>ADDRESS</Text>
                    <Text style={styles.text2}>: {val.address}</Text>
                  </View>
                </View>
              ))}
              <View style={styles.appointmentcontainer}>
                <Text style={styles.subtext}>Appointment Details</Text>

                {value.selected_doctor?.map((v, index) => (
                  <View key={index}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.text1}>APPPOINTMENT DATE</Text>
                      <Text style={styles.text2}>
                        : {value.appointment_date}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.text1}>SYMPTOM</Text>
                      <Text style={styles.text2}>: {value.user_symptoms}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.text1}>DOCTOR</Text>
                      <Text style={styles.text2}>: {v.doctor_name}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        <Modal
          visible={showmodal}
          onRequestClose={() => setShowmodal(false)}
          transparent>
          <View style={styles.center}>
            <View style={styles.modal}>
              <View style={styles.modalhead}>
                <Text style={styles.headtext}>Confirm! </Text>
              </View>
              <Text style={styles.bodytext}>
                Your appointment is booked. Please wait for Doctor's
                confirmation
              </Text>
              <View style={styles.btncontainer}>
                <View style={styles.logoutbtn}>
                  <ButtonComp
                    mode={'contained'}
                    text={'Cancel'}
                    bgColor="transparent"
                    textColor={'black'}
                    borderwidth={'1px'}
                    bordercolor={'black'}
                    onPress={() => Cancel()}
                  />
                </View>
                <View style={styles.logoutbtn}>
                  <ButtonComp
                    mode={'contained'}
                    text={'Ok'}
                    bgColor="#150E56"
                    onPress={() => okBtn()}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.confirmbtn}>
          <ButtonComp
            mode={'elevated'}
            text={'Confirm'}
            textColor="white"
            bgColor={'#2C74B3'}
            onPress={() => setShowmodal(true)}
          />
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
    padding: 15,
    // backgroundColor:'red',
    width:width,
    height:height
  },
  headtext1: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
    color: '#150E56',
    marginBottom: 20,
  },
  patientcontainer: {
    // backgroundColor:"red",
    backgroundColor: '#FEFCF3',
    marginTop: 20,
    // height: 200,
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 2,
    borderBottomColor: '#150E56',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  subtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#150E56',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  appointmentcontainer: {
    backgroundColor: '#FEFCF3',
    marginTop: 20,
    // height: 200,
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 2,
    borderBottomColor: '#150E56',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  detailwrap: {
    flexDirection: 'column',
  },
  text1: {
    // backgroundColor: 'red',
    flex: 0.5,
    fontSize: 16,
    color: 'black',
    paddingVertical: 5,
    paddingLeft: 10,
  },
  text2: {
    // backgroundColor: 'yellow',
    flex: 0.6,
    fontSize: 15,
    color: 'black',
    paddingVertical: 5,
  },
  confirmbtn: {
    alignItems: 'center',
    marginTop: height*0.04,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  modal: {
    width: '80%',
    height: "22%",
    backgroundColor: 'white',
    // borderRadius:20,
    borderWidth: 1,
    borderColor: 'black',
  },
  modalhead: {
    backgroundColor: '#150E56',
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 25,
    letterSpacing: 1,
  },
  bodytext: {
    color: 'black',
    paddingLeft: 25,
    fontSize: 16,
    paddingTop: 10,
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
  },
  logoutbtn: {
    width: 100,
    marginRight: 10,
  },
});
