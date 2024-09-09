// components/AddButton.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const AddButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image
                source={require('../assets/icons/add.png')} // Chemin vers l'image de l'icône
                style={styles.icon}
            />
        </TouchableOpacity>
    );
    };

    const styles = StyleSheet.create({
    button: {
        width : 60,
        height : 60,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007BFF', // Couleur de fond du bouton
        borderRadius: 50, // Arrondir les coins du bouton
    },
    icon: {
        width: 24, // Taille de l'icône
        height: 24, // Taille de l'icône
    },
});

export default AddButton;
