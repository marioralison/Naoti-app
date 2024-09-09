// components/SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Pour les icônes

const SearchBar = ({ placeholder, onChangeText, value }) => {
    return (
        <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#000" style={styles.searchIcon} />
        <TextInput
            style={styles.searchBar}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
        />
        </View>
    );
    };

    const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 15,
        backgroundColor: '#E0DBF5',
    },
    searchIcon: {
        paddingHorizontal: 8,
    },
    searchBar: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
});

export default SearchBar;
