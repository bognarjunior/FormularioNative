import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class Cadastro extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleLabel}> Nova Conta </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelInput}> Email: </Text>
          <TextInput 
            style={styles.inputText} 
            underlineColorAndroid='transparent'
            value={this.state.email}
            onChangeText={t => this.setState({ email: t })}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelInput}> Senha: </Text>
          <TextInput 
            style={styles.inputText} 
            underlineColorAndroid='transparent'
            value={this.state.password}
            onChangeText={t => this.setState({ password: t })}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    backgroundColor: '#3399ff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  labelInput: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputText: {
    flex: 3,
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    height: 40,
    padding: 8,
  }
});
