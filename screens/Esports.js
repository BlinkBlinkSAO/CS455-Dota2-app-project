import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

//Esports webview
class EsportS extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.dota2.com/esports/'}}
      />
    );
  }
}
export default EsportS;