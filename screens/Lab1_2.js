import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, SafeAreaView, SectionList } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';


export default function Lab1_2({ navigation }) {



    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => alert("This is a Alert!")}>
                    <Text>This is a Alert!</Text>
                </TouchableOpacity>
                <Button onPress={() => navigation.navigate("Lab1_3")}>Next</Button>
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

})