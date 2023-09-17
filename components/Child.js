import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Child(props) {


    const data = 'This is a child'


    return (
        <View>
            <Text onPress={() => props.onDemo(data)}>Child {props.onData} </Text>
        </View>
    )
}

