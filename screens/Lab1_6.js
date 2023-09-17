import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, SafeAreaView, SectionList } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Square = ({ text, bgColor = "green" }) => (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
        <Text>{text}</Text>
    </View>
)

export default function Lab1_6({ navigation }) {


    return (
        <View style={styles.container}>
            <ScrollView>
                {data.map((item, index) => (<Square key={item} text={`Square ${index + 1}`} />))}
            </ScrollView>
            <Button onPress={() => navigation.navigate("Lab1_7")}>Next</Button>
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