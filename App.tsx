import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import Home from './screens/Home.tsx'
import Main from './screens/Main.tsx'
import New_Event from './screens/New_Event.tsx';
import SearchScreen from './screens/SearchScreen.tsx';
import Tickets from './screens/Tickets.tsx'
import Profile from './screens/Profile.tsx';
import Detail from './screens/Detail.tsx';
import Login from './screens/Login.tsx';
import Register from './screens/Register.tsx';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="New_Event" component={New_Event} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Tickets" component={Tickets} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;