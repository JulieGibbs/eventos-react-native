import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { RadialGradient, LinearGradient } from 'react-native-gradients';
import Menu_Tab from '../components/Menu_Tab'
import Header from '../components/Header';
import Event_Item from '../components/Event_Item';
const Tickets: React.FC<{ navigation: any }> = ({ navigation }) => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchText);
    };

    const handleClear = () => {
        setSearchText('');
    };

    return (
        <View style={styles.container}>

            <View style={styles.body_background}>
                <RadialGradient x="50%" y="50%" rx="70%" ry="70%" colorList={colorList} />
            </View>
            <Header title='Tickets'></Header>

            <View style={styles.body_header}>
                <Text style={styles.body_header_text}>TICKET DETAILS</Text>
                <TouchableOpacity >
                    <Image source={require('../assests/img/exit_icon.png')} style={styles.exit_icon} />
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 30 }}>
                <Event_Item title='Self Awareness Bootcamp For' day='09' month='April' address='Nigeria, NG' price='23.00' image='../assests/img/event_item_1.png' />

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
    body_background: {
        position: 'absolute',
        top: 52,
        width: '100%',
        height: '100%',
        backgroundColor: '#4774B8',
        borderRadius: 100,
        borderTopLeftRadius: 20,
    },
    body_header: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    body_header_text: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    },

    exit_icon: {
        width: 20,
        height: 20,
        position: 'relative',
        right: -80
    }
})

export default Tickets