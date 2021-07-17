import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../estilo/Padrao';

export default props => (
        <React.Fragment>
            <Text style={Padrao.txtG}>{props.titulo}</Text>
            <Text>{props.subTitulo}</Text>
        </React.Fragment>
)