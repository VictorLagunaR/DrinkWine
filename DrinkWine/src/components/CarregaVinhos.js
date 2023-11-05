import vinhos from "../data/vinhos";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Estilos from '../Estilos/Styles';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export function carregaVinhos({items,navigation}){
  return (
    <View style={Estilos.ofertas}>
      {items.map((item) => (
          <TouchableOpacity
            style = {Estilos.vinhoOferta}
            onPress={() => {
              navigation.navigate("Vinho", { item });
            }}
          >
            <Image source={item.uri} style={Estilos.vinhoOfertaImagem}></Image>
            <Text style={{ color: "white" }}>{item.preco}</Text>
          </TouchableOpacity>
      ))}
    </View>
  );
};
