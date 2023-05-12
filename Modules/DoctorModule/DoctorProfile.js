import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, Caption, Title, TouchableRipple} from 'react-native-paper';
import {DoctorsList2} from '../../Components/Datas';
import {useSelector, useDispatch} from 'react-redux';

const {width, height} = Dimensions.get('screen');

export const DoctorProfile = () => {
  const [selectedDoc, setSelectedDoc] = useState();
  const ConfirmAppoint = useSelector(state => state.ConfirmAppointment);

  const DocKey = ConfirmAppoint[0].selected_doctor[0].key;
  const selectedDoctor = DoctorsList2.find(doctor => doctor.key === DocKey);

  useEffect(() => {
    setSelectedDoc([selectedDoctor]);
  }, []);

  console.log(selectedDoc, 'selectedDoctor');
  return (
    <View style={{backgroundColor: '#070A52', flex: 1}}>
      <Text style={styles.profileText}>profile</Text>

      <View style={styles.container}>
        <View>
          {selectedDoc?.map((val, index) => (
            <View key={index}>
              <View style={styles.photoWrap}>
                <Image source={val.photo} style={styles.photo} />
              </View>
              <View style={styles.textwrap}>
                <Text style={styles.text1}>NAME</Text>
                <Text style={styles.text2}>{val.doctor_name}</Text>
                <Text style={styles.text1}>EXPERIENCE</Text>
                <Text style={styles.text2}>{val.experience} years</Text>
                <Text style={styles.text1}>CATEGORY</Text>
                <Text style={styles.text2}>{val.type}</Text>
                <Text style={styles.text1}>CONTACT NUMBER</Text>
                <Text style={styles.text2}>{val.contact_number}</Text>
                <Text style={styles.text1}>MEDICAL COURSE</Text>
                <Text style={styles.text2}>{val.course}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    // flex: 1,
    top: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width:width,
    height:height,
  },
  profileText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingVertical: 10,
  },
  headWrap: {
    flexDirection: 'row',
  },
  arrowicon: {
    flex: 0.1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoWrap: {
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  photo: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  textwrap: {
    // backgroundColor:'red',
    // marginHorizontal: 20,
    // paddingHorizontal:20
  },
  text1: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    // textDecorationLine:'underline',
    marginBottom: 3,
    paddingLeft: 20,
  },
  text2: {
    color: 'gray',
    fontSize: 16,
    paddingLeft: 3,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 5,
    paddingBottom: 5,
    paddingLeft: 25,
  },
});
