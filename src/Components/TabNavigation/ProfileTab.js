/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import {Icon, Content, Container, Header, Left, Right, Button, Body} from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'

export default class ProfileTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) =>(
      <Icon name="ios-contact" style={{color:tintColor}}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the ProfileTab component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
