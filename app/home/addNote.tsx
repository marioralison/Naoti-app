import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';

export default function addNote({onSave}) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSave = () => {
        if (title.trim() && content.trim()) {
            onSave({ title, content });
            setTitle('');
            setContent('');
        } else {
            alert('Veuillez entrer un titre et une note.');
        }
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconHeader}>
                    <Link href={"index"}>
                        <Image style={styles.icon} source={require("../../assets/icons/Back.png")}></Image>
                    </Link>
                    <Image style={styles.icon} source={require("../../assets/icons/Done.png")}></Image>                   
                </View>
            </View>

            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    placeholder="Lohateny naoty"
                    value={title}
                    onChangeText={setTitle}/>
            
                <TextInput 
                    style={styles.textArea}
                    placeholder="Ampidiro eto ny naoty"
                    value={content}
                    onChangeText={setContent}
                    multiline
                    numberOfLines={4}/>
            </View>
        </SafeAreaView>
    )
}

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
        flex: 8,
        justifyContent: "center",
        alignItems: "center",
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
    input: {
        flex: 1,
        height: 40,
        width: "100%",
        paddingHorizontal: 10,
        marginBottom: 12,
        fontSize: 24,
        fontWeight: "600"
    },
    textArea: {
        flex: 9,
        height: 100,
        width: "100%",
        marginTop: 20,
        paddingHorizontal: 10,
        marginBottom: 12,
        textAlignVertical: 'top', // Pour le texte aligné en haut
        fontSize: 18
    }
})
