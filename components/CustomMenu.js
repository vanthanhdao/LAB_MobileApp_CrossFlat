import { Appbar, Menu } from 'react-native-paper';

function CustomMenu({ isVisible, onDismiss }) {
    return (
        <Menu
            visible={isVisible}
            onDismiss={onDismiss}
            anchor={
                <Appbar.Action icon="menu" color="white" onPress={() => setMenuVisible(true)} />
            }>
            <Menu.Item onPress={() => { }} title="Item 1" />
            <Menu.Item onPress={() => { }} title="Item 2" />
            <Menu.Item onPress={() => { }} title="Item 3" />
        </Menu>
    );
}

export default CustomMenu