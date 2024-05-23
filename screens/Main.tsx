import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';
import { RadialGradient } from 'react-native-gradients';
import More from '../components/More'
import Event_Tile from '../components/Event_Tile';
import Event_Item from '../components/Event_Item';
import Menu_Tab from '../components/Menu_Tab'
import { API_URL } from '../config';
const Main: React.FC<{ navigation: any }> = ({ navigation }) => {

    const [events, setEvents] = useState([])
    const getEvents = async () => {
        try {
            const response = await fetch(`${API_URL}/api/event/all`);
            const json = await response.json();
            setEvents(json);
            console.log('events', json)
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getEvents();
    }, [])
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return (
        <View style={styles.container}>

            <View style={styles.header_background}>
                <RadialGradient x="50%" y="30%" rx="80%" ry="70%" colorList={colorList} />
            </View>

            <View style={styles.header}>
                <View style={styles.header_left}>
                    <Image style={styles.avatar} source={require('../assests/img/avatar.png')}></Image>
                    <View style={styles.header_username}>
                        <Text style={styles.text_welcome}>Welcome Back!</Text>
                        <Text style={styles.text_name}>Patrick Sam</Text>
                    </View>
                </View>
                <View style={styles.header_right}>
                    <Image source={require('../assests/img/setting.png')} style={styles.header_icon}></Image>
                    <Image source={require('../assests/img/notification.png')} style={styles.header_icon}></Image>
                </View>
            </View>

            <View style={styles.tag_group}>
                <View style={[styles.tag, styles.tag_active]}>
                    <Text style={styles.tag_active_text}>My Feed</Text>
                </View>
            </View>
            <More title='Upcoming Events' />
            <View style={styles.event_group}>
                <FlatList
                    data={events}
                    renderItem={({ item }) => <Event_Tile title={item['title']} day={(new Date(item['date'])).getDate()} month={monthNames[(new Date(item['date'])).getMonth()]} country={item["address"]} time={`${(new Date(item['date'])).getHours()}:${(new Date(item['date'])).getMinutes()}`} price={item['price']} image='../assests/img/event_tile_1.png' />
                    }
                    keyExtractor={item => item['_id']}
                    horizontal={true}
                />
            </View>
            <More title='Upcoming Events' />
            <View style={styles.event_all}>
                <FlatList
                    data={events}
                    renderItem={({ item }) => <Event_Item title={item["title"]} day={(new Date(item['date'])).getDate()} month={monthNames[(new Date(item['date'])).getMonth()]} address={item["address"]} price={item['price']} image='../assests/img/event_item_1.png' />
                    }
                    keyExtractor={item => item['_id']}
                >

                </FlatList>


            </View>

            <Menu_Tab navigation={navigation} page='main' />

        </View>
    )
}

const colorList = [
    { offset: '0%', color: '#fa2002', opacity: '1' },
    { offset: '100%', color: '#fa6752', opacity: '1' }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000000',
    },
    header_background: {
        position: 'absolute',
        top: -122,
        width: '100%',
        height: '60%',
        borderRadius: 20
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginHorizontal: 30,
    },
    header_left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    header_username: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    text_welcome: {
        fontFamily: 'Montserrat',
        fontSize: 10,
        color: '#ffffff'
    },
    text_name: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: '#cccccc'
    },
    header_right: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header_icon: {
        width: 20,
        height: 20
    },
    tag_group: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
    },
    tag: {
        width: 80,
        height: 30,
        backgroundColor: '#000000',
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    tag_text: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: '#CCCCCC'
    },
    tag_active: {
        backgroundColor: '#e2fc49',
    },
    tag_active_text: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: '#000000'
    },
    event_group: {
        marginHorizontal: 30,
    },
    event_all: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginHorizontal: 30,
        marginBottom:40
    }
})

export default Main