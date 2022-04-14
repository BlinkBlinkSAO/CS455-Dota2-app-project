import { StyleSheet,ImageBackground } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import DotaTodo from './dotatodo';

const image = { uri: "http://pic1.win4000.com/wallpaper/6/58e60b19c5832.jpg" };

//home page design and the Dota to do function
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.images}>
      <Text style={styles.title}>Welcome to Dota2ToGo app{'\n'}Here you can check Dota2 Heroes, Updates, News and Esports.</Text>
      </ImageBackground>
      <View style={styles.todopage}>
      <DotaTodo></DotaTodo>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  images: {
    flex: 1,
    justifyContent: "flex-start"
  },
  todopage: {
    flex:3,
  }
});
