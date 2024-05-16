import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { RadialGradient, LinearGradient } from 'react-native-gradients';
import Menu_Tab from '../components/Menu_Tab'
import Header from '../components/Header';
import Ticket_Detail_Cap from '../components/Ticket_Detail_Cap';
import Start_End_Text from '../components/Start_End_Text';
import Start_End_Link from '../components/Start_End_Link';
import DashedLine from 'react-native-dashed-line';
import Pay_Method from '../components/Pay_Method';

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
                <Ticket_Detail_Cap title='Festival of Lights' date='1st April, 2024' country='10:00pm Prompt' image='../assests/img/event_item_1.png' />

            </View>

            <View style={styles.ticket_payment}>
                <Start_End_Link title='Ticket Summary' link='Edit' />
                <View style={styles.ticket_price}>
                    <Start_End_Text start_text='Premium Price x1' end_text='$20.40' />
                    <Start_End_Text start_text='Subtotal' end_text='$20.40' />
                    <DashedLine style={styles.dashline} dashLength={15} dashThickness={1} dashGap={10} dashColor='#D9D9D9' dashStyle={{ borderRadius: 5 }} />
                    <Start_End_Text start_text='Total' end_text='$20.40' />
                </View>
                <Start_End_Link title='Payment Methods' link='Change' />
                <Pay_Method />
            </View>

            <Menu_Tab navigation={navigation} page='tickets' />

        </View >
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
    body_background: {
        position: 'absolute',
        top: 52,
        width: '100%',
        height: '100%',
        backgroundColor: '#fa2002',
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
    },
    ticket_payment: {
        width: '90%',
        backgroundColor: '#383838',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        alignSelf: 'center',
        height: '70%',
        marginTop: '5%'
    },
    ticket_price: {
        marginHorizontal: 30,
        borderWidth: 3,
        borderColor: '#666666',
        borderRadius: 30
    },
    dashline: {
        marginTop: 10,
        marginHorizontal: 20
    }
})

export default Tickets