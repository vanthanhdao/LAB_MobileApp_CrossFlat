import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';


export default function Lab1_1({ navigation }) {

    return (
        <View style={styles.container}>

            <View style={styles.lab01_1}>
                <Text style={styles.text}>Hello World</Text>
                <Button onPress={() => navigation.navigate("Lab1_2")}>Next</Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black'
    },
    lab01_1: {
        width: 100,
        height: 100,
        backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
