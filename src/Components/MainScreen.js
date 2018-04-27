/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import {TabNavigator} from 'react-navigation'
import HomeTab from './TabNavigation/HomeTab'
import FilterTab from './TabNavigation/FilterTab'
import AddContentTab from './TabNavigation/AddContentTab'
import ProfileTab from './TabNavigation/ProfileTab'
import MapTab from './TabNavigation/MapTab'
import AnuncioLocation from './AnuncioLocation'
import {StackNavigator} from 'react-navigation'

export default class MainScreen extends Component {

  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <AppTabNavigator/>
    );
  }
}

const AppTabNavigator = TabNavigator({
  HomeTab:{
    screen: HomeTab
  },
  MapTab:{
    screen: MapTab
  },
  AddContent:{
    screen: AddContentTab
  },
  FilterTab:{
    screen: FilterTab
  },
  ProfileTab:{
    screen: ProfileTab
  }
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions:{
      style:{
        ...Platform.select({
           android: {
             backgroundColor: "white"
           }
        })
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
});
