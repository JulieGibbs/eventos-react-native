import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { menu_main_dark, menu_main_white, menu_New_Event_dark, menu_New_Event_white, menu_search_dark, menu_search_white, menu_ticket_dark, menu_ticket_white, menu_profile_dark, menu_profile_white } from './constants';
const Menu_Tab: React.FC<{ navigation: any, page: string }> = ({ navigation, page }) => {

    const main_image_url = (page: string):string=> {

        return page==='main'?menu_main_dark:menu_main_white

    };
    const New_Event_image_url = (page: string):string=> {

        return page==='New_Event'?menu_New_Event_dark:menu_New_Event_white

    }
    const search_image_url = (page: string):string=> {

        return page==='searchscreen'?menu_search_dark:menu_search_white

    }
    const ticket_image_url = (page: string):string=> {

        return page==='tickets'?menu_ticket_dark:menu_ticket_white

    }
    const profile_image_url = (page: string):string=> {

        return page==='profile'?menu_profile_dark:menu_profile_white

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Image style={styles.menu_icon} source={{uri:main_image_url(page)}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('New_Event')}>
                <Image style={styles.menu_icon} source={{uri:New_Event_image_url(page)}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Image style={styles.menu_icon} source={{uri:search_image_url(page)}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tickets')}>
                <Image style={styles.menu_icon} source={{uri:ticket_image_url(page)}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image style={styles.menu_icon} source={{uri:profile_image_url(page)}}></Image>
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