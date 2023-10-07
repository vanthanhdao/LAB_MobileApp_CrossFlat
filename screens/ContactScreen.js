import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchContacts } from '../utility/api';
import { ActivityIndicator } from 'react-native-paper';
import ContactListItems from '../components/ContactListItems';

const keyExtractor = ({ phone }) => phone;
export default function ContactScreen({ navigation }) {

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

    const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));
    const renderContct = ({ item }) => {
        const { name, avatar, phone } = item;
        return <ContactListItems
            name={name}
            avatar={avatar}
            phone={phone}
            onPress={() => navigation.navigate("Profile", { contact: item })}

        />
    }

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator color='blue' size="large" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />}
            {err && <Text>Error...</Text>}
            {!loading && !err && (
                <FlatList
                    data={contactsSorted}
                    keyExtractor={keyExtractor}
                    renderItem={renderContct}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center ',
    }
})