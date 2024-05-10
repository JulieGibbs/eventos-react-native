import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { RadialGradient } from 'react-native-gradients';
import Menu_Tab from '../components/Menu_Tab'
import Header from '../components/Header';

const SearchScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchText);
    };

    const handleClear = () => {
        setSearchText('');
    };

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
                    onChangeText={text => setSearchText(text)}
                />
                {searchText.length > 0 && (
                    <TouchableOpacity onPress={handleClear}>
                        <Image source={require('../assests/img/exit_icon.png')} style={styles.exit_icon} />
                    </TouchableOpacity>
                )}
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
    }
})

export default SearchScreen