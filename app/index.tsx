import { Dimensions, StyleSheet, Text, Image, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '@/components/SearchBar';
import AddButton from '@/components/addButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const { height : heightMain} = Dimensions.get("window");    


const index = () => {

    const [textInput,setTextInput] = useState<string>("Naoti");
    const [searchText, setSearchText] = useState('');
    const [headerHeight, setHeaderHeight] = useState(0);
    const navigation = useNavigation();
    const openMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer())
    }

    return (
            <SafeAreaView style={{
                height : heightMain ,
                justifyContent: "center",
                backgroundColor : '#fff',
                paddingHorizontal: 15
            }}>
                <View style={styles.header}>
                    <View style={styles.iconHeader}>
                        <TouchableOpacity onPress={openMenu}>
                            <Image style={styles.icon} source={require('../assets/icons/Menu.png')}></Image>
                        </TouchableOpacity>
                        <Image style={styles.icon} source={require('../assets/images/ISPM.png')}></Image>
                    </View>
                
                        <KeyboardAvoidingView style={{flex : 1 }} behavior='padding' enabled={false}>
                            <View>
                                <SearchBar placeholder="Mitady naoty"
                                    onChangeText={setSearchText}
                                    value={searchText}>
                                </SearchBar>
                            </View>
                        </KeyboardAvoidingView>
                </View>

                <View style={styles.body}>
                    <Image source={require('../assets/images/illustration.png')}></Image>
                    <View >
                        <Text style={styles.title}>Tongasoa ianao !</Text>
                        <Text style={styles.subtitle}>"Raiso ny hevitrao, alamino ny eritreritrao ary mijanona ho mamorona mora foana."</Text>
                    </View>
                </View>
                
                <View style={styles.footer}>
                    <AddButton onPress={undefined}></AddButton>
                </View>

            </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    header :{
        flex : 1
    },
    body :{
        flex : 6,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        flex : 1,
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