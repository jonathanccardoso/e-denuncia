import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
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
          <Text style={styles.titulo}>Descrição</Text>
            <Text style={styles.hr}>______________________________________</Text>
            <View style={styles.containerHoraData}>
              <View> 
                <Text>Hora</Text>
                <TextInput 
                      placeholder="Digite a hora" 
                      style={styles.input}
                  />
              </View>
              <View>
                <Text>Data</Text>
                <TextInput 
                    placeholder="Digite a data" 
                    style={styles.input}
                />
              </View>
            </View>
            <View style={styles.containerTextArea}>
              <Text style={styles.containerTexto}> Descrição * </Text>
              <TextInput 
                    placeholder="Digite a data" 
                    style={styles.containerTextAreaInput}
                    multiline = {true}
                    numberOfLines={50}
                />
            </View>
            <View style={styles.buttonArea}>
              <Text style={styles.button}>Próximo</Text>
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
  hr: {
    textAlign: 'center',
    marginBottom: 5,
    color: '#707070',
  },
 containerHoraData:{
  flexDirection: 'row',
  marginTop: 30,
  justifyContent: 'center',
  alignItems: 'center'
 },
 input:{
   marginRight: 10,
   borderBottomWidth: 1,
   width: 140,
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
  containerTextArea:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTexto:{
    width: 310,
    marginBottom: 3,
    marginTop: 5,
  },
  containerTextAreaInput:{
    marginRight: 10,
    width: 294,
    height: 250,
    borderWidth: 1,
    color: '#707070',
    padding: 5,
    borderColor: '#707070',
    textAlignVertical: 'top',
    marginBottom: 25,
  }
});
