import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Estilos from '../Estilos/Styles';

import {Dimensions} from 'react-native';
import FindImageBackground from "../javascript/FindImageBackground";

export default function App({ navigation, route }) {
  const vinho = route.params;

  const height = Dimensions.get('window').height * 0.5

  return (
    <SafeAreaView style={Estilos.backgroundVinho}>
    <ScrollView >
      <ImageBackground source={FindImageBackground(route.params.categoria)} style={{ height:height, justifyContent: "center", padding:20 }} resizeMode='contain'>
        <View style={{ flex: 1,justifyContent:"space-between", alignItems:"center", flexDirection:"row", marginRight:20 }}>
          <Image source={route.params.uri} style={Estilos.vinhoPrincipal} />
          <View style={{minWidth:150, justifyContent:"center", alignItems:"center"}}>
            <Text style={Estilos.precoVinho}>R$ {route.params.preco}</Text>
            <TouchableOpacity style={Estilos.botaoComprar} onPress={()=> {navigation.navigate("Pedidos",vinho)}}>
              <Text style={Estilos.textoComprar}>Comprar</Text>
            </TouchableOpacity>

          </View>
            <Image source={route.params.origem} style={Estilos.bandeira}/>
        </View>
      </ImageBackground>
      <View style={{ flex: 1, paddingHorizontal:20 }}>
        <Text style={Estilos.nomeVinho}>{route.params.nome}</Text>
        <Text style={Estilos.nomeSecundario}>{route.params.nomeSecundario}</Text>

        <Text style={Estilos.vinhoTituloDescricao}>Descricao:</Text>
        <Text style={Estilos.descricao}>{route.params.descricao}</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#460D0B',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    color: 'white'
  },
});
