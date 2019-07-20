import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./assets/background-2.jpg')} style={styles.container}>
        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>
            Sua colaboração
            é importante!
          </Text> 
        </View>  
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>
            A sua denúncia está sendo apurada e no futuro pode vir a ser usada para solucionar os problemas relatados.
          </Text>   
        </View> 
        <View style={styles.buttonArea}>
          <Text style={styles.button}>Nova Denúncia</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  tituloContainer:{
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 35,
    width: "80%",
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'left',
    width: "80%",
  },
  textoContainer:{
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
    buttonArea:{
      justifyContent: 'center',
      alignItems: 'center'
  },
  button: {
    color: '#FFFFFF',
    marginTop: 100,
    borderRadius: 50,
    fontSize: 24,
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 300,
  },
});
