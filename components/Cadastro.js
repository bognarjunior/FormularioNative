import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Cadastro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleLabel}> Nova Conta </Text>
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
  }
});
