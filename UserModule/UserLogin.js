import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import {ButtonComp} from '../Components/Button';
import {BackgroundComp} from '../Components/Background';
import {Formik} from 'formik';
import {TextInput} from 'react-native-paper';
import {Input} from '../Components/Input';
import {IconComp} from '../Components/Icon';
import {LoginSchema} from '../Components/ValidationSchema';
import {useDispatch} from 'react-redux';
import {checkConfirmAppointment} from '../Store/Action';
import {SignInWithEmailAndPassword} from '../Utilities';

const {width, height} = Dimensions.get('screen');
export const UserLogin = props => {
  const dispatch = useDispatch();
  return (
    <View>
      <BackgroundComp source={require('../Images/signup.jpg')}>
        <View>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={value => {
              console.log(value);
              dispatch(checkConfirmAppointment({key: 3, name: 'Most wanted'}));
              // CreateAccountWithEmailAndPassword(value).then(() => {
              //   ToastAndroid.show('Account Created', ToastAndroid.SHORT);
              // }).catch(error=>{
              //   
              // })
              SignInWithEmailAndPassword(value).then(()=>{
                ToastAndroid.show('LoginIn Successfully', ToastAndroid.SHORT);
              }).catch (error=>{
                if(error.code === 'auth/wrong-password'){
                  ToastAndroid.show('Wrong Password', ToastAndroid.SHORT);
                }
                if(error.code === 'auth/user-not-found'){
                  ToastAndroid.show('User Not Found', ToastAndroid.SHORT);
                }
                console.log(error,'login error')
              })
              // props.navigation.navigate('UserHome');
            }}>
            {formikprops => (
              <View style={styles.loginContainer}>
                <Text style={styles.loginhead}>Login to Continue..</Text>
                <View>
                  <Input
                    mode={'flat'}
                    label={'Email'}
                    placeholder={'Enter Email'}
                    styles={styles.inputBox}
                    value={formikprops.values.email}
                    onChangeText={formikprops.handleChange('email')}
                    onBlur={formikprops.handleBlur('email')}
                    right={
                      <TextInput.Icon
                        icon={() => (
                          <IconComp name={'user'} size={22} color={'black'} />
                        )}
                      />
                    }
                  />
                  <Text style={styles.error}>
                    {formikprops.touched.email && formikprops.errors.email}
                  </Text>
                  
                </View>
                <View>
                  <Input
                    mode={'flat'}
                    label={'Password'}
                    placeholder={'Enter Password'}
                    secureText={true}
                    styles={styles.inputBox}
                    value={formikprops.values.password}
                    onChangeText={formikprops.handleChange('password')}
                    onBlur={formikprops.handleBlur('password')}
                    right={
                      <TextInput.Icon
                        icon={() => (
                          <IconComp name={'lock'} size={22} color={'black'} />
                        )}
                      />
                    }
                  />
                  <Text style={styles.error}>
                    {formikprops.touched.password &&
                      formikprops.errors.password}
                  </Text>
                </View>
                <View style={styles.btn}>
                  <ButtonComp
                    mode={'elevated'}
                    text={'Login'}
                    textColor={'white'}
                    bgColor={'#141E61'}
                    borderwidth={'2px'}
                    onPress={formikprops.handleSubmit}
                  />
                </View>
                <View style={styles.footer}>
                  <View>
                    <Text style={styles.footertext}>Don't Have Account? </Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('UserSignIn')}>
                      <Text style={styles.logintext}>SignUp</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </BackgroundComp>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  footertext: {
    fontSize: 15,
    color: 'black',
  },
  logintext: {
    fontSize: 15,
    color: 'blue',
  },
  loginContainer: {
    height: height * 0.43,
    backgroundColor: '#98DFD6',
    width: width * 0.9,
    position: 'absolute',
    borderRadius: 30,
    left: width * 0.05,
    top: 180,
  },
  loginhead: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3E54AC',
    // textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 30,
  },
  inputBox: {
    backgroundColor: '#C9EEFF',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 5,
  },
  error: {
    color: '#DA0037',
    marginHorizontal: 15,
  },
});
