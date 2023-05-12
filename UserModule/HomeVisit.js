import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Linking,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {DoctorsList} from '../Components/Datas';
import {ButtonComp} from '../Components/Button';
import {Searchbar} from 'react-native-paper';
import {format, formatDistance, getDay} from 'date-fns';
import {useIsFocused} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

export const HomeVisit = () => {
  const [doctorList, setDoctorList] = useState(DoctorsList);
  const [searchDoctor, setSearchDoctor] = useState('');
  const [checkAppt, setCheckAppt] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setDoctorList(DoctorsList);
  }, []);

  const today = new Date();
  const formattedDay = format(today, 'EEEE');

  const handleAvailability = key => {
    setCheckAppt(!checkAppt);
    setSelectedAppointment(key);
  };
  const onChangeSearch = query => {
    setSearchDoctor(query);
    setDoctorList(
      DoctorsList.filter(
        doctor =>
          doctor.doctor_name.toString().toLowerCase().includes(query) ||
          doctor.type.toString().toLowerCase().includes(query),
      ),
    );
  };


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.maincontainer}>
      <View style={styles.top}>
        <View style={styles.searchboxWrap}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchDoctor}
            style={styles.searchbox}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.filterIconWrap}
          onPressIn={() => setShowModal(true)}>
          <Image
            source={require('../Images/userhome/filter.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>

      {doctorList.map(values => (
        <View style={styles.container} key={values.key}>
          <Image source={values.photo} style={styles.Image} />
          <View style={styles.textcontainer}>
            <View>
              <Text style={styles.text1}>{values.doctor_name}</Text>
              <Text style={styles.text}>{values.course}</Text>
              <Text style={styles.text}>{values.type}</Text>
              <Text style={styles.text}>
                {values.experience} Years Experience
              </Text>
              <Text style={styles.text}>{values.contact_number}</Text>

              <TouchableOpacity
                style={styles.availablity}
                onPress={() => handleAvailability(values.key)}>
                {/* <Text style={styles.checkText}>Check Availablity</Text> */}
                <Text style={styles.checkText}>Check Availability</Text>
              </TouchableOpacity>
              {selectedAppointment === values.key && (
                <Text>Available on {values.available}</Text>
              )}
            </View>
            {values.available === formattedDay ? (
              <View style={styles.btnnnn}>
                <ButtonComp
                  mode={'elevated'}
                  text={'Call'}
                  textColor={'white'}
                  bgColor={'#141E61'}
                  onPress={() =>
                    Linking.openURL(`tel:${values.contact_number}`)
                  }
                />
              </View>
            ) : (
              <View
                style={{
                  justifyContent: 'center',
                  marginLeft: 30,
                }}>
                <Text style={styles.availablity}>Not Available</Text>
              </View>
            )}
          </View>
        </View>
      ))}
      {/* filter modal */}
      <Modal
        animationType="none"
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        transparent={true}>
        <TouchableOpacity
          onPressIn={() => setShowModal(false)}
          activeOpacity={0.9}
          style={styles.center}>
          <View style={styles.modal}>
            <TouchableOpacity
              onPressIn={() => {
                let tempData = doctorList.sort(
                  (a, b) => parseInt(b.experience) - parseInt(a.experience),
                );
                setDoctorList(tempData);
                setShowModal(false);
              }}
              activeOpacity={0.9}>
              <Text style={styles.modalText}>Sort by Experience</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPressIn={() => {
                const today = new Date();
                const formattedDay = format(today, 'EEEE');
                let sorted = [];
                doctorList.forEach(doctor => {
                  if (doctor.available === formattedDay) {
                    sorted.unshift(doctor);
                  } else {
                    sorted.push(doctor);
                  }
                });
                setShowModal(false);
                setDoctorList(sorted);
              }}
              activeOpacity={0.9}>
              <Text style={styles.modalText}>Available Doctors</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    paddingBottom: 10,
    // backgroundColor:'red',
    width: width,
    height: height,
  },
  container: {
    backgroundColor: '#DAF5FF',
    marginVertical: 5,
    flexDirection: 'row',
    marginHorizontal: 10,
    elevation: 5,
    width: width * 0.94,
  },
  Image: {
    width: 100,
    height: 100,
    top: 5,
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
    // backgroundColor: 'red',
    marginLeft: 30,
    paddingVertical: 12,
  },
  top: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
  },
  searchbox: {
    backgroundColor: '#DAF5FF',
    color: 'black',
    // width: width * 0.9,
    marginLeft: 5,
    // marginRight: 10,
    marginVertical: 10,
    // paddingRight:20
  },
  searchboxWrap: {
    // backgroundColor: 'red',
    flex: 0.9,
    // marginRight: '10%',
  },
  filterIcon: {
    height: 25,
    width: 25,
  },
  filterIconWrap: {
    // backgroundColor: 'green',
    flex: 0.2,
    justifyContent: 'center',

    alignItems: 'center',
    marginVertical: 20,
    // left:20,
  },
  availablity: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkText: {
    color: 'blue',
    // marginBottom: 10,
  },
  modal: {
    width: width * 0.8,
    backgroundColor: 'white',
    // borderRadius:20,
    borderWidth: 1,
    borderColor: 'black',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000050',
  },
  modalText: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingLeft: 10,
    color: 'black',
  },
});
