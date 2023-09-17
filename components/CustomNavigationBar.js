
import { useState } from 'react'
import { Appbar, Menu } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';




const CustomNavigationBar = ({ navigation, route, options, back }) => {


    const [visiable, setVisiable] = useState(false);
    const openMenu = () => setVisiable(true);
    const closeMenu = () => setVisiable(false);
    const title = getHeaderTitle(options, route.name)

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title} />
            {!back ? (
                <Menu
                    visible={visiable}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action
                            icon="dots-vertical"
                            onPress={openMenu} />
                    }>
                    <Menu.Item onPress={() => alert("Option 1")} title="Option 1" />
                    <Menu.Item onPress={() => alert("Option 2")} title="Option 2" />
                    <Menu.Item onPress={() => alert("Option 3")} title="Option 3" />
                </Menu>

            ) : null}
        </Appbar.Header>
    )

}

export default CustomNavigationBar