//* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';
import {Container,Content,Icon, Thumbnail, Header, Left, Right, Body} from 'native-base'
import Anuncio from './Anuncio';

export default class AnunciosList extends Component {

  static navigationOptions = {
    header: null,
  }

  _renderItem(item){
    return(
      <Anuncio anuncio={item} navigation={this.props.navigation}></Anuncio>
    )
  }
  render() {

    const data =[{
      id:"1",
      title: "Vendo frutas baratas!",
      calification: {
        loves: 100,
        likes: 100,
        dislikes: 3,
      },
      autor: "Carlos Riquelme Labrin",
      ubication: "Santiago, Pudahuel, Calle Travesia",
      date: "Hace 2 horas",
      markerPosition: {
        latitude: -33.453850,
        longitude: -70.765799
      }
    },
    {
      id:"2",
      title: "Ayudo a cocinar",
      calification: {
        loves: 10,
        likes: 5,
        dislikes: 1,
      },
      autor: "Pedrito",
      ubication: "Santiago, Pudahuel, Calle Travesia",
      date: "Hace 5 horas",
      markerPosition: {
        latitude: -33.454083,
        longitude: -70.767751
      }
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
        <Content>
          <FlatList
            data={data}
            renderItem={({item}) => this._renderItem(item)}
            keyExtractor={item => item.id}
          />
        </Content>
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
