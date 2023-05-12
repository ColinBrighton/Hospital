import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {BackgroundComp} from '../Components/Background';
import {ButtonComp} from '../Components/Button';
import {IconComp} from '../Components/Icon';

export const Home = props => {
  return (
    <View style={styles.container}>
      <BackgroundComp source={require('../Images/img.jpg')}>
        <View>
          <Text style={styles.heading}>Choose The Doctor you Want</Text>
          <View>
            <View style={styles.btn}>
              <View style={styles.icon}>
                <IconComp name={'arrow-right'} size={18} color={'black'} />
              </View>
              <ButtonComp
                mode={'contained'}
                bgColor="#01cfa9"
                text={'As a Patient'}
                textColor="white"
                onPress={() => props.navigation.navigate('UserLogin')}
              />
            </View>
            <View style={styles.btn}>
              <View style={styles.icon}>
                <IconComp name={'arrow-right'} size={18} color={'black'} />
              </View>
              <ButtonComp
                mode={'contained'}
                bgColor="#01cfa9"
                text={'As a Doctor'}
                textColor="white"
                onPress={() => props.navigation.navigate('DoctorLogin')}
              />
            </View>
          </View>
        </View>
      </BackgroundComp>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'black',
    fontSize: 60,
    fontWeight: '500',
    paddingVertical: 30,
    paddingLeft: 20,
  },
  regbtn: {
    width: 150,
    left: 120,
  },
  container: {
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    left: 100,
    marginVertical: 20,
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    paddingVertical: 10,
    paddingLeft: 15,
  },
});
