import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Estilos from '../Estilos/Styles';
import MinhaConta from "../app/MinhaConta";
import Sacola from "../app/Sacola";
import Catalogo from "../app/Catalogo";
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#440C0C",}}>
      <ScrollView >
        <View style={Estilos.headerImage}><Image source={require('../images/logoPequena.png')} /></View>
        <View style={Estilos.background}>
          <TouchableOpacity style={{flex:1, justifyContent:'center', width:"100%"}}>
            <Image source={require("../images/banner.png")} style={{resizeMode:"contain", width:"100%"}} />
          </TouchableOpacity>
          <View style={Estilos.secao}>
            <Text style={Estilos.text}>Aqui vai vir as opções de algumas ofertar em imagens </Text>
          </View>
          <View style={Estilos.secao}>
            <Text style={{color:'#fff9', fontSize:19,width:"100%",textAlign:'left'}}>Ofertas </Text>
          </View>
          <View style={Estilos.secao}>
            <Text style={Estilos.tituloSecao}>Sobre</Text>
            <Text style={{color:"white", fontSize:19, textAlign:'center'}}>
              Bem-vindo à Drink Wine, 
              o seu destino premium para 
              os amantes de vinho! Nossa 
              loja foi cuidadosamente 
              concebida para proporcionar 
              uma experiência única de 
              descoberta, prazer e apreciação 
              do mundo fascinante dos 
              vinhos. Com uma ampla seleção 
              de rótulos cuidadosamente 
              selecionados de todas as regiões 
              vinícolas mais renomadas, nossa 
              missão é oferecer a você a 
              oportunidade de explorar o 
              caráter, a diversidade e o sabor 
              inigualável que o vinho tem 
              a oferecer.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SacolaScreen() {
  return (
    <Sacola />
  );
}
function CatalogoScreen() {
  return (
    <Catalogo />
  );
}
function MinhaContaScreen() {
  return (
    <MinhaConta />
  );
}

const Home = createBottomTabNavigator();

export default function App() {
  return (
    <Home.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            link = focused
              ? require('../images/homeBold.png')
              : require('../images/home.png');
          } else if (route.name === 'Catalogo') {
            link = focused
              ? require('../images/catalogoBold.png')
              : require('../images/catalogo.png');
          } else if (route.name === 'Pedidos') {
            link = focused
              ? require('../images/pedidosBold.png')
              : require('../images/pedidos.png');
          } else if (route.name === 'Minha Conta') {
            link = focused
              ? require('../images/minhaContaBold.png')
              : require('../images/minhaConta.png');
          }

          return <Image source={link} />;
        },
        tabBarActiveTintColor: '#454545',
        tabBarInactiveTintColor: '#fff',
        tabBarInactiveBackgroundColor: "#440C0C",
        tabBarActiveBackgroundColor: "#490C0C",
        tabBarStyle: Estilos.navigatorBar,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Home.Screen name="Início" component={HomeScreen} />
      <Home.Screen name="Catalogo" component={CatalogoScreen} />
      <Home.Screen name="Pedidos" component={SacolaScreen} />
      <Home.Screen name="Minha Conta" component={MinhaContaScreen} />
    </Home.Navigator>
  );
}
