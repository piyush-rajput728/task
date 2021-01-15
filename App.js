import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  TextInput,
  Plarform,
  Text
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Splash from './component/Splash';
import Login from './component/Login';
import Details from './component/Details';
import Newd from './component/Newd';


const RootStack = createStackNavigator({
  Splash: {
    screen: Splash, headerMode: "none"
  },

  Login: {
    screen: Login,
  },

  Details: {
    screen: Details,
  },

  Newd: {
    screen: Newd,
  },


},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);
const App = createAppContainer(RootStack);
export default App;











