import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../utility/color'
import ContactThumbnail from '../components/ContactThumbnail'
import DetailListItem from '../components/DetailListItem'

const ProfileScreen = ({ route }) => {
    // const [contact, setContact] = useState([])
    // useEffect(() => {
    //     fetchRandomContact()
    //         .then(contact => setContact(contact))
    // }, []);
    const { contact } = route.params;
    const { avatar, name, email, phone, cell } = contact;
    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThumbnail avatar={avatar} name={name} phone={phone} />
            </View>
            <View style={styles.detailSection}>
                <DetailListItem icon='mail' title='Email' subtitle={email} />
                <DetailListItem icon='phone' title='Work' subtitle={phone} />
                <DetailListItem icon='smartphone' title='Personal' subtitle={cell} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
    detailSection: {
        flex: 1,
        backgroundColor: 'white',
    }
})


export default ProfileScreen;