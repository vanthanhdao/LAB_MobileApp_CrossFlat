import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, SafeAreaView, SectionList } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';




const Square = ({ text, bgColor = "green" }) => (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
        <Text>{text}</Text>
    </View>
)

export default function Lab1_5({ navigation }) {


    return (
        <View style={styles.container}>



            <Square text="Square 1" />
            <Square text="Square 2" bgColor='red' />
            <Square text="Square 3" bgColor='aqua' />
            <Button onPress={() => navigation.navigate("Lab1_6")}>Next</Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

    },


})