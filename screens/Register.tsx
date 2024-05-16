import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

const Register: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [confirm, setConfirm] = useState('');
  const [password, setPassword] = useState('');

  const showAlert = () => {
    Alert.alert(
      'Password not match',
      'Input Correctly ',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  };
  const handleRegister = () => {
    if (confirm != password) {
      console.log("Passwords do not match");
      showAlert()
    } else {
      console.log("Passwords match");
    }


  }

  return (
    <View style={styles.container}>
      <View style={styles.loginCard}>
        <Text style={styles.login_text}>Login</Text>
        <TextInput style={styles.name_input} placeholder='Name' />
        <TextInput style={styles.pwd_input} onChangeText={setPassword}
          value={password} placeholder='Password' secureTextEntry={true}/>
        <TextInput style={styles.pwd_input} value={confirm} onChangeText={setConfirm} placeholder='Confirm Password'  secureTextEntry={true}/>
        <TouchableOpacity style={styles.login_button} onPress={handleRegister}>
          <Text>Register</Text>
        </TouchableOpacity>
        <Text>Do you have already an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{textDecorationLine:'underline', color:'#ffffff'}}>Login</Text>
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

export default Register;