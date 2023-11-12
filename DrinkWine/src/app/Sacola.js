import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Image} from 'react-native';
import Estilos from '../Estilos/Styles';

export default function Sacola(route) {
  return (
      <View style={Estilos.background}>
       <Text style={Estilos.text}>Hello {route.params}</Text>
      </View>
  );
}
