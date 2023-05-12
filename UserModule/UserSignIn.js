import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Dimensions, ToastAndroid} from 'react-native';
import {TextInput} from 'react-native-paper';
import {BackgroundComp} from '../Components/Background';
import {IconComp} from '../Components/Icon';
import {Input} from '../Components/Input';
import {ButtonComp} from '../Components/Button';
import {Formik} from 'formik';
import {signUpSchema} from '../Components/ValidationSchema';
import {connect, useDispatch, useSelector} from 'react-redux';
import {updateSignup} from '../Store/Action';
import {CreateAccountWithEmailAndPassword} from '../Utilities';

const {width, height} = Dimensions.get('screen');

export const UserSignIn = props => {
  const [signup, setSignup] = useState([]);

  // let data;
  // useEffect(() => {
  //   data = {signup};
  //   SetSignUpStore(data)
  //   props.updateSignupStore(signUpStore)
  // }, []);

  // const stateValue = useSelector((state)=> console.log(state,'sttttttt'))

  const dispatch = useDispatch();

  return (
    <View>
      <BackgroundComp source={require('../Images/signup.jpg')}>
        <View style={{left: 20, top: 10}}>
          <IconComp
            name={'arrow-left'}
            size={20}
            color={'#01cfa9'}
            onPress={() => props.navigation.navigate('UserLogin')}
          />
        </View>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirm_password: '',
          }}
          validationSchema={signUpSchema}
          onSubmit={value => {
            console.log(value);
            setSignup(val => [...val, value]);
            dispatch(updateSignup(value));
            CreateAccountWithEmailAndPassword(value)
              .then(() => {
                ToastAndroid.show('Account Created', ToastAndroid.SHORT);
              })
              .catch(error => {
                if(error.code === 'auth/email-already-in-use'){
                  ToastAndroid.show('Email is already in use', ToastAndroid.SHORT);
                }
                
                console.log(error, 'signin error');
              });
          }}>
          {formikprops => (
            <View style={styles.signupContainer}>
              <Text style={styles.signuptext}>Create Account</Text>
              <View>
                <Input
                  mode={'flat'}
                  label={'UserName'}
                  placeholder={'Enter Username'}
                  styles={styles.inputBox}
                  value={formikprops.values.username}
                  onChangeText={formikprops.handleChange('username')}
                  onBlur={formikprops.handleBlur('username')}
                  right={
                    <TextInput.Icon
                      icon={() => (
                        <IconComp name={'user'} size={22} color={'black'} />
                      )}
                    />
                  }
                />
                <Text style={styles.error}>
                  {formikprops.touched.username && formikprops.errors.username}
                </Text>
              </View>

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
                        <IconComp name={'envelope'} size={20} color={'black'} />
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
                  secureText={true}
                  styles={styles.inputBox}
                  placeholder={'Enter Password'}
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
                  {formikprops.touched.password && formikprops.errors.password}
                </Text>
              </View>
              <View>
                <Input
                  mode={'flat'}
                  label={'Confirm Password'}
                  secureText={true}
                  styles={styles.inputBox}
                  placeholder={'Confirm Password'}
                  value={formikprops.values.confirm_password}
                  onChangeText={formikprops.handleChange('confirm_password')}
                  onBlur={formikprops.handleBlur('confirm_password')}
                  right={
                    <TextInput.Icon
                      icon={() => (
                        <IconComp name={'lock'} size={22} color={'black'} />
                      )}
                    />
                  }
                />
                <Text style={styles.error}>
                  {formikprops.touched.confirm_password &&
                    formikprops.errors.confirm_password}
                </Text>
              </View>
              <View style={styles.btn}>
                <ButtonComp
                  mode={'elevated'}
                  text={'SignUp'}
                  textColor={'white'}
                  bgColor={'#141E61'}
                  borderwidth={'2px'}
                  onPress={formikprops.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </BackgroundComp>
    </View>
  );
};

// const mapStateToProps = state => state;
// const mapDispatchToProps = dispatch => ({
//   updateSignupStore: signUpStore => dispatch(updateSignup(signUpStore)),
// });

// const connectedComponent = connect(mapStateToProps, mapDispatchToProps);
// export default connectedComponent(UserSignIn);

const styles = StyleSheet.create({
  signupContainer: {
    backgroundColor: '#98DFD6',
    height: height * 0.6,
    width: width * 0.9,
    position: 'absolute',
    top: 110,
    left: 20,
    borderRadius: 30,
  },
  signuptext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3E54AC',
    // textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  inputBox: {
    backgroundColor: '#C9EEFF',
    // height: 50,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  inputcontainer: {
    // backgroundColor:'green'
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
