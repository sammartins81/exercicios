import React from 'react'
import { Button } from 'react-native';

export default props => {

    function executar(){
        console.warn('Botão acionado!')
    }
    
    return (
    <Button
    title="Executar"
    onPress={executar}
    />
    )
}