import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Estilos from '../Estilos/Styles';
import MinhaConta from "../app/MinhaConta";
import Sacola from "../app/Sacola";
import Catalogo from "../app/Catalogo";

function HomeScreen() {
  return (
    <View style={Estilos.background}>
      <Text style={Estilos.text}>Home!</Text>
    </View>
  );
}

function SacolaScreen() {
  return (
    <Sacola/>
  );
}
function CatalogoScreen() {
  return (
    <Catalogo/>
  );
}
function MinhaContaScreen() {
  return (
    <MinhaConta/>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={[Estilos.navigatorBar,{ color: isFocused ? '#454545' : '#fff'}]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Catalogo" component={CatalogoScreen} />
        <Tab.Screen name="Sacola" component={SacolaScreen} />
        <Tab.Screen name="Minha Conta" component={MinhaContaScreen} />
      </Tab.Navigator>
  );
}
