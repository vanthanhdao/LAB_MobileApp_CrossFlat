import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, SafeAreaView, SectionList } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';


// const ButtonCustom = (props) => (
//     <TouchableOpacity
//         onPress={props.onPress}
//         style={{
//             backgroundColor: 'red',
//             alignSelf: 'center',
//             padding: 10,
//             margin: 10,
//             ...props.buttonStyle,
//         }}
//     >
//         <Text style={{ color: '#fff' }}>{props.text}</Text>
//     </TouchableOpacity>
// )

// const Square = ({ text, bgColor = "green" }) => (
//     <View style={[styles.box, { backgroundColor: bgColor }]}>
//         <Text>{text}</Text>
//     </View>
// )


// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const PEOPLE = [
//     {
//         name: {
//             title: "Ms",
//             first: "Meava",
//             last: "Scott",
//         },
//     },
//     {
//         name: {
//             title: "Ms",
//             first: "Maelle",
//             last: "Henry",
//         },
//     },
//     {
//         name: {
//             title: "Mr",
//             first: "Mohamoud",
//             last: "Faaij",
//         },
//     },
// ]

// const groupPeopleByLastName = (_data) => {
//     const data = [..._data];
//     const groupedData = data.reduce((accumulator, item) => {
//         const group = item.name.last[0].toUpperCase();
//         if (accumulator[group]) {
//             accumulator[group].data.push(item);
//         } else {
//             accumulator[group] = {
//                 title: group,
//                 data: [item],
//             };
//         }
//         return accumulator;
//     }, {});

//     const sections = Object.keys(groupedData).map((key) => {
//         return groupedData[key];
//     });

//     return sections.sort((a, b) => {
//         if (a.title > b.title) {
//             return 1;
//         }
//         return -1;
//     });
// };

export default function HomeScreen({ navigation }) {

    const [pressCount, setPressCount] = useState(0)
    const [fullName, setFullName] = useState('')

    return (
        <View style={styles.container}>

            <View style={styles.lab01_1}>
                <Text style={styles.text}>Hello World</Text>
            </View>

            {/* <Button
                mode='contained'qils')}
            >Home</Button> */}

            {/* <View>
                <TouchableOpacity
                    onPress={() => alert("This is a Alert!")}>
                    <Text>This is a Alert!</Text>
                </TouchableOpacity>
            </View> */}

            {/* <ButtonCustom text='Demo' onPress={() => alert("Hello")} />
            <ButtonCustom text='Demo 1' onPress={() => alert("Hello 1")} buttonStyle={{ backgroundColor: 'yellow' }} /> */}

            {/* <Text>You've pressed the button: {pressCount} time (s) </Text>
            <ButtonCustom
                text='Press'
                onPress={() => setPressCount(pressCount + 1)}
            /> */}

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
    box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

    },
    row: { paddingHorizontal: 10, paddingVertical: 10, },
    name: { fontSize: 16, },
    separator: { backgroundColor: "rgba(0, 0, 0, 0.5)", height: 1, },
    sectionHeader: { paddingHorizontal: 10, paddingVertical: 10, backgroundColor: "rgb(170, 170, 170))", },
})