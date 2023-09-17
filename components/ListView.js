

import { View, Text, TouchableOpacity, ScrollView, Button, Modal, TextInput, Alert, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import ButtonCustom from './ButtonCustom';



export default function ListView() {

    const [visiableEditModal, setVisiableEditModal] = useState(false);
    const [visiableMessegeModal, setVisiableMessegeModal] = useState(false);
    const [visiableModal, setVisiableModal] = useState(false)
    const [visiableMenuModal, setVisiableMenuModal] = useState(false)
    const [name, setName] = useState({})
    const [indexName, setIndex] = useState(0)
    const [state, setState] = useState({
        names: [
            {
                id: 0,
                name: 'Ben',
            },
            {
                id: 1,
                name: 'Susan',
            },
            {
                id: 2,
                name: 'Robert',
            },
            {
                id: 3,
                name: 'Mary',
            }
        ]
    })
    const handleDeleteList = (value, index) => {
        let taskListTmp = { ...state }
        taskListTmp.names.splice(index, 1)
        setState(taskListTmp)
        setVisiableMenuModal(false)
        setVisiableMessegeModal(false)
    }
    const handleEditList = (value, index) => {
        let taskListTmp = { ...state }
        taskListTmp.names[index].name = value
        setState(taskListTmp)
        setVisiableEditModal(false)
    }


    return (


        <View style={styles.container}>
            {/* Modal nhap input cho list view */}
            <View >
                <Modal
                    transparent={true}
                    visible={visiableModal} >
                    <View

                        style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Please enter your name!</Text>
                            <TextInput
                                onChangeText={(text) => setName(text)}
                                style={styles.modalTextInput} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'stretch' }} >
                                <Button
                                    onPress={() => setVisiableModal(false)}
                                    title='CLOSE' />
                                <Button
                                    onPress={() => {
                                        if (name === '') {
                                            alert('Please enter your name!')
                                            return false
                                        } else {
                                            const newId = state.names.length > 0 ? state.names[state.names.length - 1].id + 1 : 0;
                                            const newName = {
                                                id: newId,
                                                name: name,
                                            };

                                            setState(prevState => ({
                                                ...prevState,
                                                names: [...prevState.names, newName]
                                            }));

                                            setVisiableModal(false)
                                        }
                                    }
                                    }

                                    title='SUBMIT' />
                            </View>
                        </View>



                    </View>
                </Modal>
            </View >
            {/* Modal hien thi menu them, xoa sua */}
            <View >
                <Modal
                    transparent={true}
                    visible={visiableMenuModal}
                >
                    <View
                        style={styles.menuView}>
                        <View style={styles.menuModalView}>
                            <TouchableOpacity onPress={() => {
                                setVisiableMenuModal(false)
                                setVisiableMessegeModal(!visiableMessegeModal)
                            }} >
                                <Text style={styles.textMenuModal}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setVisiableMenuModal(false)
                                setVisiableEditModal(!visiableEditModal)
                            }}>
                                <Text style={styles.textMenuModal}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setVisiableMenuModal(false)}>
                                <Text
                                    style={styles.textMenuModal}>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </Modal>
            </View >
            {/* Modal hien thi thong bao co muon xoa */}
            <View>
                <Modal
                    transparent={true}
                    visible={visiableMessegeModal}
                    onRequestClose={() => {
                        setVisiableMessegeModal(!visiableMessegeModal);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={[styles.modalText, { fontSize: 20, color: 'red' }]}>Messege</Text>
                            <Text style={styles.modalTextInput} >Do you want to delete {name.name} !</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'stretch' }}  >
                                <Button
                                    onPress={() => setVisiableMessegeModal(false)}
                                    title='CLOSE' />
                                <Button
                                    onPress={() => handleDeleteList(name, indexName)}
                                    title='OK' />
                            </View>

                        </View>
                    </View>
                </Modal>

            </View >
            {/* Modal edit lai ten trong list view */}
            <View >
                <Modal
                    transparent={true}
                    visible={visiableEditModal} >
                    <View

                        style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Please enter your name!</Text>
                            <TextInput
                                onChangeText={(text) => setName(text)}
                                style={styles.modalTextInput} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'stretch' }} >
                                <Button
                                    onPress={() => setVisiableEditModal(false)}
                                    title='CLOSE' />
                                <Button
                                    onPress={() => handleEditList(name, indexName)}
                                    title='SAVE' />
                            </View>
                        </View>



                    </View>
                </Modal>
            </View >


            <View style={styles.header}>
                <Text style={styles.title} >DEMO LISTVIEW</Text>
            </View>
            <View style={styles.body}>
                <ScrollView>
                    {
                        state.names.map((value, index) => (
                            <TouchableOpacity
                                style={styles.item}
                                key={index}
                                onPress={() => {
                                    setName(value)
                                    setIndex(index)
                                    setVisiableMenuModal(true)
                                }} >
                                <Text style={styles.text} >{value.name}</Text>
                            </TouchableOpacity>



                        ))

                    }
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() => setVisiableModal(true)}
                >
                    <ButtonCustom />
                </TouchableOpacity>

            </View>
        </View >



    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 3,
    },
    footer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '70%',
        height: '44%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        textAlign: 'center',
    },
    modalTextInput: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    item: {
        margin: 10,

    },
    text: {
        color: '#4f603c',
        width: 300,
        height: 40,
        backgroundColor: 'white',
        textAlign: 'center',
        paddingTop: 10
    },
    menuView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    menuModalView: {
        width: '95%',
        height: '30%',
        backgroundColor: 'white',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textMenuModal: {
        fontSize: 20,
    }

})