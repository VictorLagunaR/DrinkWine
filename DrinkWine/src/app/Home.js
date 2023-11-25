import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconOcticons from 'react-native-vector-icons/Octicons';
import { StatusBar } from 'react-native';


import Estilos from '../Estilos/Styles';
import MinhaConta from "../app/MinhaConta";
import Sacola from "../app/Sacola";
import Catalogo from "../app/Catalogo";
import Vinho from "../app/Vinho"
import VinhoCategoria from "../app/VinhoCategoria"

// data
import vinhos from '../data/vinhos'

const CustomTabBarIcon = ({ focused, iconName, style, iconLibrary }) => {
  const IconComponent = iconLibrary || IconOcticons;

  let tabText = '';

  if (iconName === 'home') {
    tabText = ' Tela inicial ';
  } else if (iconName === 'search') {
    tabText = ' Catálogo ';
  } else if (iconName === 'inbox') {
    tabText = ' Pedidos ';
  } else if (iconName === 'person') {
    tabText = ' Minha Conta ';
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <IconComponent name={iconName} size={25} color={focused ? '#454545' : '#fff'} style={style} />
      <Text style={{ color: focused ? '#454545' : '#fff', fontSize: 12 }}>{tabText}</Text>
    </View>
  );
};


function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#440C0C"}}>
      <StatusBar barStyle="light-content" backgroundColor="#440C0C"/>
      <ScrollView >
        <View style={Estilos.headerImage}><Image source={require('../images/logoPequena.png')} /></View>
        <View style={Estilos.background}>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', width: "100%" }} onPress={() => {
            navigation.navigate("Catalogo");
          }}>
            <Image source={require("../images/banner.png")} style={{ resizeMode: "contain", width: "100%", borderRadius: 15 }} />
          </TouchableOpacity>
          <View style={Estilos.secao}>
            <Text style={Estilos.text}>Aqui vai vir as opções de algumas ofertar em imagens </Text>
          </View>
          <View style={Estilos.secaoVinhos}>
            <Text style={{ color: '#fff9', fontSize: 19, width: "100%", textAlign: 'left', marginBottom: 10 }}>Ofertas</Text>
            <FlatList
              data={vinhos}
              keyExtractor={(vinho) => vinho.id}
              horizontal

              renderItem={({ item }) =>
                <TouchableOpacity
                  style={Estilos.vinhoOferta}
                  onPress={() => {
                    navigation.navigate("Vinho", item );
                  }}
                >
                  <Image source={item.uri} style={Estilos.vinhoOfertaImagem}></Image>
                  <Text style={{ color: "white", position: 'absolute', bottom: 15 }}>R${item.preco}</Text>
                </TouchableOpacity>}
            />

          </View>
          <View style={Estilos.secao}>
            <Text style={Estilos.tituloSecao}>Sobre</Text>
            <Text style={{ color: "white", fontSize: 19, textAlign: 'center' }}>
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

const Home = createBottomTabNavigator();

export default function App({ navigation }) {
  return (
    <Home.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconDefault, iconFocused;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Catalogo') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Pedidos') {
            iconName = focused ? 'inbox' : 'inbox';
          } else if (route.name === 'Minha Conta') {
            iconName = focused ? 'person' : 'person';
          }

          return (
            <CustomTabBarIcon
              focused={focused}
              iconName={iconName}
              style={Estilos.tabBarIcon}
            />
          );
        },
        tabBarActiveTintColor: '#4f0d0a',
        tabBarInactiveTintColor: '#fff',
        tabBarInactiveBackgroundColor: "#460D0B",
        tabBarActiveBackgroundColor: "#470c0a",
        tabBarStyle: Estilos.navigatorBar,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Home.Screen name="Início" component={HomeScreen} />
      <Home.Screen name="Catalogo" component={Catalogo} />
      <Home.Screen name="Pedidos" component={Sacola} />
      <Home.Screen name="Minha Conta" component={MinhaConta} />
      <Home.Screen name="Vinho" component={Vinho} options={{ tabBarButton: () => null }} />
      <Home.Screen name="VinhoCategoria" component={VinhoCategoria} options={{ tabBarButton: () => null }} />
    </Home.Navigator>
  );
}
