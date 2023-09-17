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


export default function Lab1_4({ navigation }) {

    const [pressCount, setPressCount] = useState(0)


    return (
        <View style={styles.container}>


            <Text>You've pressed the button: {pressCount} time (s) </Text>
            <ButtonCustom
                text='Press'
                onPress={() => setPressCount(pressCount + 1)}
            />
            <Button onPress={() => navigation.navigate("Lab1_5")}>Next</Button>

            {/* <Square text="Square 1" />
            <Square text="Square 2" bgColor='red' />
            <Square text="Square 3" bgColor='aqua' /> */}


            {/* <ScrollView>
                {data.map((item, index) => (<Square key={item} text={`Square ${index + 1}`} />))}
            </ScrollView> */}

            {/* <View>
                <TextInput style={{ borderWidth: 1, borderRadius: 10, padding: 10, }} onChangeText={(text) => setFullName(text)} placeholder='Please enter your fullname' value={fullName} />
                <ButtonCustom text="Submit" onPress={() => alert(fullName)} />
            </View> */}


            {/* <SafeAreaView>
                <SectionList
                    sections={groupPeopleByLastName(PEOPLE)}
                    keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
                    renderSectionHeader={({ section }) => {
                        return (
                            <View style={styles.sectionHeader}>
                                <Text>{section.title}</Text>
                            </View>
                        );
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.row}>
                                <Text style={styles.name}>
                                    {item.name.first} {item.name.last}
                                </Text>
                            </View>
                        );
                    }}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </SafeAreaView> */}

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