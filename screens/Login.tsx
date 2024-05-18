import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { API_URL } from '../config';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        try{
            const login = await fetch(`${API_URL}/api/auth/signin`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                }),
            });
            navigation.navigate('Main')
        }
        catch(err){
            console.error(err)
        }
        

    }
    return (
        <View style={styles.container}>
            <View style={styles.loginCard}>
                <Text style={styles.login_text}>Login</Text>
                <TextInput style={styles.name_input} placeholder='Name' value={username} onChangeText={setUsername} />
                <TextInput style={styles.pwd_input} placeholder='Password' secureTextEntry={true} value={password} onChangeText={setPassword} />
                <TouchableOpacity style={styles.login_button} onPress={handleLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <Text>Don't you have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{ textDecorationLine: 'underline', color: '#ffffff' }}>Create</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#090909',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginCard: {
        backgroundColor: '#383838',
        width: '80%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 20,
    },
    login_text: {
        fontSize: 20,
        color: '#CCCCCC',
    },
    name_input: {
        color: '#000000',
        width: '80%',
        backgroundColor: '#ffffff',
        borderRadius: 30
    },
    pwd_input: {
        color: '#000000',
        width: '80%',
        backgroundColor: '#ffffff',
        borderRadius: 30

    },
    login_button: {
        backgroundColor: '#e2fc49',
        color: '#ffffff',
        padding: 10,
        borderRadius: 20,
        width: '60%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login;