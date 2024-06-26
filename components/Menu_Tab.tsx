import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { menu_main_dark, menu_main_white, menu_new_event_dark, menu_new_event_white, menu_search_dark, menu_search_white, menu_ticket_dark, menu_ticket_white, menu_profile_dark, menu_profile_white } from './constants';
const Menu_Tab: React.FC<{ navigation: any, page: string }> = ({ navigation, page }) => {

    const main_image_url = (page: string): string => {

        return page === 'main' ? require('../assests/img/menu_main_dark.png') : require('../assests/img/menu_main_white.png');

    };
    const new_event_image_url = (page: string): string => {

        return page === 'new_event' ? require('../assests/img/menu_discover_dark.png') : require('../assests/img/menu_discover_white.png');

    }
    const search_image_url = (page: string): string => {

        return page === 'searchscreen' ? require('../assests/img/menu_search_dark.png') : require('../assests/img/menu_search_white.png');

    }
    const ticket_image_url = (page: string): string => {

        return page === 'tickets' ? require('../assests/img/menu_ticket_dark.png') : require('../assests/img/menu_ticket_white.png');

    }
    const profile_image_url = (page: string): string => {

        return page === 'profile' ? require('../assests/img/menu_profile_dark.png') : require('../assests/img/menu_profile_white.png');

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Image style={styles.menu_icon} source={main_image_url(page)}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('New_Event')}>
                <Image style={styles.menu_icon}  source={new_event_image_url(page)}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Image style={styles.menu_icon}  source={search_image_url(page)}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tickets')}>
                <Image style={styles.menu_icon}  source={ticket_image_url(page)}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image style={styles.menu_icon}  source={profile_image_url(page)}></Image>
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
        backgroundColor: '#e2fc49',
        alignItems: 'center'
    },
    menu_icon: {
        width: 20,
        height: 20
    }
})
export default Menu_Tab