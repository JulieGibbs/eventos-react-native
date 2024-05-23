import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { RadialGradient } from 'react-native-gradients';
import Menu_Tab from '../components/Menu_Tab'
import Header from '../components/Header';
import Event_Item from '../components/Event_Item';
import { API_URL } from '../config';
const SearchScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

    const [searchText, setSearchText] = useState('');
    const [events, setEvents] = useState([])
    const handleSearch =async () => {
        const response= await fetch(`${API_URL}/api/event/search/${searchText}`);
        const json=await response.json()
        setEvents(json)
    };

    const handleClear = () => {
        setSearchText('');
    };
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return (
        <View style={styles.container}>

            <View style={styles.header_background}>
                <RadialGradient x="50%" y="30%" rx="80%" ry="70%" colorList={colorList} />
            </View>
            <Header title='Search'></Header>

            <View style={styles.searchbar}>

                <TouchableOpacity onPress={handleSearch}>
                    <Image source={require('../assests/img/search_icon.png')} style={styles.search_icon} />
                </TouchableOpacity>
                <TextInput
                    style={styles.search_input}
                    placeholder="Search..."
                    value={searchText}
                    autoFocus={true}
                    onChangeText={text => setSearchText(text)}
                />
                {searchText.length > 0 && (
                    <TouchableOpacity onPress={handleClear}>
                        <Image source={require('../assests/img/exit_icon.png')} style={styles.exit_icon} />
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.event_all}>
                <FlatList
                    data={events}
                    renderItem={({ item }) => <Event_Item title={item["title"]} day={(new Date(item['date'])).getDate()} month={monthNames[(new Date(item['date'])).getMonth()]} address={item["address"]} price={item['price']} image='../assests/img/event_item_1.png' />
                    }
                    keyExtractor={item => item['_id']}
                >

                </FlatList>


            </View>
            <Menu_Tab navigation={navigation} page='searchscreen'/>

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
        backgroundColor: '#fa2002',
        borderRadius: 100
    },
    searchbar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 10,
        width:'80%',
        borderRadius:30,
        marginHorizontal:30
    },
    search_input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10
    },
    search_icon: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    exit_icon: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    event_all:{
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginHorizontal: 30,
        marginBottom:40
    }
})

export default SearchScreen