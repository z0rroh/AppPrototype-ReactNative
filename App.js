/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import MainScreen from './src/Components/MainScreen';
import LoginScreen from './src/Components/LoginScreen';

export default class App extends Component<Props> {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}
const AppStackNavigator = StackNavigator({
  MainScreen: {
    screen: MainScreen
  },
  LoginScreen:{
    screen: LoginScreen
  },

})
//{ initialRouteName: (props) => { return props.screenProps.isAuthed ? 'Home' : 'Auth' } }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
