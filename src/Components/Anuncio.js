/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'
import ResponsiveImage from 'react-native-responsive-image'
import AnuncioLocation from './AnuncioLocation'
import {StackNavigator} from 'react-navigation'
var {width, height} = Dimensions.get('window');

export default class CardComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    const anuncio = this.props.anuncio;
    return (
      <Card>
        <CardItem bordered style={styles.cardItemTitle}>
          <Text style={styles.cardItemTitleText}>{anuncio.title}</Text>
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
                <Text style={styles.viewItemIconsButtonText}>{anuncio.calification.loves}</Text>
              </Button>
              <Button vertical transparent>
                <Icon name="ios-heart-outline" style={{color: "black"}}/>
                <Text style={styles.viewItemIconsButtonText}>{anuncio.calification.likes}</Text>
              </Button>
              <Button vertical transparent>
                <Icon name="ios-heart-outline" style={{color: "black"}}/>
                <Text style={styles.viewItemIconsButtonText}>{anuncio.calification.dislikes}</Text>
              </Button>
          </View>
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail small source={require('../Images/Avatars/mia.jpg')}/>
            <Body>
              <Text style={styles.cardItemAutorText}>{anuncio.autor}</Text>
              <TouchableWithoutFeedback
                onPress = {()=>{
                  this.props.navigation.navigate('AnuncioLocation')
                }}
                >
                <View style={styles.cardItemLocationView}>
                  <Icon name="ios-locate-outline" style={{color: "grey", fontSize: 18, marginRight: 5}}/>
                  <Text style={styles.cardItemUbicationText}>{anuncio.ubication}</Text>
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.cardItemUbicationDateText}>{anuncio.date}</Text>
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
    fontWeight: "600"
  },
  cardItemLocationView:{
    flexDirection: "row",
    alignItems: "center"
  },
  cardItemUbicationText:{
    fontSize: 12,
    color:"grey"
  },
  cardItemUbicationDateText:{
    fontSize: 12,
    color:"grey"
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  map: {
      width: null,
      height: 300,
      flex: 1
  }
});
