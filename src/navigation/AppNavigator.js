import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { windowHeight } from '../utils/Dimensions';

// Screens
import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Register from '../screens/Auth/Register';
import Home from '../screens/HomeScreen';
import Account from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ICON_NAMES = {
  Home: 'house',
  Account: 'user',
};

const tabBarIcon = ({ route, color, size }) => (
  <FontAwesome6 name={ICON_NAMES[route.name]} size={size} color={color} solid />
);

const tabBarStyle = { height: windowHeight / 15, position: 'relative' };
const tabBarLabelStyle = { fontFamily: 'RobotoSlab_400Regular' };
const tabBarActiveTintColor = '#FF5A5F';
const tabBarInactiveTintColor = '#6D6D64';

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
      tabBarIcon: props => tabBarIcon({ route, ...props }),
      tabBarStyle,
      tabBarLabelStyle,
      tabBarActiveTintColor,
      tabBarInactiveTintColor,
      tabBarShowLabel: false,
      tabBarLabelPosition: 'below-icon',
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

const App = () => {
  const user = true; // Consider replacing this with dynamic auth status
  return (
    <>
      <StatusBar style="dark" backgroundColor='#ffffff' animated hidden={false} />
      <NavigationContainer>
        {user ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

export default App;