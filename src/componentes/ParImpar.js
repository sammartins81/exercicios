import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../estilo/Padrao';

function getParImpar(num){
    const resultado = num % 2 == 0 ? 'PAR' : 'IMPAR';
    return <Text style={Padrao.ex}> {resultado} </Text>
    }

export default props =>
    <View>
        {
            getParImpar(props.numero)
           //   props.numero % 2 == 0
           //   ? <Text style={Padrao.ex}> PAR  </Text>
           //   : <Text style={Padrao.ex}> IMPAR</Text>
        }
    </View>