import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { Button, FormLabel, FormInput, FormValidationMessage } from   'react-native-elements';

export default class Main extends Component {
	/*static navigationOptions = {
		title: "e-Denúncia"
	};*/

	render(){
		return (
			<View>

				<Button
		          raised
		          icon={{name: 'cached'}}
		          title='Quero me identificar'
		          onPress={ () => {
		            this.props.navigation.navigate("DataUser");
		          }}
		        />

		        <Button
		          raised
		          icon={{name: 'cached'}}
		          title='Quero ser anônimo'
		          onPress={ () => {
		            this.props.navigation.navigate("Crimes");
		          }}
		        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
