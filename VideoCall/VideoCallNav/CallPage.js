import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react';
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

export const CallPage = () => {
  return (
    <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={725122387}
                appSign={'85ac09306a76484f389cc26978676f5ced7ac5b7545930b5faae0d935028611f'}
                userID={'1234'} // userID can be something like a phone number or the user id on your own user system. 
                userName={'Colin'}
                callID='voice_call' // callID can be any unique string. 
                    
                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { props.navigation.navigate('CallHome') },
                    onHangUp: () => { props.navigation.navigate('CallHome') },
                }}
            />
        </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:0
    }
})