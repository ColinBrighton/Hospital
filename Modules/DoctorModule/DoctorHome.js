import React from 'react';
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
} from 'react-native';
import {useSelector} from 'react-redux';
import {CarouseComp} from '../../Components/Carousel';
import {IconComp} from '../../Components/Icon';
import {BackgroundComp} from '../../Components/Background';
import {Avatar} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

const callHospital = () => {
  Linking.openURL(`tel:${hospitalPhoneNumber}`);
};
const hospitalPhoneNumber = '9876543210';
export const DoctorHome = props => {
  // const AppointmentStatus = useSelector(state => state.AppointmentStatus);
  // const ReasonToCancel = useSelector(state => state.ReasonToCancel);

  const carouselImage = [
    require('../../Images/Carousel/carousel1.jpg'),
    require('../../Images/Carousel/carousel2.jpg'),
    require('../../Images/Carousel/carousel3.jpg'),
    require('../../Images/Carousel/carousel4.jpg'),
  ];

  return (
    <BackgroundComp source={require('../../Images/Carousel/bg.jpg')}>
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
            onPress={() => props.navigation.navigate('DoctorHomePage')}>
            <Image
              source={require('../../Images/videocall.png')}
              style={styles.videocallImg}
            />
          </TouchableOpacity>
          {/* <Text style={styles.videocallText}>VideoCall</Text> */}
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
        <TouchableOpacity
          style={styles.appointments}
          activeOpacity={0.8}
          onPress={() => {
            props.navigation.navigate('PatientAppointments');
          }}>
          <ImageBackground
            style={styles.appointmentimage}
            borderRadius={10}
            source={require('../../Images/drawerhead.jpg')}
            resizeMode={'stretch'}>
            <View style={styles.cardicon}>
              <View>
                <Text style={styles.text1}>Patient Appointments</Text>
                <Text style={styles.text2}>Click to view</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </BackgroundComp>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  container: {
    // backgroundColor: 'red',
    width:width,
    height:height
  },
  headerText: {
    fontSize: 20,
    color: '#150E56',
    fontWeight: 'bold',
    flex: 1,
    paddingLeft: 10,
  },
  headerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.3,
  },
  icon: {
    paddingHorizontal: 10,
  },
  welcome: {
    marginBottom: 20,
    marginTop: 5,
    flexDirection: 'row',
    // backgroundColor: 'cyan',
  },
  appointments: {},
  appointmentimage: {
    marginHorizontal: 40,
    height: height*0.17,
    marginVertical: 30,
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    // backgroundColor:'red',
    // paddingLeft: 55,
    textAlign: 'center',
    paddingTop: 30,
    color: '#150E56',
    letterSpacing: 2,
  },
  text2: {
    // backgroundColor: 'red',
    color: 'black',
    fontSize: 14,
    letterSpacing: 3,
    textAlign: 'center',
    marginTop: 10,
  },
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
});
