import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const AboutUs = () => {
  return (
    <ImageBackground
      source={require('../Images/signup.jpg')}
      style={styles.background}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.head}>About Us</Text>
        <Text style={styles.name}>HOSPITAL NAME</Text>
        <Image
          source={require('../Images/userhome/aboutus.jpg')}
          style={styles.img}
        />
        <Text style={styles.title}>How We Got Started</Text>
        <Text style={styles.body}>
          The hospital was founded by Dr. M.R. John a surgeon with 46 years of
          experience with an impeccable surgical legacy. He is the first surgeon
          in this district to obtain the fellowship from the Royal College of
          Surgeons of Edinburgh, UK. This hospital is now managed under his
          leadership by his daughter Dr. Anita Robinson M.R.C.P.,(UK), DCH
          (London), a full time Pediatrician and her husband Dr. Rubakaran
          Robinson F.R.C.S., a full time Surgeon with interest in
          Gastroenterology, Laparoscopy and Endoscopic Surgeries.
        </Text>
        <Text style={styles.title}>Our Administratives</Text>
        <View style={styles.administrative}>
          <View style={styles.adsWrapper}>
            <Image
              source={require('../Images/userhome/founder.jpg')}
              style={styles.founders}
            />
            <Text style={styles.foundername}>Dr. M.R. John</Text>
            <Text style={styles.position}>Founder</Text>
          </View>
          <View style={styles.adsWrapper}>
            <Image
              source={require('../Images/userhome/founder1.jpg')}
              style={styles.founders}
            />
            <Text style={styles.foundername}>Dr. Rubakaran Robinson</Text>
            <Text style={styles.position}>Managing Partner</Text>
          </View>
        </View>
        <Text style={styles.title}>Our Commitments</Text>
        <View style={{marginBottom: 30}}>
          <Text style={styles.body}>
            Our commitment is to provide safe ethical and transparent care to
            our patients. To achieve this goal we are pursuing a course of
            standardization and accreditation.This hospital has progressed
            through the entry level accredition of NABH and has now being
            granted Full Accredition by the NABH.
          </Text>
          <Text style={styles.body}>
            Our hospital is approved by ISRO for providing secondary medical
            care to its employees. New Government Employees Insurance scheme,
            Chief Minister's Comprehensive Insurance Scheme operates in our
            hospital. We are empanelled with Star Health Insurance, Apollo
            Munich Health Insurance and have permanent accounts with Private
            Estates and Plantations.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    // paddingBottom: 50,
    width: width,
    height: height,
  },
  container: {
    padding: 20,
    // backgroundColor:'yellow',
    width: width,
    height: height,
  },
  head: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 20,
    color: '#150E56',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    // backgroundColor:'red'
    color: '#150E56',
  },
  img: {
    height: 250,
    width: 400,
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    color: '#150E56',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 5,
  },
  body: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
    // marginBottom: 10,
  },
  founders: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#95BDFF',
  },
  foundername: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  position: {
    color: 'grey',
  },
  administrative: {
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  adsWrapper: {
    flex: 0.5,
    alignItems: 'center',
    paddingTop: 15,
  },
});
