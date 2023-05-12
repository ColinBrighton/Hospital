import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ZegoUIKitPrebuildLiveStreaming, {
  HOST_DEFAULT_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import {useNavigation, useRoute} from '@react-navigation/native';
import Credentials from '../Modules/Credentials';

export const HostPage = () => {
  const route = useRoute();
  const navigation= useNavigation()
  const {userId, userName, liveId} = route.params;

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuildLiveStreaming
      appID={Credentials.appId}
      appSign={Credentials.appSign}
      userID={userId}
      liveID={liveId}
      userName={userName}
      config={{
        ...HOST_DEFAULT_CONFIG,
        onLeaveaLiveStreaming:()=>{
            navigation.navigate('DocHome')
        },
      }}
      />
        
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    zIndex:0
  }
});
