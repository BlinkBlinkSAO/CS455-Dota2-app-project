import React, { useState} from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';

// add dota to do funciton text input and sumbit button.
export default function AddDotaTodo({submitHandler}){
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style = {styles.input}
        placeholder='Add Dota2Todo'
        onChangeText={changeHandler}
        value = {text}
      />

      <Button color='skyblue' onPress = {()=>submitHandler(text)} title = 'Add Todo'/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 20,
    fontWeight: 'bold',
    },
  });