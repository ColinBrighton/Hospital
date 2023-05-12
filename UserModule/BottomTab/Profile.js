import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Modal,
  Alert,
  Share,
  Appearance,
  useColorScheme,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Avatar, Caption, Title, TouchableRipple} from 'react-native-paper';
import {ButtonComp} from '../../Components/Button';
import {IconComp} from '../../Components/Icon';
import {BackgroundComp} from '../../Components/Background';
import { signOutUser } from '../../Utilities';

const {width, height} = Dimensions.get('screen');
export const Profile = (props, route) => {
  const [showmodal, setShowmodal] = useState(false);

  const submit = () => {
    setShowmodal(true);
  };
  const logout = () => {
    // props.navigation.navigate('Homie'), 
    setShowmodal(false);
    try {
      signOutUser()
      console.log('signout sucess')
    } catch (error) {
      console.log(error, 'signout error')
    }
  };
  const logoutCancel = () => {
    setShowmodal(false);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      // if (result.action === Share.sharedAction) {
      //   if (result.activityType) {
      //     // shared with activity type of result.activityType
      //   } else {
      //     // shared
      //   }
      // } else if (result.action === Share.dismissedAction) {
      //   // dismissed
      // }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <BackgroundComp source={require('../../Images/Carousel/bg.jpg')}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.top}>
          <View style={styles.header}>
            <Avatar.Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxYwhyb-ZYPd3tHeJo3odrNh7GsYjPYGXsA&usqp=CAU',
              }}
              size={80}
            />
            <View style={{marginLeft: 15}}>
              <Title style={[styles.title, {marginTop: 20, color: '#150E56'}]}>
                {/* {editedProfile.username} */}colin
              </Title>
              <Caption style={styles.email}>username@gmail.com</Caption>
            </View>
          </View>
          <View style={styles.btn}>
            <ButtonComp
              mode={'text'}
              text={'Edit'}
              bgColor={'#1597BB'}
              textColor="white"
              onPress={() => props.navigation.navigate('EditProfile')}
            />
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.info}>
              <View style={styles.infoicon}>
                <IconComp name={'envelope'} size={20} color={'#150E56'} />
              </View>
              <Text style={styles.infotxt}>username@gmail.com</Text>
            </View>
            <View style={styles.info}>
              <View style={styles.infoicon}>
                <IconComp name={'phone'} size={20} color={'#150E56'} />
              </View>
              <Text style={styles.infotxt}>9876543210</Text>
            </View>
            <View style={styles.info}>
              <View style={styles.infoicon}>
                <IconComp name={'map-marker'} size={20} color={'#150E56'} />
              </View>
              <Text style={styles.infotxt}>Kanyakumari,Tamilnadu</Text>
            </View>
          </View>
        </View>
        <View style={styles.menuwrapper}>
          {/* <TouchableRipple onPress={() => {}} style={styles.touchable}>
            <View style={styles.menuitem}>
              <View style={styles.menuicon}>
                <IconComp name={'money'} size={30} color={'#150E56'} />
              </View>
              <View style={styles.menutextwrap}>
                <Text style={styles.menutxt}>Your Coupons</Text>
              </View>
            </View>
          </TouchableRipple> */}
          <TouchableRipple onPress={onShare} style={styles.touchable}>
            <View style={styles.menuitem}>
              <View style={styles.menuicon}>
                <IconComp name={'share-alt'} size={30} color={'#150E56'} />
              </View>
              <View style={styles.menutextwrap}>
                <Text style={styles.menutxt}>Tell Your Friends</Text>
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}} style={styles.touchable}>
            <View style={styles.menuitem}>
              <View style={styles.menuicon}>
                <IconComp name={'adjust'} size={30} color={'#150E56'} />
              </View>
              <View style={styles.menutextwrap}>
                <Text style={styles.menutxt}>Dark Theme</Text>
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={submit} style={styles.touchable}>
            <View style={styles.menuitem}>
              <View style={styles.menuicon}>
                <IconComp
                  name={'arrow-circle-right'}
                  size={30}
                  color={'#150E56'}
                />
              </View>
              <View style={styles.menutextwrap}>
                <Text style={styles.menutxt}>Logout</Text>
              </View>
            </View>
          </TouchableRipple>

          <Modal
            visible={showmodal}
            onRequestClose={() => setShowmodal(false)}
            transparent>
            <View style={styles.center}>
              <View style={styles.modal}>
                <View style={styles.modalhead}>
                  <Text style={styles.headtext}>Confirm Logout</Text>
                </View>
                <Text style={styles.bodytext}>
                  Are you sure you want to logout ?
                </Text>
                <View style={styles.btncontainer}>
                  <View style={styles.logoutbtn}>
                    <ButtonComp
                      mode={'contained'}
                      text={'Cancel'}
                      bgColor="transparent"
                      textColor={'black'}
                      borderwidth={'1px'}
                      bordercolor={'black'}
                      onPress={() => logoutCancel()}
                    />
                  </View>
                  <View style={styles.logoutbtn}>
                    <ButtonComp
                      mode={'contained'}
                      text={'Ok'}
                      bgColor="#150E56"
                      onPress={() => logout()}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </BackgroundComp>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    // backgroundColor:'red'
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 20,
    paddingBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  email: {
    fontSize: 14,
    color: 'black',
  },
  btn: {
    width: 80,
    marginLeft: 20,
    marginTop: 5,
  },
  infoWrapper: {
    // backgroundColor: 'red',
    marginVertical: 10,
    flex: 1,
    width: '100%',
  },
  info: {
    flexDirection: 'row',
    marginLeft: 10,
    marginVertical: 10,
  },
  infotxt: {
    marginLeft: 5,
    color: 'black',
    flex: 0.9,
  },
  infoicon: {
    flex: 0.1,
    alignItems: 'center',
  },
  top: {
    backgroundColor: '#FEFCF3',
    borderBottomColor: '#150E56',
    borderBottomWidth: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  menuwrapper: {
    marginTop: 20,
  },
  menuitem: {
    flexDirection: 'row',
  },
  menutxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 10,
    letterSpacing: 1,
  },
  menuicon: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menutextwrap: {
    flex: 0.7,
  },
  touchable: {
    borderBottomColor: '#FEFCF3',
    borderBottomWidth: 2,
    marginHorizontal: 10,
    paddingTop: 15,
  },
  modal: {
    width: width * 0.8,
    height: height * 0.18,
    backgroundColor: 'white',
    // borderRadius:20,
    borderWidth: 1,
    borderColor: 'black',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  modalhead: {
    backgroundColor: '#150E56',
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 25,
    letterSpacing: 1,
  },
  bodytext: {
    color: 'black',
    paddingLeft: 25,
    fontSize: 16,
    paddingTop: 20,
  },
  logoutbtn: {
    width: 100,
    marginRight: 10,
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
  },
});
