import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  View,
  Modal,
  ToastAndroid,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ButtonComp} from '../../Components/Button';
import {IconComp} from '../../Components/Icon';
import {doctorConfirmation} from '../../Store/Action';
import {doctorCancellation} from '../../Store/Action';
import {reasonForCancellation} from '../../Store/Action';

const {width, height} = Dimensions.get('window');
const modalHeight = height / 5;

export const PatientAppointments = props => {
  const ConfirmAppoint = useSelector(state => state.ConfirmAppointment);
  const AppointmentStatus = useSelector(state => state.AppointmentStatus);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [cancelReason, setCancelReason] = useState('');

  const dispatch = useDispatch();
  const translateY = new Animated.Value(modalHeight);
  useEffect(() => {
    setCancelReason('');
    console.log('useeffect check');
  }, [openModal2 === true]);

  const handleConfirm = () => {
    ToastAndroid.show('Appointment Confirmed!', ToastAndroid.SHORT);
    props.navigation.navigate('DocHome');
    dispatch(doctorConfirmation('1'));
  };

  const handleCancel = () => {
    setOpenModal2(true);
  };

  const confirmCancel = () => {
    if (cancelReason.length === 0 || /^\s*$/.test(cancelReason)) {
      ToastAndroid.show('Please enter some text!', ToastAndroid.SHORT);
    } else {
      dispatch(doctorCancellation('-1'));
      dispatch(reasonForCancellation(cancelReason));
      setOpenModal2(false);
      ToastAndroid.show('You cancelled the Appointment', ToastAndroid.SHORT);
    }
  };

  // console.log(ConfirmAppoint, 'ConfirmAppointment');

  return (
    <ImageBackground
      source={require('../../Images/signup.jpg')}
      style={styles.background}>
      <SafeAreaView>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.headtext}>Patient Appointments</Text>
          <View style={{alignItems: 'center'}}>
            {ConfirmAppoint.map((value, index) => (
              <View key={index}>
                <View style={styles.card}>
                  <View>
                    {value.patient_details?.map((val, index) => (
                      <View key={index}>
                        <Text style={styles.text}>
                          Patient Name : {val.patient_name}
                        </Text>
                        {/* patient details Modal */}
                        <View>
                          <Modal
                            visible={openModal}
                            animationType="slide"
                            transparent={true}
                            onRequestClose={() => setOpenModal(false)}>
                            <TouchableOpacity
                              style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
                              onPressIn={() => setOpenModal(false)}>
                              <TouchableOpacity
                                activeOpacity={1}
                                style={styles.modalContainer}>
                                <View style={styles.modalhead}>
                                  <Text style={styles.modalHeadText}>
                                    Patient Details
                                  </Text>
                                </View>
                                <View style={styles.modalTextWrap}>
                                  <Text style={styles.modalText}>
                                    Patient Name : {val.patient_name}
                                  </Text>
                                  <Text style={styles.modalText}>
                                    Father Name : {val.father_name}
                                  </Text>
                                  <Text style={styles.modalText}>
                                    Date of Birth : {val.date_of_birth}
                                  </Text>
                                  <Text style={styles.modalText}>
                                    Gender : {val.gender}
                                  </Text>
                                  <Text style={styles.modalText}>
                                    Age : {val.age}
                                  </Text>
                                  <Text style={styles.modalText}>
                                    Blood Group : {val.blood_group}
                                  </Text>
                                  <Text style={styles.modalText}>
                                    Phone Number : {val.phone_number}
                                  </Text>
                                  <Text style={styles.modalText}>
                                    Address : {val.address}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            </TouchableOpacity>
                          </Modal>
                        </View>

                        {/* cancel Modal */}
                        <View>
                          <Modal
                            visible={openModal2}
                            onRequestClose={() => setOpenModal2(false)}
                            transparent>
                            <View style={styles.center}>
                              <View style={styles.modal}>
                                <Text style={styles.cancelText1}>
                                  Cancel Appointment
                                </Text>
                                <Text style={styles.cancelText2}>
                                  Do you really want to cancel the appointment?
                                </Text>
                                <TextInput
                                  placeholder="Enter a reason to cancel"
                                  style={styles.reasonBox}
                                  value={cancelReason}
                                  multiline={true}
                                  numberOfLines={4}
                                  onChangeText={text => setCancelReason(text)}
                                />
                                <View style={{alignItems: 'center', left: 100}}>
                                  <ButtonComp
                                    mode={'elevated'}
                                    text={'Cancel'}
                                    bgColor={'#150E56'}
                                    textColor={'white'}
                                    onPress={confirmCancel}
                                  />
                                </View>
                              </View>
                            </View>
                          </Modal>
                        </View>
                      </View>
                    ))}
                  </View>
                  <Text style={styles.text}>
                    Appointment For : {value.user_symptoms}
                  </Text>
                  <Text style={[styles.text]}>
                    Appointment Date : {value.appointment_date}
                  </Text>
                  {/* <View style={styles.btn}>
                    <ButtonComp
                      mode={'contained'}
                      text={'Patient Details'}
                      bgColor={'white'}
                      textColor={'black'}
                      onPress={()=> setOpenModal(true)}
                    />
                  </View> */}
                  <View>
                    <View style={styles.chatwrap}>
                      <TouchableOpacity
                        style={styles.details}
                        onPress={() => setOpenModal(true)}>
                        <Image
                          source={require('../../Images/DoctorModule/details.png')}
                        />
                      </TouchableOpacity>

                      {AppointmentStatus === '1' && (
                        <View style={styles.chatbtn}>
                          <ButtonComp
                            mode={'contained'}
                            text={'Chat'}
                            textColor="white"
                            bgColor={'#3282B8'}
                            onPress={() => props.navigation.navigate('Chat')}
                          />
                        </View>
                      )}
                    </View>

                    {AppointmentStatus === '0' && (
                      <View style={styles.btnWrap}>
                        <View style={{marginHorizontal: 20}}>
                          <View style={styles.iconWrap}>
                            <IconComp
                              name={'check'}
                              size={30}
                              color={'green'}
                              onPress={handleConfirm}
                            />
                          </View>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 12,
                              fontWeight: 'bold',
                            }}>
                            Confirm
                          </Text>
                        </View>
                        <View style={{marginHorizontal: 20}}>
                          <View style={styles.iconWrap}>
                            <IconComp
                              name={'close'}
                              size={30}
                              color={'red'}
                              onPress={handleCancel}
                            />
                          </View>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 12,
                              fontWeight: 'bold',
                            }}>
                            Cancel
                          </Text>
                        </View>
                      </View>
                    )}
                    {AppointmentStatus === '1' && (
                      <Text style={styles.confirmed}>Confirmed</Text>
                    )}
                  </View>

                  {AppointmentStatus === '-1' && (
                    <Text style={styles.cancelled}>Cancelled</Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    width: width,
    height: height,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  headtext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#150E56',
  },
  card: {
    backgroundColor: '#AEE2FF',
    // height: 00,
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: width * 0.9,
  },
  details: {
    // backgroundColor: 'red',
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrap: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  btnWrap: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // marginTop: 10,
  },
  text: {
    color: 'black',
    fontSize: 15,
    paddingLeft: 10,
  },
  modalContainer: {
    backgroundColor: '#E3F6FF',
    marginTop: 350,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalhead: {
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  modalHeadText: {
    textAlign: 'center',
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#150E56',
  },
  arrowIcon: {
    // position: 'absolute',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 50,
    left: 20,
    top: 15,
  },
  modalText: {
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
  },
  modalTextWrap: {
    // backgroundColor:"red",
    marginTop: 20,
    marginHorizontal: 20,
    paddingBottom: 200,
  },
  confirmed: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'right',
    marginRight: 10,
  },
  cancelled: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'right',
    marginRight: 10,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  modal: {
    width: height * 0.45,
    height: height * 0.33,
    borderRadius: 10,
    backgroundColor: '#ECF9FF',
    // borderRadius:20,
    borderWidth: 1,
    borderColor: 'black',
  },
  cancelText1: {
    // backgroundColor:"red",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
    paddingVertical: 10,
    color: '#150E56',
  },
  cancelText2: {
    fontSize: 16,
    marginHorizontal: 15,
    color: 'gray',
    paddingLeft: 10,
  },
  reasonBox: {
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    textAlignVertical: 'top',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  chatbtn: {},
  chatwrap: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    width: 150,
    marginTop: 10,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
});
