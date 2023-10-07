import React from 'react'
import { StyleSheet, View } from 'react-native'
import DetialListItem from '../components/DetailListItem';

const OptionScreen = () => {
    return (
        <View style={styles.container}>
            <DetialListItem title="Update Profile" />
            <DetialListItem title="Change Language" />
            <DetialListItem title="Sign Out" />
        </View>
    )
}

export default OptionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})