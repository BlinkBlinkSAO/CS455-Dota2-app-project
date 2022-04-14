import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

//news webview
class NewS extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.dota2.com/news'}}
      />
    );
  }
}
export default NewS;