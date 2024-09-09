import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function astuce() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.icon} source={require("../../assets/icons/Back.png")}></Image>
            </View> 
            <View style={styles.astuce}>
                <Text style={styles.titre}>Torohevitra</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.contenu}>
                    <Text style={styles.subtitle}>Famoronana naoty</Text>
                    <Text style={styles.paragraphe}>Ampiasao ny bokotra "+" eo amin'ny efijery an-trano mba hamoronana naoty vaovao haingana. Afaka manampy lahatsoratra ianao.</Text>
                </View>
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
        justifyContent: "center",
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor:'red'
    },
    astuce : {
        flex: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        borderColor: 'red',
        borderWidth: 1
    },
    body :{
        flex: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: 'red',
        borderWidth: 1
    },
    icon: {
        width : 30,
        height : 32
    },
    contenu: {

    },
    titre: {
        fontSize: 40,
        fontWeight: '600'
    },
    subtitle:{
        fontSize: 32,
        fontWeight: 400
    },
    paragraphe: {
        fontSize: 18
    }
})