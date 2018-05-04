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
  View,
  Image,
  Dimensions,
  FlatList
} from 'react-native';
import Post from './src/components/Post'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {
  
  constructor() {
    super()
    this.state = {
      fotos: []
    }
  }  

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
    .then(resposta => resposta.json())
    .then(json => this.setState({fotos: json}))
  }
  
  render() {
    return (
      <FlatList style={styles.container}
        data={this.state.fotos}
        keyExtractor={(item, id) => id.toString()}
        renderItem={ ({item}) =>
          <Post foto={item}/>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})