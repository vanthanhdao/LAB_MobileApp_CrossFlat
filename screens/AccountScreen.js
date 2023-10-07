import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchUserContact } from '../utility/api';
import { ActivityIndicator } from 'react-native-paper';
import ContactThumbnail from '../components/ContactThumbnail';






export default function AccountScreen() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);

    useEffect(() => {
        fetchUserContact()
            .then(
                users => {
                    setUser(users);
                    setLoading(false);
                    setErr(false);
                }
            )
            .catch(err => {
                console.log(err);
                setLoading(false);
                setUser(false);
                setErr(true);
            })
    }, []);
    const { avatar, name, phone } = user;


    return (
        <View style={styles.container}>


            {loading && <ActivityIndicator color='blue' size="large" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />}
            {err && <Text>Error...</Text>}
            {!loading && !err && (
                <ContactThumbnail avatar={avatar} name={name} phone={phone} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua',
    }
})