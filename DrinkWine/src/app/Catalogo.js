import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Image} from 'react-native';
import Estilos from '../Estilos/Styles';

export default function App() {
  return (
      <View style={Estilos.background}>
       <Text style={Estilos.text}>Hello Catalogo</Text>
      </View>
  );
}