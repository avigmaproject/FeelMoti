import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import home from '../Assets/home.png';
function Launcher({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.main}
        onPress={() => navigation.navigate('Signin')}>
        <Image source={home} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DBBE80',
  },
  main: {
    width: '100%',
    height: 92,
    bottom: 50,
    left: 40,
  },
});
export default Launcher;
