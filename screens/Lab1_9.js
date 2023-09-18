import { StyleSheet, TouchableOpacity, Vibration, View } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Text, TextInput } from 'react-native-paper';


const ButtonCustom = (props) => (
    <TouchableOpacity
        onPress={props.onPress}
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.bgcButton,
            ...props.style,
        }}
    >
        <Text style={{ color: props.textColor, fontSize: props.textSize }}>{props.text}</Text>
    </TouchableOpacity>
)




export default function Lab1_9({ navigation }) {

    const [darkMode, setDarkMode] = useState(false)
    const [currentNumber, setCurrentNumber] = useState('')
    const [lastNumber, setLastNumber] = useState('')
    const styles = getStyles(darkMode)
    const textDarkLight = darkMode ? '#FFFFFF' : '#4B534B'

    const handleInput = (props) => {
        if (props === '+' || props === '-' || props === '*' || props === '/') {
            Vibration.vibrate(35)
            setCurrentNumber(currentNumber + props)
        } else if (props === 1 || props === 2 || props === 3 || props === 4 || props === 5 || props === 6 || props === 7 || props === 8 || props === 9) {
            Vibration.vibrate(35)
            setCurrentNumber(currentNumber + props)
        }
        switch (props) {
            case 'DEL':
                Vibration.vibrate(35)
                setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
                return
            case 'C':
                Vibration.vibrate(35)
                setLastNumber('')
                setCurrentNumber('')
                return
            case '=':
                Vibration.vibrate(35)
                setLastNumber(currentNumber + '=')
                calulator()
                return


        }

        function calulator() {
            let lastArr = currentNumber[currentNumber.length - 1]
            if (lastArr === '/' || lastArr === '*' || lastArr === '/' || lastArr === '+' || lastArr === '+') {
                setCurrentNumber(currentNumber)
                return
            } else {
                let result = eval(currentNumber).toString()
                setCurrentNumber(result)
                return
            }
        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.results}>
                <TouchableOpacity style={styles.themeButton}
                    color={darkMode ? 'white' : 'black'}
                    onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)}>
                    <Entypo
                        name={darkMode ? 'light-up' : 'moon'}
                        size={24}
                    />
                </TouchableOpacity>
                <Text style={styles.historyText}>{lastNumber}</Text>
                <Text style={styles.resultText}>{currentNumber}</Text>
            </View>

            <View style={styles.buttons}>

                <View style={styles.buttonLeft}>
                    <View style={styles.buttonLTop}>
                        <ButtonCustom text='C' textColor='#4B534B' textSize={24} bgcButton='#E1E1E2' onPress={() => handleInput('C')} />
                        <ButtonCustom text='DEL' textColor='#4B534B' textSize={24} bgcButton='#E1E1E2' onPress={() => handleInput('DEL')} />
                    </View>
                    <View style={styles.buttonLTop}>
                        <ButtonCustom text='1' textColor={textDarkLight} textSize={24} onPress={() => handleInput(1)} />
                        <ButtonCustom text='2' textColor={textDarkLight} textSize={24} onPress={() => handleInput(2)} />
                        <ButtonCustom text='3' textColor={textDarkLight} textSize={24} onPress={() => handleInput(3)} />
                    </View>
                    <View style={styles.buttonLTop}>
                        <ButtonCustom text='4' textColor={textDarkLight} textSize={24} onPress={() => handleInput(4)} />
                        <ButtonCustom text='5' textColor={textDarkLight} textSize={24} onPress={() => handleInput(5)} />
                        <ButtonCustom text='6' textColor={textDarkLight} textSize={24} onPress={() => handleInput(6)} />
                    </View>
                    <View style={styles.buttonLTop}>
                        <ButtonCustom text='7' textColor={textDarkLight} textSize={24} onPress={() => handleInput(7)} />
                        <ButtonCustom text='8' textColor={textDarkLight} textSize={24} onPress={() => handleInput(8)} />
                        <ButtonCustom text='9' textColor={textDarkLight} textSize={24} onPress={() => handleInput(9)} />
                    </View>
                    <View style={styles.buttonLTop}>
                        <ButtonCustom text='0' textColor={textDarkLight} textSize={24} onPress={() => handleInput(0)} />
                        <ButtonCustom text='.' textColor={textDarkLight} textSize={24} onPress={() => handleInput('.')} />
                    </View>

                </View>

                <View style={styles.buttonRight}>
                    <ButtonCustom text='+' textColor='white' textSize={24} onPress={() => handleInput('+')} />
                    <ButtonCustom text='-' textColor='white' textSize={24} onPress={() => handleInput('-')} />
                    <ButtonCustom text='*' textColor='white' textSize={24} onPress={() => handleInput('*')} />
                    <ButtonCustom text='/' textColor='white' textSize={24} onPress={() => handleInput('/')} />
                    <ButtonCustom text='=' textColor='white' textSize={24} onPress={() => handleInput('=')} />
                </View>


            </View>
        </View>
    )
}





const getStyles = (darkMode) => StyleSheet.create({

    container: {
        flex: 1,
    },
    results: {
        backgroundColor: darkMode ? '#282f3b' : 'white',
        mawWidth: '100%',
        minHeight: '35%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    resultText: {
        maxHeight: 45,
        color: '#00b9d6',
        margin: 15,
        fontSize: 35,
    },
    historyText: {
        color: darkMode ? '#B5B7BB' : '#7c7c7c',
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-end',
    },
    themeButton: {
        alignSelf: 'flex-start',
        bottom: '5%',
        margin: 15,
        backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',

    },
    buttonLeft: {
        flex: 3,
        backgroundColor: darkMode ? '#282f3b' : 'white',
    },
    buttonLTop: {
        flexDirection: 'row',
        flex: 1,
    },
    buttonRight: {
        flex: 1,
        backgroundColor: 'blue',
    },



})
