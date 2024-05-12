import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import Home from './screens/Home.tsx'
import Main from './screens/Main.tsx'
import Discover from './screens/Discover.tsx';
import SearchScreen from './screens/SearchScreen.tsx';
import Tickets from './screens/Tickets.tsx'
import Profile from './screens/Profile.tsx';
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
        <Stack.Screen name="Discover" component={Discover}  />
        <Stack.Screen name="Search" component={SearchScreen}  />
        <Stack.Screen name="Tickets" component={Tickets}  />
        <Stack.Screen name="Profile" component={Profile}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;