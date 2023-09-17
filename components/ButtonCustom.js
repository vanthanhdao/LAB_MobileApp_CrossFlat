import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import EvilIcons from '@expo/vector-icons/EvilIcons'

export default function ButtonCustom() {
    return (
        <View style={styles.backgroungButton}>
            <FontAwesome name='plus' size={20} />

        </View>
    )
}


const styles = StyleSheet.create({
    backgroungButton: {
        margin: 10,
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})