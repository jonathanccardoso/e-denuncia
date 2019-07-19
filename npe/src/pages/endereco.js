import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput, Button, TextAreaInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>
            Descrição
          </Text>
          <Text style={styles.hr}>
            ______________________________________
          </Text>
          <View style={styles.containerLinks}>
            <Text>Hora</Text>
            <TextInput
              placeholder="Type here to translate!"
            />
            <Text>Hora</Text>
            <TextInput
              placeholder="Type here to translate!"
            />
          </View>
          <View style={styles.textAreaContainer} >
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Type something fsdifsi'"
              placeholderTextColor="grey"
              numberOfLines={5}
              multiline={true}
            />
          </View>
          <Button title="Login" />

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
    backgroundColor: '#ecf0f1',
    padding: 8,
    color: '#707070',
  },
  textAreaContainer: {
    //borderColor: COLORS.grey20,
    borderWidth: 1,
    padding: 0
  },
  textArea: {
    //sheight: 150,
    //justifyContent: "flex-start"
  },
  containerTextInput: {
    marginTop: 14,
    flexDirection: 'row',
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
