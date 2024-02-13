import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';

import { windowHeight } from '../utils/Dimensions';

// Screens
import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Register from '../screens/Auth/Register';
import Home from '../screens/HomeScreen';
import Account from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const iconConfig = {
  Home: { focused: 'house', unfocused: 'house' },
  Account: { focused: 'user', unfocused: 'user' },
};

const tabBarIcon = ({ route, focused, color, size }) => {
  const iconName = focused ? iconConfig[route.name].focused : iconConfig[route.name].unfocused;
  
  return <FontAwesome6 name={iconName} size={size} color={color} solid/>;
};

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Tab.Navigator
    initialRouteName="Home"

    screenOptions={({ route }) => ({
      headerShown: false,

      tabBarIcon: ({ focused, color, size }) => tabBarIcon({ route, focused, color, size }),
      
      tabBarStyle: { height: windowHeight/15, position: 'relative' },
      tabBarLabelStyle: { fontFamily: 'RobotoSlab_400Regular' },

      tabBarActiveTintColor: '#FF5A5F',
      tabBarInactiveTintColor: '#6D6D64',

      tabBarActiveBackgroundColor: 'white',

      tabBarShowLabel: false,
      tabBarLabelPosition: 'below-icon',
      
    })}
  >
    <Tab.Screen name="Home" component={Home}/>
    <Tab.Screen name="Account" component={Account}/>
  </Tab.Navigator>
);

const App = () => {
  const user = true; // This would be dynamic based on authentication status
  return (
    <>
      <StatusBar style="dark" backgroundColor='#ffffff' animated={true} hidden={false} StatusBarAnimation='fade'/>
      <NavigationContainer>
        {user ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </>
    
  );
};

export default App;