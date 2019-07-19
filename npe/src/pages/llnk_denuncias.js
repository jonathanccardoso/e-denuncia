import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
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
          <Text style={styles.titulo}>
            Tipos de ocorrências
          </Text>
          <Text style={styles.hr}>
            ______________________________________
          </Text>
          <View style={styles.containerLinks}>
            <Image style={styles.img} source={require('/assets/icon_virtuais.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Crimes Virtuais{"\n"}</Text>
                Crimes cometidos por computador ou através da internet
            </Text>
          </View>  
          <View style={styles.containerLinks}>
            <Image style={styles.img} source={require('/assets/icon_ambiental.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Crimes Ambientais{"\n"}</Text>
                Crimes cometidos contra o meio ambiente, animais ou poluição urbana
            </Text>
          </View>
          <View style={styles.containerLinks}>
            <Image style={styles.img} source={require('/assets/icon_patrimonial.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Crimes Patrimoniais{"\n"}</Text>
                Crimes cometidos contra propriedades públicas ou privadas
            </Text>
          </View>
          <View style={styles.containerLinks}>
            <Image style={styles.img} source={require('/assets/icon_corrupcao.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Crimes Corrupção{"\n"}</Text>
                Denúncias de corrupção, desvio de verbas ou outros
            </Text>
          </View>
          <View style={styles.containerLinks}>
            <Image style={styles.img} source={require('/assets/icon_violentos.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Crimes Violentos{"\n"}</Text>
                Violência doméstica, assaltos, homicídios ou outros crimes de natureza violenta
            </Text>
          </View>
          <View style={styles.containerLinks}>
            <Image style={styles.img} source={require('/assets/icon_tributario.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Crimes Tributários{"\n"}</Text>
                Crimes cometidos contra a ordem tributária, econômica e contra as relações de consumo
            </Text>
          </View>
          <View style={styles.containerLinks}>
            <Image style={styles.img} source={require('/assets/icon_faccoes.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Crimes de Facções{"\n"}</Text>
                Formação de quadrilha, porte ilegal de armas ou pontos de venda de drogas
            </Text>
          </View>
          <View style={styles.containerLinks}>
            <Image style={styles.img} source={require('/assets/icon_outros.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Outros{"\n"}</Text>
                Outras ações criminosas ou ilícita
            </Text>
          </View>
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
  hr:{
    textAlign: 'center',
    marginBottom: 5,
    color: '#707070',
  },
  containerLinks:{
    marginTop: 8,
    margin: 1,
    flexDirection: 'row',
  },
   img:{
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
  links:{
    marginTop: 8,
    marginRight: 80,
    marginLeft: 10,
    color: '#707070',
  } 
});
