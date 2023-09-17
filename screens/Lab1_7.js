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



export default function Lab1_7({ navigation }) {


    const [fullName, setFullName] = useState('')

    return (
        <View style={styles.container}>


            <View>
                <TextInput style={{ borderWidth: 1, borderRadius: 10, padding: 10, }} onChangeText={(text) => setFullName(text)} placeholder='Please enter your fullname' value={fullName} />
                <ButtonCustom text="Submit" onPress={() => alert(fullName)} />
                <Button onPress={() => navigation.navigate("Lab1_8")}>Next</Button>
            </View>

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
    text: {
        fontSize: 20,
        color: 'black'
    },
    lab01_1: {
        width: 100,
        height: 100,
        backgroundColor: 'aqua',
    },


})