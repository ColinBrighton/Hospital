import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export const HomePage = () => {
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState(0);
  const [liveId, setLiveId] = useState(0);

  const navigation = useNavigation();

  const joinOrStart = isMost => {
    navigation.navigate(isMost ? 'hostscreen' : 'audiancescreen', {
      userId,
      userName,
      liveId,
    });
  };

  useEffect(() => {
    setUserId(String(Math.floor(Math.random() * 100000)));
    setLiveId(String(Math.floor(Math.random() * 10000)));
  }, []);
  console.log(liveId, 'live');
  return (
    <View>
      <Text style={styles.userIdText}>User Id : {userId}</Text>
      <View style={styles.wrap}>
        <Text style={{color: 'black', marginBottom: 3, fontWeight: 'bold'}}>
          Live Id
        </Text>
        <TextInput
          placeholder="Enter live Id"
          placeholderTextColor={'gray'}
          style={{
            borderColor: 'black',
            borderWidth: 1,
            marginBottom: 20,
            borderRadius: 10,
            color: 'black',
          }}
          onChangeText={text => setLiveId(text)}
          maxLength={4}
          value={liveId}
        />
        <Text style={{color: 'black', marginBottom: 3, fontWeight: 'bold'}}>
          UserName
        </Text>
        <TextInput
          placeholder="Enter username"
          placeholderTextColor={'gray'}
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            color: 'black',
          }}
          onChangeText={text => setUserName(text)}
          maxLength={10}
          value={userName}
        />
      </View>
      <View style={styles.btnWrap}>
        <View style={{marginHorizontal: 10}}>
          <Button
            title="Start a live"
            disabled={liveId.length === 0}
            onPress={() => joinOrStart(true)}
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <Button
            title="Watch live"
            disabled={liveId.length === 0}
            onPress={() => joinOrStart(false)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userIdText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
    marginTop: 20,
  },
  wrap: {
    // backgroundColor:"red",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  btnWrap: {
    flexDirection: 'row',
    // backgroundColor:"red",
    justifyContent: 'flex-end',
    marginTop: 20,
  },
});
