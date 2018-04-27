/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const{width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class AnuncioLocation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        longitudeDelta: 0,
        latitudeDelta: 0,
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      },
      error: "",
      isFetching: false,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  static navigationOptions = {
    headerTitle: 'Ubicación',
  }

  async componentDidMount(){
    this.setState({isFetching: true});
    await this.getCurrentPosition();
    
    this.watchID = navigator.geolocation.watchPosition(
     (position) => {
       this.setInitialState(position);
     },
     (error) => this.setState({ error: error.message }),
     { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
   );
  }

  async getCurrentPosition(){
      navigator.geolocation.getCurrentPosition(
          (position) => {
           this.setInitialState(position);
         },
         (error) =>{
           this.setState({error: error})
         },
         { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
      );
  }

  setInitialState(position){
    var coords = position.coords;
    var initialPosition = {
       latitude: coords.latitude,
       longitude: coords.longitude,
       longitudeDelta: LATITUDE_DELTA,
       latitudeDelta: LONGITUDE_DELTA,
    }
    var markerPosition = {
       latitude: coords.latitude,
       longitude: coords.longitude,
    }
    this.setState({initialPosition: initialPosition, markerPosition: markerPosition, isFetching: false})
  }


  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    var {isFetching, initialPosition, markerPosition, error} = this.state;
    console.log(initialPosition);
    console.log(isFetching);
    return (
      <View style={styles.container}>
      { !isFetching && !error ?
       (<MapView
          style={styles.map}
          provider={ PROVIDER_GOOGLE }
          initialRegion = {initialPosition}>
          <MapView.Circle
            center={markerPosition}
            strokeWidth={3}
            radius={10}
            fillColor="blue"
            strokeColor="white"
         />
        </MapView>): (<Text>Loading..</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    position: 'absolute'
  },
});
