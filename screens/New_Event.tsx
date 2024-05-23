import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { RadialGradient } from 'react-native-gradients';
import More from '../components/More'
import Event_Tile from '../components/Event_Tile';
import Event_Classify_Item from '../components/Event_Classify_Item';
import Menu_Tab from '../components/Menu_Tab'
import Header
    from '../components/Header';
import DatePicker from 'react-native-date-picker'
import { API_URL } from '../config';
const New_Event: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [isValid, setIsValid] = useState({
        title: false,
        address: false,
        description: false,
        price: false,
    });
    const ref_input1 = useRef();
    const ref_input2 = useRef();

    const validateInputs = () => {
        setIsValid({
            title: title.trim().length > 0,
            address: address.trim().length > 0,
            description: description.trim().length > 0,
            price: /^[0-9]*\.?[0-9]*$/.test(price)
        });
    };

    const handleSubmit = () => {
        if (isValid.title && isValid.address && isValid.description && isValid.price) {
            console.log('All inputs are valid'); // Proceed with form submission or any other action
            handleCreateEvent()
        } else {
            let errorMessage = 'Please fill all fields correctly:';
            if (!isValid.title) errorMessage += ' Title is required.';
            if (!isValid.address) errorMessage += ' Address is required.';
            if (!isValid.description) errorMessage += ' Description is required.';
            if (!isValid.price) errorMessage += ' Price must be a number.';

            Alert.alert('Error', errorMessage);
        }
    };
    const handlePriceChange = (value: any) => {
        if (/^[0-9]*\.?[0-9]*$/.test(value) || value === '') {
            setPrice(value);
        } else {
            Alert.alert('Error', 'Price must be a number');
        }
    };

    const handleCreateEvent = async () => {
        await fetch(`${API_URL}/api/event/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                address: address,
                description: description,
                price: price,
                date: date
            })

        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    }

    return (
        <View style={styles.container}>

            <View style={styles.header_background}>
                <RadialGradient x="50%" y="30%" rx="80%" ry="70%" colorList={colorList} />
            </View>
            <Header title='New Event'></Header>
            <View style={styles.body}>
                <TextInput
                    autoFocus={true}
                    style={styles.text_input} placeholder='title' value={title} onChangeText={setTitle}
                />
                <TextInput style={styles.text_input} placeholder='address' value={address} onChangeText={setAddress} />
                <TextInput style={styles.text_input} placeholder='description' value={description} onChangeText={setDescription} />
                <TextInput style={styles.text_input} keyboardType='numeric'
                    placeholder='price' value={price} onChangeText={handlePriceChange} />
                <TouchableOpacity onPress={() => setOpen(true)} style={styles.date_button}>

                    <Image style={{ width: 20, height: 20, marginRight: 10 }} source={require('../assests/img/calendar-icon.png')}></Image>
                    <Text>Date Select</Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />

            </View>
            <View style={styles.button_hover}>
                <TouchableOpacity style={styles.create_button} onPress={handleSubmit}>
                    <Text>Create</Text>
                </TouchableOpacity>
            </View>

            <Menu_Tab navigation={navigation} page='New_Event' />

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
    body: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        borderRadius: 40,
        width: '90%',
        alignSelf: 'center'

    },
    login_text: {
        fontSize: 20,
        color: '#CCCCCC',
    },
    text_input: {
        color: '#000000',
        width: '80%',
        backgroundColor: '#ffffff',
        borderRadius: 30
    },
    button_hover: {

        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    create_button: {
        backgroundColor: '#2ea4f2',
        color: '#ffffff',
        padding: 10,
        fontSize: 30,
        borderRadius: 20,
        width: '60%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    date_button: {
        backgroundColor: 'white',
        color: '#ffffff',
        padding: 10,
        borderRadius: 20,
        width: '80%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
})

export default New_Event