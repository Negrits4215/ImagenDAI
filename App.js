import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './components/Cards'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/central_perk_logo.jpeg')}
        style={{ width: 200, height: 200, resizeMode: 'contain' }}
      />
      <Text>Try some of our most popular flavors!</Text>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});
