import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assests/img/map.png')} />
      <View style={styles.dot_group}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={[styles.dot, styles.dot_active]}></View>
      </View>
      <Text style={styles.title}>Easily Find Your Event</Text>
      <Text style={styles.description}>Find out where it is happening live and have a time of your life with friends and family</Text>
      <View style={styles.b_continue}>
        <TouchableOpacity onPress={() =>
          navigation.navigate('Main')
        }>
          <Text style={styles.b_continue_text}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#000000',
  },
  image: {
    width: "100%",
    marginTop: -29,
    height: 300,
    borderRadius: 40,
  },
  dot_group: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 5,
  },
  dot_active: {
    width: 42,
    backgroundColor: '#A3D977',
    borderRadius: 15,
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  description: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: 60,
    color: '#FFFFFF',
  },
  b_continue: {
    height: 77,
    width: '80%',
    marginVertical: 30,
    backgroundColor: '#A3D977',
    borderRadius: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  b_continue_text: {
    color: '#000000',
    fontFamily: 'Montserrat',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  }
});

export default Home;