import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Drawer } from 'react-native-paper'



export default function CustomDrawerContent({ navigation }) {
    const [active, setActive] = useState("")
    return (
        <View style={styles.container}>
            <Drawer.Section title='Menu'>
                <Drawer.Item
                    icon="home"
                    label="Home"
                    active={active === "home"}
                    onPress={() => {
                        setActive("home")
                        navigation.navigate("Home")
                    }}
                />

                <Drawer.Item
                    icon="star"
                    label="Detail"
                    active={active === "detail"}
                    onPress={() => {
                        setActive("detail")
                        navigation.navigate("Detail")
                    }}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    }
})