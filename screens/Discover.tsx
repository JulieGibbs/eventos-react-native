import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RadialGradient } from 'react-native-gradients';
import More from '../components/More'
import Event_Tile from '../components/Event_Tile';
import Event_Classify_Item from '../components/Event_Classify_Item';
import Menu_Tab from '../components/Menu_Tab'
import Header
    from '../components/Header';
const Discover: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.header_background}>
                <RadialGradient x="50%" y="30%" rx="80%" ry="70%" colorList={colorList} />
            </View>
            <Header title='Discover'></Header>

            <More title='POPULAR EVENTS' />
            <View style={styles.event_group}>
                <Event_Tile title='Festival of Lights' day='09' month='April' country='Chinia' time='10:00' price='23.00' image='../assests/img/event_tile_1.png' />
                <Event_Tile title='Festival of Lights' day='09' month='April' country='Chinia' time='10:00' price='23.00' image='../assests/img/event_tile_2.png' />
            </View>
            <View style={{ flex: 4 }}>
                <More title='MUSIC CONCERTS' />
                <View style={styles.event_classify}>
                    <Event_Classify_Item title='Self Awareness Bootcamp For' day='09' month='April' address='Nigeria, NG' price='23.00' image='../assests/img/event_item_1.png' />
                    <Event_Classify_Item title='Self Awareness Bootcamp For' day='09' month='April' address='Nigeria, NG' price='23.00' image='../assests/img/event_item_1.png' />

                </View>
                <More title='SEMINARS' />
                <View style={styles.event_classify}>
                    <Event_Classify_Item title='Self Awareness Bootcamp For' day='09' month='April' address='Nigeria, NG' price='23.00' image='../assests/img/event_item_1.png' />
                    <Event_Classify_Item title='Self Awareness Bootcamp For' day='09' month='April' address='Nigeria, NG' price='23.00' image='../assests/img/event_item_1.png' />

                </View>
                <More title='MOVIE PREMIERES' />
                <View style={styles.event_classify}>
                    <Event_Classify_Item title='Self Awareness Bootcamp For' day='09' month='April' address='Nigeria, NG' price='23.00' image='../assests/img/event_item_1.png' />
                    <Event_Classify_Item title='Self Awareness Bootcamp For' day='09' month='April' address='Nigeria, NG' price='23.00' image='../assests/img/event_item_1.png' />

                </View>
            </View>

            <Menu_Tab navigation={navigation} />

        </View>
    )
}

const colorList = [
    { offset: '0%', color: '#4774B8', opacity: '1' },
    { offset: '100%', color: '#0A1322', opacity: '1' }
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
        backgroundColor: '#4774B8',
        borderRadius: 100
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
        backgroundColor: '#A3D977',
    },
    tag_active_text: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: '#000000'
    },
    event_group: {
        flex: 2,
        flexDirection: 'row',
        marginHorizontal: 30,
    },
    event_classify: {
        flex: 2,
        flexDirection: 'row',
        marginLeft: 30
    }
})

export default Discover