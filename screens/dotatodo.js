import React, {useState} from 'react';
import { StyleSheet, View, FlatList,ImageBackground } from 'react-native';
import Header from './dotatodoh';
import TodoDota from './TodoDota';
import AddDotaTodo from './adddotatodo';

const image = { uri: "https://wallpapermemory.com/uploads/431/dota-2-background-hd-2560x1440-303455.jpg" };

// dota to do funciton 
export default function DotaTodo(){

// initial some text const into the list.
const [todos, setTodos] = useState([
  { text: 'Watch 5 pro league game replays', key: '1'},
  { text: 'Play 3 game this week', key: '2'},
  { text: 'Play 10 calibration matches to ger rank', key: '3'},
  { text: 'Watch some dota 2 video tutorials', key: '4'},
  { text: 'Achieve Divine rank', key: '5'}
]);  

const pressHandler = (key) => {
  setTodos( prevTodos => {
    return prevTodos.filter(filterTodo => filterTodo.key != key);
  });
};

const submitHandler = (text) =>{
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()}, ...prevTodos];
      
    }
    );
  };

return (
    <View style = {styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.images}>
        <Header />
        <View style={styles.content}>
        <AddDotaTodo submitHandler = {submitHandler}/>
        <View style = {styles.list}>
            <FlatList
              data ={todos}
              renderItem={({item})=>(<TodoDota item={item} pressHandler={pressHandler}/>)}
            />
        </View>
        </View>
        </ImageBackground>
    </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 10,
  },

  list: {
    marginTop: 5,
  },
  
  images: {
    flex: 1,
    justifyContent: "flex-start"
  },
});