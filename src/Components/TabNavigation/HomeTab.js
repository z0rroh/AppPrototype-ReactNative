/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Container,Content,Icon, Thumbnail, Header, Left, Right, Body} from 'native-base'

export default class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) =>(
      <Icon name='ios-bookmarks' style={{color:tintColor}}/>
    )
  }

  render() {
    const data =[{
      id:"1",

    }]
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Icon name="ios-menu" style={{paddingLeft:10}}></Icon>
          </Left>
          <Body>
            <Text>Prototype</Text>
          </Body>
          <Right>
            <Icon name="refresh" style={{paddingRight:10}}></Icon>
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
