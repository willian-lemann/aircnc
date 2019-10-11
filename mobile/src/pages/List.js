import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, AsyncStorage, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';

import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';

export default function List({ navigation }) {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        })
    }, []);

    function handleBack() {
        navigation.navigate('Login');
    }
    return (
        <SafeAreaView style={styles.container}>

            <Image style={styles.logo} source={logo} />

            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>

            <TouchableOpacity onPress={handleBack} style={styles.buttonVoltar}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 30,
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10
    },

    buttonVoltar: {
        margin: 30,
        marginTop: 30,
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },


});