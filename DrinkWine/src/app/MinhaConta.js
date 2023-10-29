import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Image} from 'react-native';
import Estilos from '../Estilos/Styles';

export default function App() {
  return (
      <View style={Estilos.background}>
       <Text style={Estilos.text}>Hello MinhaConta</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#460D0B',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    color:'white'
  },
});
