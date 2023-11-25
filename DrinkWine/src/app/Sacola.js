import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import Estilos from "../Estilos/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Sacola({ navigation, route }) {
  console.log(route)
  const [dadosSalvos, setDadosSalvos] = useState(null);

  useEffect(() => {
    const getDadosSalvos = async () => {
      try {
        // await AsyncStorage.removeItem("vinhos");
        const dados = await AsyncStorage.getItem("vinhos");
        console.log(await AsyncStorage.getItem("vinhos"))
        if (dados) {
          setDadosSalvos(JSON.parse(dados));
        }
      } catch (error) {
        console.error(
          "Erro ao recuperar os dados salvos do AsyncStorage:",
          error
        );
      }
    };

    getDadosSalvos();
  }, [route]);

  const GenerateItems = () => {
    if (dadosSalvos !== null) {
      return(
        <View style={Estilos.cards}>
          {dadosSalvos.map((vinho) => {
            return (
              <View key={vinho.id} style={Estilos.card}>

                <View style={Estilos.cardContainer}>
                  <Image source={vinho.uri} style={Estilos.cardImage}/>
                  <View style={{gap:5}}>
                    <Text style={Estilos.cardNome}>{vinho.nome}</Text>
                    <Text style={Estilos.cardNomeSecundario}>{vinho.nomeSecundario}</Text>
                  </View>
                </View>
                <View style={Estilos.cardBottom}>
                  <Text style={Estilos.cardPreco}>R${vinho.preco}</Text>
                  <View style={Estilos.cardQuantidade}>
                    <Text style={Estilos.cardQuantidadeNum}>
                      {vinho.quantidade}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={Estilos.cardDelete}><Image style={Estilos.cardDeleteImage} source={require("../images/delete.png")}/></TouchableOpacity>
              </View>
            );
          })}
        </View>
      )
    } else {
      return (
        <Text style={{ color: "white",paddingTop:40 }}>Sua sacola está vazia {}</Text>
      );
    }
  };

  return (
 
    <View style={Estilos.backgroundSacola}>
      <Text style={Estilos.tituloSacola}>Meus Pedidos</Text>
      <SafeAreaView style={Estilos.backgroundVinho}>
      <ScrollView>
        <GenerateItems/>
      </ScrollView>
      </SafeAreaView>
      {/* <Text style={{ color: "white" }}>{route.params.quantidade}</Text> */}
    </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}
