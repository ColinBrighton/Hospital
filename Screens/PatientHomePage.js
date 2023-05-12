import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {BackgroundComp} from '../Components/Background';
import {ButtonComp} from '../Components/Button';


export const PatientHomePage = props => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [liveId, setLiveId] = useState(0);

  useEffect(() => {
    setUserId(String(Math.floor(Math.random() * 100000)));
  }, []);

  return (
    <View style={{position: 'relative', height: '100%'}}>
      <BackgroundComp
        source={require('../Images/videocallBg.jpg')}></BackgroundComp>
      <View style={styles.darkBg}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.text}>Live Id</Text>
            <TextInput
              placeholder="Enter live Chat Id"
              placeholderTextColor={'gray'}
              onChangeText={text => setLiveId(text)}
              maxLength={4}
              // keyboardType="numeric"
              value={liveId}
              style={styles.textInput}
            />
            <Text style={styles.text}>UserName</Text>
            <TextInput
              
              placeholder="Enter username"
              placeholderTextColor={'gray'}
              onChangeText={text => setUserName(text)}
              maxLength={15}
              value={userName}
              style={styles.textInput}
            />
          </View>

          <View style={styles.buttonWrap}>
            <ButtonComp
              text={'Join'}
              mode={'contained'}
              disabled={
                userId.length === 0 || userName.length === 0 ? true : false
              }
              onPress={() =>
                props.navigation.navigate('liveAudiancePage', {
                  userId,
                  userName,
                  liveId,
                })
              }
              textColor={'black'}
              bgColor={'#FEFF86'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    marginBottom: 100,
    width: 300,
    zIndex: 0,
  },
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  darkBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    color: 'white',
  },
  top: {
    // backgroundColor:'red'
  },
  textInput: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  text: {
    color: '#FFEA20',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 3,
  },
  buttonWrap: {
    width: 90,
    marginTop: 10,
    backgroundColor: '#FEFF86',
    borderRadius: 20,
    marginLeft: 200,
  },
});
