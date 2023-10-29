import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Image} from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
       <Text>Hello HomePage</Text>
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
