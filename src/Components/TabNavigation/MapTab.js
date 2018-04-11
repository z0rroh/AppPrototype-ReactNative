/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Container,Content,Icon, Thumbnail, Header, Left, Right, Body} from 'native-base'

export default class MapTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) =>(
      <Icon name='ios-locate-outline' style={{color:tintColor}}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MapTab component</Text>
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
