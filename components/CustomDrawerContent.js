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
                    label="Contact"
                    active={active === "Contact"}
                    onPress={() => {
                        setActive("Contact")
                        navigation.navigate("Contact")
                    }}
                />

                <Drawer.Item
                    icon="heart"
                    label="Favorite"
                    active={active === "Favorite"}
                    onPress={() => {
                        setActive("Favorite")
                        navigation.navigate("Favorite")
                    }}
                />

                <Drawer.Item
                    icon="account"
                    label="Account"
                    active={active === "Account"}
                    onPress={() => {
                        setActive("Account")
                        navigation.navigate("Account")
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