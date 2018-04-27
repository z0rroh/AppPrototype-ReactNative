/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';
import {Container,Content,Icon, Thumbnail, Header, Left, Right, Body} from 'native-base'
import AnuncioDetail from '../AnuncioDetail';
import AnuncioLocation from '../AnuncioLocation';
import AnunciosList from '../AnunciosList';
import {StackNavigator} from 'react-navigation'

export default class HomeTab extends Component {


  static navigationOptions = {
    tabBarIcon: ({tintColor}) =>(
      <Icon name='ios-bookmarks' style={{color:tintColor}}/>
    )
  }

  render() {
    return (
      <HomeTabNavigator/>
    );
  }
}

const HomeTabNavigator = StackNavigator({
  AnuncioLocation:{
    screen: AnuncioLocation
  },
  AnunciosList: {
    screen: AnunciosList
  },
  AnuncioDetail:{
    screen: AnuncioDetail
  },
},{
    initialRouteName: 'AnunciosList'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
