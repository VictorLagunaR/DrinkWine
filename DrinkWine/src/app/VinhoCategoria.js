import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import Estilos from "../Estilos/Styles";
import FindImageBackground from "../javascript/FindImageBackground";
import { Dimensions } from "react-native";

//data
import vinhos from "../data/vinhos";

export default function VinhoCategoria({ navigation, route }) {
  const height = Dimensions.get("window").height * 0.43;

  data = vinhos
    .filter(function (vinho) {
      return vinho.categoria == route.params.categoria;
    })
    .map(function (vinho) {
      return vinho;
    });

  return (
    <SafeAreaView style={Estilos.backgroundCatalogo}>
      <ScrollView>
        <View style={{ marginTop: 20, position:"relative", flex:1 }}>
          <ImageBackground
            source={FindImageBackground(route.params.categoria)}
            style={{ minHeight: height, width:"100%" }}
            imageStyle={{ 
              height: height, // the image height
              top: 0,
            }}
            resizeMode="contain"
          >
            <Text
              style={{
                color: "white",
                fontSize: 40,
                textTransform: "uppercase",
                textAlign: "center",
                fontWeight: "bold",
                marginTop:height * 0.22,
                marginBottom: 40,
              }}
            >
              {route.params.categoria}
            </Text>
            <View style={Estilos.vinhosContainer}>
              {data.map((vinho) => {
                return (
                  <TouchableOpacity
                    style={Estilos.vinhoCategorizado}
                    onPress={() => {
                      navigation.navigate("Vinho", vinho);
                    }}
                    key={vinho.id}
                  >
                    <Image
                      source={vinho.uri}
                      style={Estilos.vinhoOfertaImagem}
                    ></Image>
                    <Text
                      style={{ color: "white", position: "absolute", bottom: 15 }}
                    >
                      R${vinho.preco}
                    </Text>
                  </TouchableOpacity>
                );
                //  <Text style={{ color: "white", position: 'absolute', bottom: 15, backgroundColor:"red", width:500 }}>{typeof data}</Text>
              })}
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
