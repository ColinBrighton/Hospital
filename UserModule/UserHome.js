import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  Linking,
  Animated,
  Button,
  Modal,
} from 'react-native';
import {ViewPropTypes} from 'deprecated-react-native-prop-types-native';
import {useSelector} from 'react-redux';
import {CarouseComp} from '../Components/Carousel';
import {IconComp} from '../Components/Icon';
import {BackgroundComp} from '../Components/Background';
import {Avatar, Badge} from 'react-native-paper';
import {ButtonComp} from '../Components/Button';

const {width, height} = Dimensions.get('screen');
const hospitalPhoneNumber = '9876543210';

const callHospital = () => {
  Linking.openURL(`tel:${hospitalPhoneNumber}`);
};
export const UserHome = props => {
  const ConfirmAppoint = useSelector(state => state.ConfirmAppointment);
  const CheckConfirmAppointment = useSelector(
    state => state.CheckConfirmAppointment,
  );
  console.log(CheckConfirmAppointment, 'CheckConfirmAppointment');
  useEffect(() => {
    // const ref = firebaseFirestore.collection('Products')
    // ref.onSnapshot((query)=>{
    //   const objs = []
    //   query.forEach((doc)=>{
    //     objs.push({
    //       id: doc.id,
    //       ...doc.data()
    //     })
    //   })
    //   setList(objs)
    // })
  }, []);

  const data = [
    {
      appointment_date: '2023/05/24',
      patient_details: [
        {
          address: '',
          age: '',
          blood_group: '',
          date_of_birth: '',
          father_name: '',
          gender: 'Male',
          patient_name: '',
          phone_number: '',
        },
      ],
      selected_doctor: [
        {
          category: ['Array'],
          contact_number: '9876543200',
          course: 'MS',
          doctor_name: 'Dr.ArunVijay',
          experience: '6',
          key: '2',
          photo: 16,
          type: 'Physician',
        },
      ],
      status: false,
      user_symptoms: ['High BP'],
    },
    {
      appointment_date: '2023/05/24',
      patient_details: [
        {
          address: '',
          age: '',
          blood_group: '',
          date_of_birth: '',
          father_name: '',
          gender: 'Male',
          patient_name: '',
          phone_number: '',
        },
      ],
      selected_doctor: [
        {
          category: ['Array'],
          contact_number: '9876543200',
          course: 'MS',
          doctor_name: 'Dr.Anto',
          experience: '6',
          key: '2',
          photo: 16,
          type: 'Physician',
        },
      ],
      status: false,
      user_symptoms: ['High BP'],
    },
  ];
  let selectedDoctor = null;

  for (let i = 0; i < data.length; i++) {
    const object = data[i];
    if (
      object.selected_doctor &&
      object.selected_doctor[0].doctor_name === 'Dr.Anto'
    ) {
      selectedDoctor = object.selected_doctor[0].doctor_name;
      break;
    }
  }
  console.log(selectedDoctor, 'selectedDoctor');

  const carouselImage = [
    require('../Images/Carousel/carousel1.jpg'),
    require('../Images/Carousel/carousel2.jpg'),
    require('../Images/Carousel/carousel3.jpg'),
    require('../Images/Carousel/carousel4.jpg'),
  ];

  console.log(ConfirmAppoint, 'ConfirmAppointment');
  return (
    <BackgroundComp source={require('../Images/Carousel/bg.jpg')}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.header}>
          <Avatar.Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolqIv0A-EhOwlqHGbRKUCJj5hjxuj_SVRQeu2TTZEzYzq706cVvN2PK43zQDZPYmCvmI&usqp=CAU',
            }}
            size={40}
          />
          <Text style={styles.headerText}>HOME</Text>
          <View style={styles.headerIcon}>
            <View style={styles.icon}>
              <IconComp
                name={'phone'}
                size={20}
                color={'#150E56'}
                onPress={callHospital}
              />
            </View>
            <View style={styles.icon}>
              <IconComp
                name={'bell'}
                size={20}
                color={'#150E56'}
                onPress={() => console.log('lkjhgfdsa')}
              />
              <Badge
                size={20}
                style={styles.badge}
                onPress={() => console.log('poiuytrewq')}>
                1
              </Badge>
            </View>
          </View>
        </View>
        <View style={styles.welcome}>
          <View style={{flex: 0.8}}>
            <Text style={{color: 'black', paddingLeft: 20, letterSpacing: 1}}>
              Welcome to,
            </Text>
            <Text
              style={{
                color: '#150E56',
                paddingLeft: 20,
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 2,
              }}>
              HOSPITAL NAME
            </Text>
          </View>

          <TouchableOpacity
            style={styles.videocallImgWrap}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate('PatientHomePage')}>
            <Image
              source={require('../Images/videocall.png')}
              style={styles.videocallImg}
            />
          </TouchableOpacity>
        </View>

        <View>
          <CarouseComp
            carouselImage={carouselImage}
            dotcolor={'#150E56'}
            inactivedotcolor={'white'}
            autoplay={true}
            autoplayinterval={3000}
            circleLoop={true}
          />
        </View>

        <View style={styles.visit}>
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('BookAppointments')}>
            <ImageBackground
              borderRadius={10}
              source={require('../Images/card.jpg')}
              resizeMode={'stretch'}>
              <View style={styles.cardicon}>
                <Avatar.Image
                  source={require('../Images/cardhospital.png')}
                  size={40}
                />
              </View>
              <Text style={styles.cardtext1}>Hospital Visit</Text>
              <Text style={styles.cardtext2}>Make an Appointment</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate('HomeVisit')}>
            <ImageBackground
              borderRadius={10}
              source={require('../Images/card.jpg')}
              resizeMode={'stretch'}>
              <View style={styles.cardicon}>
                <Avatar.Image
                  source={require('../Images/carddoctor.png')}
                  size={40}
                />
              </View>
              <Text style={styles.cardtext1}>Home Visit</Text>
              <Text style={styles.cardtext2}>Call The Doctor Home</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
     

        <TouchableOpacity
          style={styles.bottom}
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate('AboutUs')}>
          <Image
            source={require('../Images/aboutus.png')}
            style={{height: 68, width: 68}}
          />
        </TouchableOpacity>
        <Text style={styles.aboutus}>About Us</Text>
       
      </ScrollView>
    </BackgroundComp>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  header: {
    height: 40,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  headerText: {
    fontSize: 20,
    color: '#150E56',
    fontWeight: 'bold',
    flex: 0.7,
    paddingLeft: 10,
  },
  headerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.3,
  },
  icon: {
    paddingHorizontal: 10,
    // backgroundColor: 'green',
  },
  welcome: {
    marginBottom: 20,
    marginTop: 5,
    flexDirection: 'row',
    // backgroundColor: 'cyan',
  },
  visit: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 25,
    flex: 0.5,
    borderRadius: 10,
    elevation: 10,
  },
  cardtext1: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingTop: 10,
    color: '#150E56',
    paddingLeft: 15,
  },
  cardtext2: {
    color: 'black',
    fontSize: 12,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  bottom: {
    backgroundColor: '#150E56',
    width: 70,
    height: 70,
    borderRadius: 50,
    marginHorizontal: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginLeft: 50,
  },
  cardicon: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  bottomcard: {
    flexDirection: 'column',
    width: width * 0.3,
    alignItems: 'center',
    flex: 0.5,
    marginHorizontal: 25,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  aboutus: {
    color: 'black',
    marginLeft: 55,
  },
  imageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  badge: {
    position: 'absolute',
    left: 20,
    top: -7,
    zIndex: 1,
  },
  // chatBtn: {

  //   width: 100,
  //   left: 145,
  //   marginTop: 20,

  // },
  videocallImgWrap: {
    // backgroundColor: 'red',
    // flex: 0.2,
    left: 50,
    width: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  videocallImg: {
    height: 40,
    width: 40,
  },
  carouselslide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
