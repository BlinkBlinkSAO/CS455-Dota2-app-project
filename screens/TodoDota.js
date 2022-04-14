import React from 'react'
import {StyleSheet, Text, Pressable} from 'react-native';

//add dotatodo lists and  display the list.
export default function TodoDota({pressHandler, item }){
  return (
    <Pressable onPress={() => pressHandler(item.key)}>
      <Text style = {styles.item}>{item.text}</Text>
    </Pressable>
  )

}

const styles = StyleSheet.create({

  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: "#00ccff"
  }

});