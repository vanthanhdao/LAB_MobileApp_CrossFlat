import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, SafeAreaView, SectionList } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';




const PEOPLE = [
    {
        name: {
            title: "Ms",
            first: "Meava",
            last: "Scott",
        },
    },
    {
        name: {
            title: "Ms",
            first: "Maelle",
            last: "Henry",
        },
    },
    {
        name: {
            title: "Mr",
            first: "Mohamoud",
            last: "Faaij",
        },
    },
    {
        name: {
            title: "Ms",
            first: "Maqweelle",
            last: "Hydra",
        },
    },
]

const groupPeopleByLastName = (_data) => {
    const data = [..._data];
    const groupedData = data.reduce((accumulator, item) => {
        const group = item.name.last[0].toUpperCase();
        if (accumulator[group]) {
            accumulator[group].data.push(item);
        } else {
            accumulator[group] = {
                title: group,
                data: [item],
            };
        }
        return accumulator;
    }, {});

    const sections = Object.keys(groupedData).map((key) => {
        return groupedData[key];
    });

    return sections.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        return -1;
    });
};

export default function Lab1_8({ navigation }) {


    return (
        <View style={styles.container}>
            <SafeAreaView>
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
                <Button onPress={() => navigation.navigate("Lab1_9")}>Next</Button>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    row: { paddingHorizontal: 10, paddingVertical: 10, },
    name: { fontSize: 16, },
    separator: { backgroundColor: "rgba(0, 0, 0, 0.5)", height: 1, },
    sectionHeader: { paddingHorizontal: 10, paddingVertical: 10, backgroundColor: "rgb(170, 170, 170))", },


})