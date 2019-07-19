/*
import React from "react";

import { Text } from "react-native";

import { Button, FormLabel, FormInput, FormValidationMessage } from   'react-native-elements';

import Constants from 'expo-constants';

import Yup from 'yup';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { withFormik } from 'formik';

const DataUser = () => (
	<Text>Identificação<Text>

);

export default DataUser;
*/


import React from "react";

import Constants from 'expo-constants';

import Yup from 'yup';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { withFormik } from 'formik';

const Form = props => (
  <View style={styles.container}>
    <Text>Inserir o seu email</Text>
    <TextInput
      placeholder="Type here to translate!"
      onChangeText={text => props.setFieldValue('email', text)}
      value={props.values.email}
    />
    <Text>Inserir o sua senha</Text>
    <TextInput
      value={props.values.password}
      onChangeText={text => props.setFieldValue('password', text)}
      returnKeyType='go'
      secureTextEntry
      autoCorrect={false}
    />

    <Button onPress={props.handleSubmit} title="Login" />
  </View>
);

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),

  /*validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo de e-mail'),
    password: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
  }),*/

  handleSubmit: values => {
    console.log(values);
  },
})(Form);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
