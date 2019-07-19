import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>Anexos</Text>
          <Text style={styles.hr}>______________________________________</Text>
          <View style={styles.containerLinks}>
            <Image
              style={styles.img}
              source={require('/assets/icon_documento.png')}
            />
            <Text style={styles.links}>
              <Text style={styles.tituloLink}>Documentos{'\n'}</Text>
              Arquivo de texto, PDF, Planilhas ou apresentação de slides
            </Text>
          </View>
          <View style={styles.containerLinks}>
            <Image
              style={styles.img}
              source={require('/assets/icon_audio.png')}
            />
            <Text style={styles.links}>
              <Text style={styles.tituloLink}>Áudio{'\n'}</Text>
              Gravação de áudio, telefonemas, etc.
            </Text>
          </View>
          <View style={styles.containerLinks}>
            <Image
              style={styles.img}
              source={require('/assets/icon_video.png')}
            />
            <Text style={styles.links}>
              <Text style={styles.tituloLink}>Vídeo{'\n'}</Text>
              Gravação de câmeras de segurança, filmagens etc.
            </Text>
          </View>
          <View style={styles.containerLinks}>
            <Image
              style={styles.img}
              source={require('/assets/icon_imagem.png')}
            />
            <Text style={styles.links}>
              <Text style={styles.tituloLink}>Imagem{'\n'}</Text>
              Imagens de documentos, ações criminosas, locais etc.
            </Text>
          </View>
          <View style={styles.containerLinks}>
            <Image
              style={styles.img}
              source={require('/assets/icon_link.png')}
            />
            <Text style={styles.links}>
              <Text style={styles.tituloLink}>Link{'\n'}</Text>
              Endereço de páginas da web, arquivos online etc.
            </Text>
          </View>
        </View>
        <View style={styles.buttonArea}>
          <Text style={styles.button}>Salvar</Text>
        </View>
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
  hr: {
    textAlign: 'center',
    marginBottom: 5,
    color: '#707070',
  },
  containerLinks: {
    marginTop: 8,
    margin: 1,
    flexDirection: 'row',
  },
  img: {
    width: 64,
    height: 64,
    marginLeft: 16,
    marginTop: 12,
  },
  tituloLink: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#707070',
  },
  links: {
    marginTop: 8,
    marginRight: 80,
    marginLeft: 10,
    color: '#707070',
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
  },
});
