import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Modal,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {Formik} from 'formik';
import {BackgroundComp} from '../Components/Background';
import {IconComp} from '../Components/Icon';
import {Input} from '../Components/Input';
import {Avatar, TextInput} from 'react-native-paper';
import {ButtonComp} from '../Components/Button';
import {launchCamera} from 'react-native-image-picker';

const {width, height} = Dimensions.get('screen');

export const EditProfile = props => {
  const [editedProfile, setEditedProfile] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [cameraPhoto, setCameraPhoto] = useState();
  const openModal = () => {
    setShowModal(true);
  };
  useEffect(() => {
    console.log('useeffect check');
  }, []);

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }

    const openGallery = () => {};
    
  };
  return (
    <BackgroundComp source={require('../Images/Carousel/bg.jpg')}>
      <View style={styles.container}>
        <View>
          <Text style={styles.head}>Edit Profile</Text>
        </View>
        <View>
          <Formik
            initialValues={{
              username: 'Colin Brighton',
              phone_number: '9876543210',
              location: 'Kanyakumari,Tamilnadu',
            }}
            onSubmit={value => {
              setEditedProfile(value);
              props.navigation.navigate('UserProfile');
            }}>
            {formikprops => (
              <View style={styles.editprofilecontainer}>
                <View style={styles.inputbox}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={styles.avatar}
                      onPress={openModal}>
                      <Avatar.Image
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxYwhyb-ZYPd3tHeJo3odrNh7GsYjPYGXsA&usqp=CAU',
                        }}
                        size={80}
                      />
                      <View style={styles.photo}>
                        <IconComp name={'plus-circle'} size={30} />
                      </View>
                    </TouchableOpacity>
                    <View style={{flex: 0.7, justifyContent: 'center'}}>
                      <Text
                        style={{
                          textAlign: 'center',
                        }}>
                        Click on the icon to change the profile picture
                      </Text>
                    </View>
                  </View>

                  <Input
                    mode={'outlined'}
                    label={'UserName'}
                    placeholder={'Enter Username'}
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
                </View>
                <View style={styles.inputbox}>
                  <Input
                    mode={'outlined'}
                    label={'Phone Number'}
                    placeholder={'Enter PhoneNumber'}
                    keyboardType={'numeric'}
                    value={formikprops.values.phone_number}
                    onChangeText={formikprops.handleChange('phone_number')}
                    onBlur={formikprops.handleBlur('phone_number')}
                    right={
                      <TextInput.Icon
                        icon={() => (
                          <IconComp
                            name={'phone'}
                            size={22}
                            color={'black'}
                          />
                        )}
                      />
                    }
                  />
                </View>
                <View style={styles.inputbox}>
                  <Input
                    mode={'outlined'}
                    label={'Location'}
                    placeholder={'Enter Location'}
                    value={formikprops.values.location}
                    onChangeText={formikprops.handleChange('location')}
                    onBlur={formikprops.handleBlur('location')}
                    right={
                      <TextInput.Icon
                        icon={() => (
                          <IconComp
                            name={'map-marker'}
                            size={22}
                            color={'black'}
                          />
                        )}
                      />
                    }
                  />
                </View>
                <View style={styles.btn}>
                  <ButtonComp
                    mode={'elevated'}
                    text={'Save Changes'}
                    textColor={'white'}
                    bgColor={'#150E56'}
                    onPress={formikprops.handleSubmit}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>

        {/* edit ptofile modal */}
        <View>
          <Modal
            visible={showModal}
            onRequestClose={() => setShowModal(false)}
            animationType="slide"
            transparent={true}>
            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
              <View style={styles.modalContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.imgHolder}>
                    <TouchableOpacity
                      style={styles.imgWrap}
                      activeOpacity={0.7}
                      // onPress={openCamera}
                    >
                      <Image
                        source={require('../Images/userhome/camera.png')}
                        style={{width: 40, height: 40}}
                      />
                    </TouchableOpacity>
                    <Text style={styles.text}>Open Camera</Text>
                  </View>
                  <View style={styles.imgHolder}>
                    <TouchableOpacity
                      style={styles.imgWrap}
                      activeOpacity={0.7}
                    
                      >
                      <Image
                        source={require('../Images/userhome/gallery.png')}
                        style={{width: 40, height: 40}}
                      />
                    </TouchableOpacity>

                    <Text style={styles.text}>Open Gallery</Text>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </BackgroundComp>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    // backgroundColor: 'red',
    marginTop: 10,
    height:height,
    // backgroundColor:"red"
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
  editprofilecontainer: {
    backgroundColor: '#FEFCF3',
    marginTop: 40,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    width:width,
    borderBottomColor: '#150E56',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  inputbox: {
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    marginVertical: 5,
  },
  avatar: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
    width: 80,
    borderRadius: 50,
  },
  photo: {
    position: 'absolute',
    top: 25,
    // opacity: 0.8,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 5,
    marginVertical: 20,
  },
  modalContainer: {
    backgroundColor: '#E3F6FF',
    marginTop: 640,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  imgWrap: {
    // backgroundColor: 'red',
    width: 40,
  },
  imgHolder: {
    // backgroundColor: 'yellow',
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
