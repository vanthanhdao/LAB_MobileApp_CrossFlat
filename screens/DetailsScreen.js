import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

export default function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Text>DetailsScreen</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})