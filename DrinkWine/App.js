import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/app/Home';

const Stack = createNativeStackNavigator();

const Main = ({ navigation }) => (
  <View style={styles.container}>
    <Image style={styles.logo} source={require("./src/images/logo.png")}></Image>
    <Text style={styles.textLogin}>Entrar com:</Text>
    <TouchableOpacity style={styles.logoGoogleFundo} onPress={() => navigation.navigate('Home')}>
      <Image style={styles.logoGoogle} source={require('./src/images/googleLogo.png')} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.btnAgoraNao}>Agora Não</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#460D0B',
          },
          headerTintColor: '#460D0B',
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'DrinkWine - HomePage', headerShown: true }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'DrinkWine - HomePage', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#460D0B',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  logo: {
    width: 300,
    height: 300,
    margin: 100
  },
  textLogin: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    padding: 15,
    width: 180,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF14',
    marginBottom: 25
  },
  btnAgoraNao: {
    color: 'white',
  },
  logoGoogleFundo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    aspectRatio: 1,
    marginBottom: 15,
    backgroundColor: '#0000004A',
    borderRadius: 10,
  },
  logoGoogle: {
    aspectRatio: 1,
  }
});
