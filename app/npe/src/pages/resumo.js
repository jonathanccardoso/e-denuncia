import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>
            Resumo
          </Text>
          <Text style={styles.anonimo}><Image style={styles.img} source={require('../assets/anony_black.png')} /> Anônimo</Text>
          <Text style={styles.hr}>
            ______________________________________
          </Text>
        </View> 
        <Text style={styles.subTitulo}>Crime Ambiental   <Image style={styles.img} source={require('../assets/icon_ambiental.png')} /></Text>
        <Text style={styles.subTitulo2}>Poluição Urbana</Text>

        <Text style={styles.subtitulo3}>Descrição</Text>
        <Text style={styles.dateTime}>14:30 - 12/05/2019</Text>
        <Text style={styles.descricao}>
          Um bar sem licença está deixando som alto durante toda a madrugada.
        </Text>
        <Text style={styles.enderecoTitulo}>Endereço</Text>
        <Text style={styles.enderecoTexto}>
          Rua Monte Python, 425{'\n'}
          Lagoa Nova - Natal{'\n'}
          Rio Grande do Norte{'\n'}
        </Text>
        <Text style={styles.anexoTitulo}>Anexos</Text>
        <Text style={styles.anexoTexto}>
        Vídeo{'\n'}
        - video_19_07_2018.avi{'\n'}{'\n'}
        Áudio{'\n'}
        - WhatsApp_9urq383449.mp3{'\n'}
        </Text>
          <TouchableOpacity style={styles.buttonArea}
            onPress={ () => {
              this.props.navigation.navigate("Intro");
            }}
          >
            <Text style={styles.button}>Confirmar Denúncia</Text>
          </TouchableOpacity>
      </ScrollView>          
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    color: '#707070',
  },
  titulo: {
    margin: 1,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center', 
    color: '#707070',
  },
  hr:{
    textAlign: 'center',
    marginBottom: 5,
    color: '#707070',
  },
  anonimo:{
    textAlign: 'center', 
  },
  subTitulo:{
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 20,
  },
  subTitulo2:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 3,
  },
  img:{
    width: 25,
    height: 25,
  },
  subtitulo3:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 30,
  },
  dateTime:{
    marginLeft: 30,
    
  },
  descricao:{
    marginLeft: 30,
    fontSize: 19,
    marginRight: 20,
    marginTop: 10,
  },
  enderecoTitulo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 10,
  },
  enderecoTexto:{
    marginLeft: 30,
    fontSize: 19,
    marginRight: 20,
    marginTop: 10,
  },
  anexoTitulo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  anexoTexto:{
    marginLeft: 30,
    fontSize: 19,
    marginRight: 20,
    marginTop: 10,
  },
     buttonArea:{
      justifyContent: 'center',
      alignItems: 'center'
  },
  button: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 50,
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    width: 300,
    marginBottom: 25,
  },

});
