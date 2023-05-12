import React from 'react';
import {StackNavigationComp} from './Components/StackNavigation';
import {Provider} from 'react-redux';
import {store} from './Store/Store';
import {ScreensNav} from './ScreensNav';
import {CometChatDemo} from './CometChatDemo/CometChatDemo';
import { Text } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigationComp />
    </Provider>
  );
};
export default App;
