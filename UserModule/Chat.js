import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useNavigation} from '@react-navigation/native';

export const Chat = props => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      sent:true,
      received: true,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
    isTyping={true}
    videoProps={()=> console.log('lkjhgfdsa')}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1, 
      }}
    />
  );
};

const styles = StyleSheet.create({});
