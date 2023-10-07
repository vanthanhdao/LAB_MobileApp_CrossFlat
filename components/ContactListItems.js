import { Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'
import colors from '../utility/color';
import PropTypes from 'prop-types';


const ContactListItems = ({ name, avatar, phone, onPress }) => {
    return (
        <TouchableHighlight
            underlayColor={colors.grey}
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.contacInfo}>
                <Image style={styles.avatar} source={{ uri: avatar }} />
                <View style={styles.details}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{phone}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

ContactListItems.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    contacInfo: {
        flexDirection: 'row',
        borderBottomColor: colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    details: {
        justifyContent: 'center',
        paddingLeft: 10,
    },
    title: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitle: {
        color: colors.blue,
        fontSize: 15,
        marginTop: 4,
    }
})

export default ContactListItems;