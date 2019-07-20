import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

import api from '../services/api';

export default class App extends React.Component {
  apiConection = async () => {
    try {
      //const response = await api.get('/usuarios/1',);

      const response = await api.post('/usuarios/', {
        id: '10',
        nome: 'user',
        cpf: '56327848723',
        telefone: '84',
        email: 'test0test@gmail.com',
        data: '20/07/2019',
        endereco: null
      });

      //Alert.alert('OK');
      this.props.navigation.navigate("Crimes");
    } catch (response) {
      this.setState({ errorMessage: response.data.error });
      //Alert.alert('ERROR');
    }
  };

  render() {
    return (
      <ImageBackground source={require('../assets/background-intro2.jpg')} style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo_branco.png')} style={styles.logo}/>
        </View>   
        <View style={styles.buttonArea}>
          <TouchableOpacity
            onPress = {
              this.apiConection
            }
          >
            <Text style={styles.button}>
            <Image source={require('../assets/icon_anony.png')} style={styles.icone}/>    Quero ser anônimo</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress = {
              this.apiConection
            }
          >
            <Text style={styles.button}>
            <Image source={require('../assets/icon_user.png')} style={styles.icone}/>    Quero me idêntificar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
    buttonArea:{
      height: '95%',
      justifyContent: 'center',
      alignItems: 'center',
  },
  button: {
    color: '#FFFFFF',
    marginTop: 25,
    borderRadius: 50,
    fontSize: 20,
    textAlign:'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 320,
    height: 78,
  },
  icone:{
    width: 45,
    height:45,
  }
});
