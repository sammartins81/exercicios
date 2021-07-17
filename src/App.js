import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Contador from './componentes/Contador';

export default class App extends Component {  
    render() {
      return (
        <View style={estilos.container}>
          <Contador valorInicial={50}/>
        </View>
      );
    }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fonte: {
    fontSize: 40,
  },
});