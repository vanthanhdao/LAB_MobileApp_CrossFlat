import { StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({


    container: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'aqua',
    },
    ImageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ViewChild: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    Image: {
        width: 200,
        height: 130,


    }

    // redbox: {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: 'red'
    // },
    // bluebox: {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: 'blue'
    // },
    // blackbox: {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: 'black'
    // },
})

export default styles