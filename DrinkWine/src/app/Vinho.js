import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Estilos from "../Estilos/Styles";
import { Dimensions } from "react-native";
import FindImageBackground from "../javascript/FindImageBackground";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App({ navigation, route }) {
  const vinho = route.params;
  const [vinhos, setVinhos] = useState([]);
  
  const setItem = async () => {
    let newWines = [...vinhos, vinho]
    try {
      let getWines = await AsyncStorage.getItem("vinhos")
      if (getWines !== undefined && getWines !== undefined) {
        getWines = JSON.parse(getWines);
        const verifyWine = getWines.filter((vinho) => {return vinho.id == route.params.id})
        console.log(verifyWine + "\n")
        if (verifyWine.length > 0) {
          console.log(verifyWine.length + " aqui")
          newWines = vinhos
        }else{
          newWines = [...getWines, vinho]
        }
      }
      await AsyncStorage.setItem("vinhos", JSON.stringify(newWines)).then(console.log("Vinho inserido com sucesso"));
      setVinhos(newWines)
      navigation.navigate("Pedidos", vinho);
    } catch (error) {
      console.log(error);
    }
  };


  const height = Dimensions.get("window").height * 0.5;

  return (
    <SafeAreaView style={Estilos.backgroundVinho}>
      <ScrollView>
        <ImageBackground
          source={FindImageBackground(vinho.categoria)}
          style={{ height: height, justifyContent: "center", padding: 20 }}
          resizeMode="contain"
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginRight: 20,
            }}
          >
            <Image source={vinho.uri} style={Estilos.vinhoPrincipal} />
            <View
              style={{
                minWidth: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={Estilos.precoVinho}>R$ {vinho.preco}</Text>
              <TouchableOpacity
                style={Estilos.botaoComprar}
                onPress={() => {
                  setItem();
                }}
              >
                <Text style={Estilos.textoComprar}>Comprar</Text>
              </TouchableOpacity>
            </View>
            <Image source={vinho.origem} style={Estilos.bandeira} />
          </View>
        </ImageBackground>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          <Text style={Estilos.nomeVinho}>{vinho.nome}</Text>
          <Text style={Estilos.nomeSecundario}>{vinho.nomeSecundario}</Text>

          <Text style={Estilos.vinhoTituloDescricao}>Descricao:</Text>
          <Text style={Estilos.descricao}>{vinho.descricao}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#460D0B",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    color: "white",
  },
});
