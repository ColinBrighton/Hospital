import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  Modal,
} from 'react-native';
import {ButtonComp} from './Button';

const {width, height} = Dimensions.get('window');

export const CustomDrawer = props => {
  const [showmodal, setShowmodal] = useState(false);
  // console.log(showmodal)
  const submit = () => {
    props.navigation.closeDrawer();
    setShowmodal(true);
  };
  const logout = () => {
    props.navigation.navigate('Home'), setShowmodal(false);
  };
  const logoutCancel = () => {
    setShowmodal(false);
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={{flex: 1, height: height * 0.9, position: 'relative'}}>
        <ImageBackground
          source={require('../Images/drawerhead.jpg')}
          style={{height: 150, position: 'relative'}}>
          <Image
            source={require('../Images/user.png')}
            style={styles.userImg}
          />
          <Text style={styles.text}>UserName</Text>
        </ImageBackground>
        <View style={styles.drawerWrapper}>
          <DrawerItemList {...props} />
        </View>
        <View style={styles.btn}>
          <ButtonComp
            mode={'contained'}
            text={'LogOut'}
            textColor={'black'}
            bgColor={'#01cfa9'}
            onPress={submit}
          />
        </View>
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
                    bgColor="#01cfa9"
                    onPress={() => logout()}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  userImg: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: '#01cfa9',
    borderWidth: 4,
    position: 'absolute',
    left: 180,
    bottom: 50,
  },
  drawerWrapper: {
    // marginTop:50
    // backgroundColor: 'green',
    // flex: 1,
  },
  text: {
    position: 'absolute',
    left: 170,
    top: 110,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  btn: {
    width: 95,
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    marginVertical: 10,
    right: width / 4,
  },
  modal: {
    width: 300,
    height: 150,
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
    backgroundColor: '#01cfa9',
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 25,
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
