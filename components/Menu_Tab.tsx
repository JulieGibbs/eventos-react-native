import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Menu_Tab: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Image style={styles.menu_icon} source={require('../assests/img/menu_main_white.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
                <Image style={styles.menu_icon} source={require('../assests/img/menu_discover_white.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Image style={styles.menu_icon} source={require('../assests/img/menu_search_white.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tickets')}>
                <Image style={styles.menu_icon} source={require('../assests/img/menu_ticket_white.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image style={styles.menu_icon} source={require('../assests/img/menu_profile_white.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        backgroundColor: '#A3D977',
        alignItems: 'center'
    },
    menu_icon: {
        width: 20,
        height: 20
    }
})
export default Menu_Tab