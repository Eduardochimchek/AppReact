import React from "react";
import {Text, StyleSheet, Image} from 'react-native';

const res = 2 + 2;
const ComponentsScreen = () => {

    const vetorDeInteiros = [1, 2, 3, 4, 5];

    return (<Text style={styles.textMain}>
                <Text style={styles.textStyle}>Bem-Vindo ao Meu App!</Text>
                {'\n'}
                {'\n'}
                {'\n'}
                <Text style={styles.subtextStyle}>Esse app é pra dizer que 2+2 pode ser igual a {res} (as vezes não é)!</Text>
                {'\n'}
                {'\n'}
                {'\n'}
                <Text style={styles.subtextStyle}>Vetor de inteiros:</Text>
                <Text style={styles.subtextStyle}> {vetorDeInteiros.join(', ')}</Text>
                {'\n'}
                <Image source={require('../images/imagem1.jpg')} style={{ width: 400, height: 200 }} ></Image>
            </Text>)
}

const styles = StyleSheet.create({
    // Nosso estilo
    textStyle : {
        fontSize: 30,
        fontWeight: 'bold',
        width: '100%'
    },
    subtextStyle : {
        fontSize: 20,
        fontWeight: '600',
        width: '100%'
    },
    textMain : {
        backgroundColor : 'white',
        height: '100%',
        padding : 12,
        color: 'black',
    },
    img : {
        width: '200', height: '200'
    }
});

export default ComponentsScreen;