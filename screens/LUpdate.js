import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

//Updates webview
class Lupdate extends Component {
  render() {
    return (
      <WebView
        style={{flex: 1}}
        source={{uri: 'https://www.dota2.com/patches/7.31b'}}
      />
    );
  }
}
export default Lupdate;