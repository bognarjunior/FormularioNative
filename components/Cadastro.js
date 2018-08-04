import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class Cadastro extends Component {
  state = {
    email: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleLabel}> Nova Conta </Text>
        </View>
        <View style={styles.viewEmail}>
          <Text style={styles.labelEmail}> Email: </Text>
          <TextInput 
            style={styles.inputEmail} 
            underlineColorAndroid='transparent'
            value={this.state.email}
            onChangeText={t => this.setState({ email: t })}
          />
        </View>
        <Text>{this.state.email}</Text>
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
  viewEmail: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  labelEmail: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputEmail: {
    flex: 3,
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    height: 40,
    padding: 8,
  }
});
