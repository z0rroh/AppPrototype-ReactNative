/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'
import ResponsiveImage from 'react-native-responsive-image'

var {width, height} = Dimensions.get('window');

export default class CardComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Card>
        <CardItem bordered style={styles.cardItemTitle}>
          <Text style={styles.cardItemTitleText}>Encontre verduras baratas!</Text>
        </CardItem>
        <CardItem bordered cardBody style={styles.cardItemImage}>
          <ResponsiveImage initWidth={width} initHeight="210" source={require('../Images/Publicaciones/verduras.jpg')}/>
        </CardItem>
        <CardItem bordered style={styles.cardItemLikes}>
          <Button block iconLeft style={styles.cardItemLikesButton}>
            <Icon name='md-thumbs-up' style={styles.cardItemLikesButtonIcon} />
            <Text style={styles.cardItemLikesButtonText}>Calificar</Text>
          </Button>
          <View style={styles.viewItemIcons}>
              <Button vertical transparent >
                <Icon name="ios-heart-outline" style={{color: "black"}}/>
                <Text style={styles.viewItemIconsButtonText}>100</Text>
              </Button>
              <Button vertical transparent>
                <Icon name="ios-heart-outline" style={{color: "black"}}/>
                <Text style={styles.viewItemIconsButtonText}>10</Text>
              </Button>
              <Button vertical transparent>
                <Icon name="ios-heart-outline" style={{color: "black"}}/>
                <Text style={styles.viewItemIconsButtonText}>10</Text>
              </Button>
              <Button vertical transparent>
                <Icon name="ios-heart-outline" style={{color: "black"}}/>
                <Text style={styles.viewItemIconsButtonText}>10</Text>
              </Button>
          </View>
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail small source={require('../Images/Avatars/mia.jpg')}/>
            <Body>
              <Text style={styles.cardItemAutorText}>Carlos Riquelme Labrin</Text>
              <Text style={styles.cardItemUbicationDateText}>Ubicación: Santiago, Pudahuel, Calle Travesia</Text>
              <Text style={styles.cardItemUbicationDateText}>Hace 2 horas</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardItemTitle:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ff3f34"
  },
  cardItemTitleText:{
    fontWeight: "700",
    fontSize: 20,
    color: "white"
  },
  cardItemImage:{
    height: 208,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardItemLikes:{
    flexDirection:"column",
  },
  cardItemLikesButton:{
    backgroundColor: "#ff3f34",
    height: 35,
  },
  cardItemLikesButtonIcon:{
    bottom: 4,
    right: 6,
  },
  cardItemLikesButtonText:{
    color:"white",
    fontWeight:"600",
  },
  viewItemIcons:{
    height: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },
  viewItemIconsButtonText:{
    fontSize: 11
  },
  cardItemAutorText:{
    fontSize: 12,
  },
  cardItemUbicationDateText:{
    fontSize: 12,
    color:"grey"
  }
});
