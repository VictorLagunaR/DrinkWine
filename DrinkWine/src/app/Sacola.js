import React, { useEffect, useState, useCallback } from "react";
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
  // console.log("route:" + route.params?.nome)
  
  const [dadosSalvos, setDadosSalvos] = useState(null);
  const [quantidadeAlterada, setQuantidadeAlterada] = useState(false);
  let excluir = false;

  const alteraQuantidadeCallback = useCallback(
    (id, num,dados) => {
      if(dados !== null){

        dados.forEach((vinho, index) => {
          if (vinho.id === id) {
            if ((vinho.quantidade > 1) || (vinho.quantidade == 1 && num > 0)) {
              dados[index].quantidade += num;
              console.log(dados[index].quantidade);
              setQuantidadeAlterada(true);
              AsyncStorage.setItem("vinhos", JSON.stringify(dados)).then(() => {
                console.log("Modificação realizada com sucesso");
              });
            }
          }
        });
      }
      },
    []
  );
  

  useEffect(() => {
    setQuantidadeAlterada(false)
    const getDadosSalvos = async () => {
      try {
        // await AsyncStorage.removeItem("vinhos");
        const dados = await AsyncStorage.getItem("vinhos");
        // console.log("async storage: " + dados)
        if (dados) {
          setDadosSalvos(JSON.parse(dados));
          // console.log("dados salvos: \n" + dadosSalvos)
        }
      } catch (error) {
        console.error(
          "Erro ao recuperar os dados salvos do AsyncStorage:",
          error
        );
      }
    };

    getDadosSalvos();
  }, [route,excluir, quantidadeAlterada]);
  
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
                    <TouchableOpacity
                      onPress={() => alteraQuantidadeCallback(vinho.id, -1, dadosSalvos)}
                    >
                      <Image style={Estilos.arrow} source={require("../images/ArrowLeft.png")}/>
                    </TouchableOpacity>
                    <Text style={Estilos.cardQuantidadeNum}>
                      {vinho.quantidade}
                    </Text>
                    <TouchableOpacity
                      onPress={() => alteraQuantidadeCallback(vinho.id, 1, dadosSalvos)}
                    >
                      <Image style={Estilos.arrow} source={require("../images/ArrowRight.png")}/>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity style={Estilos.cardDelete} onPress={ async () => {
                  const wines = dadosSalvos.filter((wine)=> {
                    return wine.id !== vinho.id
                  })
                  // console.log(wines);
                  setDadosSalvos(wines)
                  await AsyncStorage.setItem("vinhos", JSON.stringify(wines)).then(console.log("Vinho deletado com sucesso"));
                  excluir = true
                }}>
                  <Image style={Estilos.cardDeleteImage} source={require("../images/delete.png")}/>
                </TouchableOpacity>
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
      <Text style={Estilos.tituloSacola}> Meus Pedidos </Text>
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
