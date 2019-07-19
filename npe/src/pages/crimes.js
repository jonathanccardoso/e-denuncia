import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image,StyleSheet, Text, View } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      function handleSubmit(data, { resetForm }) {
        resetForm();
      }

      return (
        <ScrollView style={styles.container}>
          <Text>Crimes</Text>
          <View style={styles.view}
            onSubmit={handleSubmit}
          >
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Text style={{fontSize: 16, alignSelf: 'flex-end', position:'absolute', left:80}}>Scroll me plz</Text>
          </View>
          <View style={styles.view}>
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Text style={{fontSize: 16, alignSelf: 'flex-end', position:'absolute', left:80}}>Scroll me plz</Text>
          </View>

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 2,
   paddingTop: 22
  },
  view: {
   padding: 2
  }
})

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);
