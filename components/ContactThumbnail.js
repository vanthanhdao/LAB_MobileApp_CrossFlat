import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactThumbnail = ({ name, phone, avatar, textColor, onPress }) => {

    // const colorStyle = { color: textColor }
    const ImageComponent = onPress ? TouchableOpacity : View

    return (
        <View style={styles.container}>
            <ImageComponent onPress={onPress}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
            </ImageComponent>
            {name !== '' && <Text style={[styles.name]}>{name}</Text>}
            {phone !== '' && (
                <View style={styles.phoneSection}>
                    <Icon name="phone" size={16} />
                    <Text style={[styles.phone]}>{phone}</Text>
                </View>
            )}
        </View>
    )
}

ContactThumbnail.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
}

ContactThumbnail.defaultProps = {
    name: '',
    phone: '',
    textColor: '',
    onPress: null,
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,
    },
    name: {
        fontSize: 20,
        margin: 20,
        fontWeight: 'bold',
    },
    phoneSection: {
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    phone: {
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
    }

})

export default ContactThumbnail