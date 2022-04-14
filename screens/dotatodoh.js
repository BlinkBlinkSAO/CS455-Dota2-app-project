import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// header function for the dota to do funciton.
export default function Header(){

  return(
    <View style={styles.header}>
    <Text style={styles.title}>Dota2 Game Todos</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  header: {
    height: 25,
    paddingTop: 5,
    backgroundColor: 'red'
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 15
  }
});