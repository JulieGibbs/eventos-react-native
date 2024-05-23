import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { API_URL } from '../config';
const Register: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [confirm, setConfirm] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      if (!validateEmail(email)) {
        Alert.alert('Error', 'Please enter a valid email');
      } else if (password != confirm) {
        Alert.alert('Error', `Passwords do not match ${confirm} : ${password}`);
      } else {
        await fetch(`${API_URL}/api/auth/signup`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullname: fullname,
            email: email,
            password: password
          }),
        })
          .then((res) => {
            if (res.status == 200) navigation.navigate('Main')
          });
      }
    } catch (err) {
      console.log(err)
    }

  };

  const validateEmail = (email: any) => {
    // Email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginCard}>
        <Text style={styles.login_text}>Register</Text>
        <TextInput style={styles.fullname_input} placeholder='Full name' value={fullname} onChangeText={setFullname} />
        <TextInput style={styles.email_input} placeholder='Email' value={email} onChangeText={setEmail} />
        <TextInput style={styles.pwd_input} onChangeText={setPassword}
          value={password} placeholder='Password' secureTextEntry={true} />
        <TextInput style={styles.pwd_input} value={confirm} onChangeText={setConfirm} placeholder='Confirm Password' secureTextEntry={true} />
        <TouchableOpacity style={styles.login_button} onPress={handleRegister}>
          <Text>Register</Text>
        </TouchableOpacity>
        <Text>Do you have already an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ textDecorationLine: 'underline', color: '#ffffff' }}>Login</Text>
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
  fullname_input: {
    color: '#000000',
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 30
  },
  email_input: {

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

export default Register;