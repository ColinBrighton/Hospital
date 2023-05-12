import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Modal,
} from 'react-native';
import {BackgroundComp} from '../../Components/Background';
import {useSelector} from 'react-redux';
import {ButtonComp} from '../../Components/Button';
import {confirmAppointment} from '../../Store/Action';
import {IconComp} from '../../Components/Icon';

const {width, height} = Dimensions.get('window');

export const MyAppointments = props => {
  const AppointmentCondition = useSelector(state => state.AppointmentCondition);
  const AppointmentStatus = useSelector(state => state.AppointmentStatus);
  const ConfirmAppointment = useSelector(state => state.ConfirmAppointment);
  const ReasonToCancel = useSelector(state => state.ReasonToCancel);
  const PatientDetails = useSelector(state => state.PatientDetails);

  const [showmodal, setShowmodal] = useState(false);
  const [status, setStatus] = useState();
  const [text, setText] = useState();
  const [apptStatus, setapptStatus] = useState();
  const [appointmentData, setAppointmentData] = useState();

  // const doctorName = ConfirmAppointment.selected_doctor[0].doctor_name;
  // const selectedDoctor = ConfirmAppointment[0].selected_doctor[0].doctor_name;
  // const appointmentDate = ConfirmAppointment[0].appointment_date;
  // const userSymptoms = ConfirmAppointment[0].user_symptoms;

  // console.log(appointmentData[0], 'appointmentData-------');
  // console.log(ConfirmAppointment[0].selected_doctor[0].doctor_name);
  // console.log(ConfirmAppointment[1].selected_doctor[0].doctor_name);
  let count=0
  useEffect(() => {
    const val = ConfirmAppointment['status'];
    setStatus(val);
    if (AppointmentStatus === '0') {
      setText('Your Appointment is Booked Please Wait for Doctor Confirmation');
      setapptStatus('Pending');
    }
    if (AppointmentStatus === '1') {
      setText('Your Appointment is Confirmed, Now You Can Visit the Doctor');
      setapptStatus('Confirmed');
    }
    if (AppointmentStatus === '-1') {
      setText('Your Appointment was Cancelled');
      setapptStatus('Cancelled');
    }
    console.log('useEffect check')
    count=6
  }, []);
  console.log(count,'count')

  const openModal = ({index}) => {
    setAppointmentData(ConfirmAppointment[index]);
    setShowmodal(true);
  };
  console.log(appointmentData?.appointment_date, 'appointmentData-------');
  let textStyle;

  if (AppointmentStatus === '0') {
    textStyle = styles.pendingText;
  }
  if (AppointmentStatus === '1') {
    textStyle = styles.confirmedText;
  }
  if (AppointmentStatus === '-1') {
    textStyle = styles.cancelledText;
  }

  if (AppointmentCondition === false) {
    return (
      <BackgroundComp
        source={require('../../Images/Carousel/bg.jpg')}
        style={styles.background}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.maincontainer}>
          <Text style={styles.headtext}>My Appointments</Text>
          <View style={styles.noappointment}>
            <Text style={styles.noappointmenttext}>EMPTY</Text>
          </View>
        </ScrollView>
      </BackgroundComp>
    );
  } else {
    return (
      <BackgroundComp
        source={require('../../Images/Carousel/bg.jpg')}
        style={styles.background}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.maincontainer}>
          <Text style={styles.headtext}>My Appointments</Text>
          <View style={styles.appointmentwrap}>
            {ConfirmAppointment.map((values, index) => {
              return (
                <ImageBackground
                  style={styles.appointmentimage}
                  borderRadius={10}
                  source={require('../../Images/drawerhead.jpg')}
                  resizeMode={'stretch'}
                  key={index}>
                  <View>
                    <View>
                      <Text style={styles.text1}>Appointment Detail</Text>
                      <Text style={styles.text2}>{text}</Text>

                      <Text style={styles.text2}>
                        Status :<Text style={textStyle}>{apptStatus}</Text>
                      </Text>
                      {AppointmentStatus === '-1' && (
                        <Text style={styles.text2}>
                          Reason : {ReasonToCancel}
                        </Text>
                      )}
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginTop: 5,
                      }}>
                      {AppointmentStatus === '1' && (
                        <View style={styles.appointmentbtn}>
                          <ButtonComp
                            mode={'contained'}
                            text={'Chat'}
                            textColor="white"
                            bgColor={'#3282B8'}
                            onPress={() => props.navigation.navigate('Chat')}
                          />
                        </View>
                      )}
                      <View style={styles.appointmentbtn2}>
                        <ButtonComp
                          mode={'contained'}
                          text={'View More..'}
                          textColor="black"
                          bgColor={'transparent'}
                          onPress={() => openModal({index})}
                        />
                      </View>
                    </View>
                    {/* View More modal */}
                    <Modal
                      visible={showmodal}
                      onRequestClose={() => setShowmodal(false)}
                      transparent>
                      <View style={{backgroundColor: '#00000099', flex: 1}}>
                        <View style={styles.modal}>
                          <Text style={styles.subtext}>
                            Appointment Details
                          </Text>
                          <View style={styles.detailwrap}>
                            <View style={{flexDirection: 'row'}}>
                              <Text style={styles.text3}>
                                APPPOINTMENT DATE
                              </Text>
                              <Text style={styles.text4}>
                                : {appointmentData?.appointment_date}
                              </Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <Text style={styles.text3}>SYMPTOM</Text>
                              <Text style={styles.text4}>
                                : {appointmentData?.user_symptoms}
                              </Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <Text style={styles.text3}>DOCTOR</Text>
                              <Text style={styles.text4}>
                                :
                                {
                                  appointmentData?.selected_doctor[0]
                                    .doctor_name
                                }
                              </Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <Text style={styles.text3}>STATUS</Text>
                              <Text style={styles.text4}>
                                :<Text>{apptStatus}</Text>
                              </Text>
                            </View>
                          </View>

                          <Text style={styles.subtext}>Patient Details</Text>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={styles.text3}>NAME</Text>
                            <Text style={styles.text4}>
                              :{' '}
                              {appointmentData?.patient_details[0].patient_name}
                            </Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={styles.text3}>FATHER NAME</Text>
                            <Text style={styles.text4}>
                              :{' '}
                              {appointmentData?.patient_details[0].father_name}
                            </Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={styles.text3}>AGE</Text>
                            <Text style={styles.text4}>
                              : {appointmentData?.patient_details[0].age}
                            </Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={styles.text3}>PHONE NUMBER</Text>
                            <Text style={styles.text4}>
                              :{' '}
                              {appointmentData?.patient_details[0].phone_number}
                            </Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={styles.text3}>DATE OF BIRTH</Text>
                            <Text style={styles.text4}>
                              :{' '}
                              {
                                appointmentData?.patient_details[0]
                                  .date_of_birth
                              }
                            </Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={styles.text3}>BLOOD GROUP</Text>
                            <Text style={styles.text4}>
                              :{' '}
                              {appointmentData?.patient_details[0].blood_group}
                            </Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={styles.text3}>GENDER</Text>
                            <Text style={styles.text4}>
                              : {appointmentData?.patient_details[0].gender}
                            </Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={styles.text3}>ADDRESS</Text>
                            <Text style={styles.text4}>
                              : {appointmentData?.patient_details[0].address}
                            </Text>
                          </View>
                          <View style={styles.okBtn}>
                            <ButtonComp
                              mode={'contained'}
                              text={'back'}
                              bgColor="#2C74B3"
                              onPress={() => setShowmodal(false)}
                            />
                          </View>
                        </View>
                      </View>
                    </Modal>
                  </View>
                </ImageBackground>
              );
            })}
          </View>
        </ScrollView>
      </BackgroundComp>
    );
  }
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  maincontainer: {
    padding: 20,
  },
  headtext: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#150E56',
    // backgroundColor:'red',
    marginLeft: width * 0.23,
    marginBottom: 20,
  },
  appointmentwrap: {
    // backgroundColor: 'red',
    width: width* 0.9,
    height: height,

  },
  noappointment: {
    width: width,
    height: height * 0.8,
    paddingLeft: width * 0.35,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  noappointmenttext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'grey',
    letterSpacing: 1,
  },
  appointmentimage: {
    marginHorizontal: width*0.05,
    height: height*0.22,
    width: width*0.8,
    marginVertical: 5,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    // backgroundColor:'red',
    paddingLeft: 10,
    // textAlign: 'center',
    paddingTop: 10,
    color: '#150E56',
    letterSpacing: 2,
  },
  text2: {
    // backgroundColor: 'red',
    color: 'black',
    fontSize: 15,
    marginTop: 5,
    paddingLeft: 20,
  },
  appointmentbtn: {
    marginRight: 5,
    marginLeft: 70,
  },
  appointmentbtn2: {
    marginRight: 5,
    marginLeft: 70,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  modal: {
    width: width * 0.95,
    height: height * 0.8,
    backgroundColor: 'white',
    // borderRadius:20,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
    marginVertical: 30,
    borderRadius: 20,
  },
  detailwrap: {
    flexDirection: 'column',
  },
  text3: {
    // backgroundColor: 'red',
    flex: 0.5,
    fontSize: 16,
    color: 'black',
    paddingVertical: 5,
    paddingLeft: 10,
  },
  text4: {
    // backgroundColor: 'yellow',
    flex: 0.6,
    fontSize: 15,
    color: 'black',
    paddingVertical: 5,
  },
  subtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#150E56',
    marginBottom: 10,
    textDecorationLine: 'underline',
    marginLeft: 15,
    marginTop: 10,
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
  okBtn: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
    flex: 1,
    paddingBottom: 20,
  },
  pendingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    paddingLeft: 20,
    // backgroundColor:'red'
  },
  confirmedText: {
    color: '#3CCF4E',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    paddingLeft: 20,
  },
  cancelledText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    paddingLeft: 20,
  },
});
