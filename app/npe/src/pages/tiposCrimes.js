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
            Tipos de ocorrências
          </Text>
          <Text style={styles.hr}>
            ______________________________________
          </Text>
          <TouchableOpacity style={styles.containerLinks}
            onPress={ () => {
              this.props.navigation.navigate("FormDescricao");
            }}
          >
            <Image style={styles.img} source={require('../assets/icon_virtuais.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Extorsão xx{"\n"}</Text>
                Chantagens ou ameaças com a intenção de receber dinheiro das vitimas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerLinks}
            onPress={ () => {
              this.props.navigation.navigate("FormDescricao");
            }}
          >
            <Image style={styles.img} source={require('../assets/icon_virtuais.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Estelionato{"\n"}</Text>
                Passar-se por outra pessoa para obter vantagens ou roubar informações
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerLinks}
            onPress={ () => {
              this.props.navigation.navigate("FormDescricao");
            }}
          >
            <Image style={styles.img} source={require('../assets/icon_virtuais.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Fotos íntimas{"\n"}</Text>
                Compartilhar ou manter, de maniera não consensual, fotos íntimas de outras pessoas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerLinks}
            onPress={ () => {
              this.props.navigation.navigate("FormDescricao");
            }}
          >
            <Image style={styles.img} source={require('../assets/icon_virtuais.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Pedofilia{"\n"}</Text>
                Ver, manter ou compartilhar conteúdo com pornografia infantil
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerLinks}
            onPress={ () => {
              this.props.navigation.navigate("FormDescricao");
            }}
          >
            <Image style={styles.img} source={require('../assets/icon_virtuais.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Calúnia{"\n"}</Text>
                Mentir sobre pessoas ou empresas afim de difamar ou prejudicar a vítina
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerLinks}
            onPress={ () => {
              this.props.navigation.navigate("FormDescricao");
            }}
          >
            <Image style={styles.img} source={require('../assets/icon_virtuais.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Calúnia{"\n"}</Text>
                Mentir sobre pessoas ou empresas afim de difamar ou prejudicar a vítina
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerLinks}
            onPress={ () => {
              this.props.navigation.navigate("FormDescricao");
            }}
          >
            <Image style={styles.img} source={require('../assets/icon_virtuais.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Calúnia{"\n"}</Text>
                Mentir sobre pessoas ou empresas afim de difamar ou prejudicar a vítina
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerLinks}
            onPress={ () => {
              this.props.navigation.navigate("FormDescricao");
            }}
          >
            <Image style={styles.img} source={require('../assets/icon_outros.png')} />
            <Text style={styles.links}>
                <Text style={styles.tituloLink}>Outros{"\n"}</Text>
                Outros tipos de crimes cibernéticos
            </Text>
          </TouchableOpacity>
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
