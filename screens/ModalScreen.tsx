import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ImageBackground } from 'react-native';
import { Text, View } from '../components/Themed';

const image = { uri: "https://pixelz.cc/wp-content/uploads/2017/12/dota-2-logo-2-wqhd-1440p-wallpaper.jpg" };

//setting page detail with functions and the color switch function depends on the user system theme.
export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.images}>
      <Text style={styles.title}>Welcome to Dota2ToGo App!{'\n'}{'\n'}Here you can: {'\n'}
      {'\n'}1.Check Dota2 Hero detail at the Heroes page.{'\n'}
      {'\n'}2.Check Dota2 Latest News at the News page.{'\n'}
      {'\n'}3.Check Dota2 League calender at the Esports page.{'\n'}
      {'\n'}4.Check Dota2 Latest and privous Updates at the Updates page.{'\n'}
      {'\n'}{'\n'}{'\n'}{'\n'}The app will automaticly switch its theme color with the user system theme.

      </Text>

      {/* Use a light status bar on android to switch theme same with the user system.*/}
      <StatusBar style={Platform.OS === 'android' ? 'light' : 'auto'} />
      </ImageBackground>
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
    fontSize: 18,
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
});
