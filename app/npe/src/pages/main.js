import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../assets/background-intro.jpg')} style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo_branco.png')} style={styles.logo}/>
        </View>   
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>
            Contribua com a sociedade{'\n'}
            denunciando crimes e{'\n'} 
            irregularidades de maneira{'\n'} 
            segura e anônima
          </Text>   
        </View> 
        <TouchableOpacity style={styles.buttonArea}
            onPress={ () => {
              this.props.navigation.navigate("Intro");
            }}
          >
          <Text style={styles.button}>Começar</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  logo:{
    width: 300,
    height: 86,
  },
  logoContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'left',
  },
  textoContainer:{
    marginTop: 100,
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
