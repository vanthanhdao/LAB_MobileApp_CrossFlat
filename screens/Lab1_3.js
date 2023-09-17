import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, SafeAreaView, SectionList } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';


const ButtonCustom = (props) => (
    <TouchableOpacity
        onPress={props.onPress}
        style={{
            backgroundColor: 'red',
            alignSelf: 'center',
            padding: 10,
            margin: 10,
            ...props.buttonStyle,
        }}
    >
        <Text style={{ color: '#fff' }}>{props.text}</Text>
    </TouchableOpacity>
)


export default function Lab1_3({ navigation }) {

    return (
        <View style={styles.container}>

            <ButtonCustom text='Demo' onPress={() => alert("Hello")} />
            <ButtonCustom text='Demo 1' onPress={() => alert("Hello 1")} buttonStyle={{ backgroundColor: 'yellow' }} />
            <Button onPress={() => navigation.navigate("Lab1_4")}>Next</Button>

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

})