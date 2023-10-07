import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchContacts } from '../utility/api';
import ContactThumbnail from '../components/ContactThumbnail';
import { ActivityIndicator } from 'react-native-paper';


const keyExtractor = ({ phone }) => phone;
const FavoriteScreen = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);

    useEffect(() => {
        fetchContacts()
            .then(
                contacts => {
                    setContacts(contacts);
                    setLoading(false);
                    setErr(false);
                }
            )
            .catch(err => {
                console.log(err);
                setLoading(false);
                setContacts(false);
                setErr(true);
            })

    }, []);

    const renderFavoriteThumbnail = ({ item }) => {
        const { avatar } = item;
        return (
            <ContactThumbnail avatar={avatar}
                onPress={() => navigation.navigate("Profile", { contact: item })} />
        );
    };

    const favorites = contacts.filter(contact => contact.favorite);

    return (
        <SafeAreaView style={styles.container}>
            {loading && <ActivityIndicator color='blue' size="large" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />}
            {err && <Text>Error...</Text>}
            {!loading && !err && (
                <FlatList
                    data={favorites}
                    keyExtractor={keyExtractor}
                    numColumns={3}
                    renderItem={renderFavoriteThumbnail}
                    contentContainerStyle={{ alignItems: 'center' }}
                />
            )}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },

})


export default FavoriteScreen;