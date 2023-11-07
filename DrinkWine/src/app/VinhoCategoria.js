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

export default function VinhoCategoria() {
  return (
    <SafeAreaView style={Estilos.backgroundCatalogo}>
      <ScrollView>
        <View style={{marginTop:20}}>
          <Text style={{color:"white", fontSize:20}}>VINHO CATEGORIZADOOOOOOOOOO</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
