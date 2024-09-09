import { Dimensions, StyleSheet, Text, TextInput, Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '@/components/ThemedText'
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Link } from 'expo-router';
import SearchBar from '@/components/SearchBar';
import AddButton from '@/components/addButton';


const index = () => {

    const [textInput,setTextInput] = useState<string>("Naoti");
    const [searchText, setSearchText] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconHeader}>
                    <Image style={styles.icon} source={require('../assets/icons/Menu.png')}></Image>
                    <Image style={styles.icon} source={require('../assets/images/ISPM.png')}></Image>
                </View>
                <View>
                    <SearchBar placeholder="Mitady naoty"
                        onChangeText={setSearchText}
                        value={searchText}>
                    </SearchBar>
                </View>
            </View>

            <View style={styles.body}>
                <Image source={require('../assets/images/illustration.png')}></Image>
                <View style={styles.titre}>
                    <Text style={styles.title}>Tongasoa ianao !</Text>
                    <Text style={styles.subtitle}>"Raiso ny hevitrao, alamino ny eritreritrao ary mijanona ho mamorona mora foana."</Text>
                </View>
            </View>
            
            <View style={styles.footer}>
                <AddButton></AddButton>
            </View>

        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: "center",
        backgroundColor : '#fff',
        paddingHorizontal: 15
    },
    header :{
        flex: 1,
    },
    body :{
        flex: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center"
    },
    icon: {
        width : 30,
        height : 32
    },
    iconHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: "center"
    },
    subtitle: {
        fontSize: 18,
        textAlign: "center"
    },
})