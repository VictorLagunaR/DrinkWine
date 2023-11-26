import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Estilos from '../Estilos/Styles';
import usuario from '../data/users';

export default function MinhaConta() {
  const dadosUsuario = usuario[0];

  return (
    <SafeAreaView style={Estilos.backgroundVinho}>
      <ScrollView contentContainerStyle={{padding:10}}>
          <View style={styles.main}>
            <Image 
              source={dadosUsuario.uri}
              style={styles.imagem}
            />
            <Text style={styles.text}> Olá {dadosUsuario.nome} </Text>
          </View>

          <Text style={styles.textDados}> Dados </Text>
          <View style={styles.line}></View>

          <View style={styles.cont}>
            <Text style={styles.textDadosCont}> Nome: </Text>
            <Text style={styles.textDadosCont}> {dadosUsuario.nome} </Text>
          </View>

          <View style={styles.cont}>
            <Text style={styles.textDadosCont}> E-mail: </Text>
            <Text style={styles.textDadosCont}> {dadosUsuario.email} </Text>
          </View>

          <View style={styles.cont}>
            <Text style={styles.textDadosCont}> Telefone: </Text>
            <Text style={styles.textDadosCont}> {dadosUsuario.telefone} </Text>
          </View>

          <Text style={styles.textDados}> Endereço </Text>
          <View style={styles.line}></View>

          <View style={styles.cont}>
            <Text style={styles.textDadosCont}> Rua: </Text>
            <Text style={styles.textDadosCont}> {dadosUsuario.rua} </Text>
          </View>

          <View style={styles.cont}>
            <Text style={styles.textDadosCont}> Cep: </Text>
            <Text style={styles.textDadosCont}> {dadosUsuario.cep} </Text>
          </View>

          <View style={styles.cont}>
            <Text style={styles.textDadosCont}> Bairro: </Text>
            <Text style={styles.textDadosCont}> {dadosUsuario.bairro} </Text>
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
    color:'white'
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 100,
    marginTop: 20
  },
  text:{
    fontSize:24,
    color:'#fff',
    textAlignVertical:'center',
    textAlign:'center',
    marginTop: 30
  },
  textDados: {
    fontSize:30,
    color:'#fff',
    marginTop: 50
  },
  line: {
    height: 0.5,
    width: "100%",
    backgroundColor: '#dedede',
    marginTop: 5
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textDadosCont: {
    fontSize:20,
    color:'#fff',
    marginTop: 20
  }
});
