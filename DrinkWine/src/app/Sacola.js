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
        <View>
          {dadosSalvos.map((vinho) => {
            return (
              <Text key={vinho.id} style={{ color: "white", paddingTop:40}}>{vinho.nome}</Text>
            );
          })}
        </View>
      )
    } else {
      return (
        <Text style={{ color: "white",paddingTop:40 }}>SUa sacola está vazia {}</Text>
      );
    }
  };

  return (
    // <SafeAreaView style={Estilos.backgroundVinho}>
    //   <ScrollView>
    <View style={Estilos.background}>
      {/* {vinhos.map((vinho) => {
              return(
                <Text style = {{color: "white"}}>vinho</Text>
                )
              })} */}

      <GenerateItems/>
      {/* <Text style={{ color: "white" }}>{dadosSalvos}</Text> */}
    </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}
