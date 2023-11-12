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
  ImageBackground
} from "react-native";
import Estilos from "../Estilos/Styles";

export default function Catalogo({navigation}) {
  return (
    <SafeAreaView style={Estilos.backgroundCatalogo}>
      <ScrollView>
        <View style={{marginTop:20}}>
          <TouchableOpacity style={Estilos.vinhoBanner} onPress={() => {navigation.navigate("VinhoCategoria",{categoria:"Rose"})}}>
            <ImageBackground source={require("../images/bannerVinhoRose.png")} style={Estilos.vinhoBannerImagem} resizeMode="cover" imageStyle={{ borderRadius: 20}}>
              <Text style={Estilos.vinhoBannerTitulo}>Rose</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={Estilos.vinhoBanner} onPress={() => {navigation.navigate("VinhoCategoria",{categoria:"Tinto"})}}>
            <ImageBackground source={require("../images/bannerVinhoTinto.png")} style={Estilos.vinhoBannerImagem} resizeMode="cover" imageStyle={{ borderRadius: 20}}>
              <Text style={Estilos.vinhoBannerTitulo}>Tinto</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={Estilos.vinhoBanner} onPress={() => {navigation.navigate("VinhoCategoria", {categoria:"Branco"})}}>
            <ImageBackground source={require("../images/bannerVinhoBranco.png")} style={Estilos.vinhoBannerImagem} resizeMode="cover" imageStyle={{ borderRadius: 20}}>
              <Text style={Estilos.vinhoBannerTitulo}>Branco</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={Estilos.vinhoBanner} onPress={() => {navigation.navigate("VinhoCategoria", {categoria:"Licoroso"})}}>
            <ImageBackground source={require("../images/bannerVinhoLicoroso.png")} style={Estilos.vinhoBannerImagem} resizeMode="cover" imageStyle={{ borderRadius: 20}}>
              <Text style={Estilos.vinhoBannerTitulo}>Licoroso</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
