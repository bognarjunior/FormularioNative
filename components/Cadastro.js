import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class Cadastro extends Component {
  state = {
    email: '',
    password: '',
    msg: null,
    erros: [],
  };

  renderErros = () => {
    if (this.state.erros.length > 0) {
      const listErr = this.state.erros.map( 
        e => <Text style={{ color: '#cc2900', fontSize: 20 }} key={e}>{e}</Text>
      );

      return (
        <View style={{ alignItems: 'center', paddingBottom: 20 }}>
          <Text style={{ color: '#cc2900', fontSize:30, fontWeight: 'bold' }}>Atenção!</Text>
          { listErr }
        </View>
      )
    }
  }
  renderMsg = () => {
    if (this.state.msg) {
      return (
        <View style={{ padding: 20}}>
          <Text style={styles.textMsg}>{this.state.msg}</Text>
        </View>
      )
    }
  }

  validarFormulario() {
    let erros = [];
    if (!this.state.email) {
      erros.push('O campo email é requerido');
    }
    if (!this.state.password) {
      erros.push('O campo senha é requerido');
    }
    return erros;
  }
  onCadastrarPress =() => {
    const erros = this.validarFormulario();
    
    if (erros.length > 0) {
      this.setState({
        erros
      });
      return;
    }

    this.setState({ 
      msg: 'Muito obrigado por se cadastrar, verifique seu email os próximos passos',
      email: '',
      password: '',
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View>
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
          <View style={{ padding: 8}}>
            <Button 
              title='Cadastrar' 
              onPress={this.onCadastrarPress}
            />
          </View>
        </View>
        {this.renderErros()}
        {this.renderMsg()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
  },
  textMsg: {
    alignSelf: 'center',
    color: '#33ff33',
    fontSize: 20,
  }
});
