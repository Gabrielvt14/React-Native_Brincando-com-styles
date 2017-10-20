import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component
{
  render() {
    return (
      <View style={styles.view}>
        <Text style={[cor.azul, tamanhoFonte.h1, text.center]}>Texto de exemplo 1</Text>
        <Text style={[cor.vermelho, tamanhoFonte.h2, text.right]}>Texto de exemplo 2</Text>
        <Text style={[cor.verde, tamanhoFonte.h3, text.left]}>Texto de exemplo 3</Text>
        <Text style={[cor.marrom, tamanhoFonte.h5, text.center]}>Texto de exemplo 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 30
    }
});

const cor = StyleSheet.create({
    azul: {
        color:'blue'
    },
    vermelho: {
        color: 'red'
    },
    verde: {
        color:'green'
    },
    marrom: {
        color:'brown'
    }
});

const tamanhoFonte = StyleSheet.create({
    h1: {
        fontSize:35
    },
    h2: {
        fontSize:25
    },
    h3: {
        fontSize:20
    },
    h4: {
        fontSize:15
    },
    h5: {
        fontSize:10
    },
    h6: {
        fontSize: 8
    }
});

const text = StyleSheet.create({
    right: {
        textAlign: 'right'
    },
    left: {
        textAlign: 'left'
    },
    center: {
        textAlign: 'center'
    }
});