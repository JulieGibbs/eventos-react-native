import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, useWindowDimensions, FlatList } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { RadialGradient } from 'react-native-gradients';
import Menu_Tab from '../components/Menu_Tab'
import Header from '../components/Header';
import Event_Item from '../components/Event_Item';
import { API_URL } from '../config';




const Profile: React.FC<{ navigation: any }> = ({ navigation }) => {
    const layout = useWindowDimensions();
    const [myevents, setMyevents] = useState([])
    const getmyevents = async () => {
        try {
            const response = await fetch(`${API_URL}/api/event/myall`);
            const json = await response.json()
            setMyevents(json)
        }
        catch (err) {
            console.error(err)
        }

    }
    useEffect(() => {
        getmyevents()
    }, [])
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Events' },
        { key: 'second', title: 'Collections' },
        { key: 'third', title: 'About' },
    ]);
    const FirstRoute = () => (
        <View style={styles.history}>
            <FlatList
                data={myevents}
                renderItem={({ item }) => <Event_Item title={item["title"]} day={(new Date(item['date'])).getDate()} month={monthNames[(new Date(item['date'])).getMonth()]} address={item["address"]} price={item['price']} image='../assests/img/event_item_1.png' />
                }
                keyExtractor={item => item['_id']}
            ></FlatList>
        </View>
    );
    const SecondRoute = () => (
        <View style={{ flex: 1 }} />
    );

    const ThirdRoute = () => (
        <View style={{ flex: 1 }} />
    );
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute
    });

    return (
        <View style={styles.container}>

            <View style={styles.header_background}>
                <RadialGradient x="50%" y="30%" rx="80%" ry="70%" colorList={colorList} />
            </View>

            <Header title='Profile'></Header>
            <View style={styles.profile_info}>
                <Image style={styles.profile_avatar} source={require('../assests/img/avatar.png')}></Image>
                <Text style={styles.profile_name}>Patrick Sam</Text>
                <Text style={styles.profile_mail}>patricksam@gmail.com</Text>
            </View>
            <View style={styles.profile_status}>
                <View style={styles.big_small}>
                    <Text style={styles.number_text}>20.0k</Text>
                    <Text style={styles.item_text}>Likes</Text>
                </View>
                <View style={styles.big_small}>
                    <Text style={styles.number_text}>10</Text>
                    <Text style={styles.item_text}>Tickets</Text>
                </View>
                <View style={styles.big_small}>
                    <Text style={styles.number_text}>1000</Text>
                    <Text style={styles.item_text}>Following</Text>
                </View>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
            <Menu_Tab navigation={navigation} page='profile' />

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
        top: -92,
        width: '100%',
        height: '60%',
        backgroundColor: '#fa2002',
        borderRadius: 100
    },
    profile_info: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    profile_avatar: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    profile_name: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: '#e2fc49'
    },
    profile_mail: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: '#FFFFFF'
    },
    profile_status: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    big_small: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    number_text: {
        fontSize: 16,
        color: '#ffffff'
    },
    item_text: {
        fontSize: 10,
        color: '#ffffff'
    },
    history: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginHorizontal: 30
    }
})

export default Profile