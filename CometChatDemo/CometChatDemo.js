import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {CometChat} from '@cometchat-pro/react-native-chat';

export const CometChatDemo = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    CometChat.init('23898893ec70fd38').then(
      () => {
        console.log('CometChat initialized successfully');
      },
      error => {
        console.log('CometChat initialization failed with error:', error);
      },
    );
  }, []);

  const sendMessage = text => {
    const textMessage = new CometChat.TextMessage(
      'RECEIVER_USER_ID',
      text,
      CometChat.RECEIVER_TYPE.USER,
    );
    CometChat.sendMessage(textMessage).then(
      message => {
        setMessages([...messages, message]);
      },
      error => {
        console.log('Message sending failed with error:', error);
      },
    );
  };

  const fetchPreviousMessages = () => {
    const messagesRequest = new CometChat.MessagesRequestBuilder()
      .setLimit(50)
      .setUID('RECEIVER_USER_ID')
      .setCategory(CometChat.CATEGORY_MESSAGE)
      .build();

    messagesRequest.fetchPrevious().then(
      fetchedMessages => {
        setMessages([...fetchedMessages, ...messages]);
      },
      error => {
        console.log('Fetching messages failed with error:', error);
      },
    );
  };

  return (
    <View>
      {/* <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text>{item.text}</Text>}
        inverted={true}
        onEndReached={fetchPreviousMessages}
        onEndReachedThreshold={0.1}
      />
      <View>
        <TextInput onChangeText={text => setText(text)} />
        <TouchableOpacity onPress={(text) => sendMessage(text)}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});
