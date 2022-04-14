import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

//Heros webview
class HeroS extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.dota2.com/heroes'}}
      />
    );
  }
}
export default HeroS;