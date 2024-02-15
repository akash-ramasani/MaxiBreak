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

// Constants
const ICONS = { Home: 'house', Account: 'user' };
const TAB_BAR_STYLE = { height: windowHeight / 15, position: 'relative' };
const TAB_BAR_LABEL_STYLE = { fontFamily: 'RobotoSlab_400Regular' };
const ACTIVE_TINT_COLOR = '#FF5A5F';
const INACTIVE_TINT_COLOR = '#6D6D64';

// Helper Functions
const createTabBarIcon = (route, color, size) => (
  <FontAwesome6 name={ICONS[route.name]} size={size} color={color} solid />
);

// Stack Navigators
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
      tabBarIcon: ({ color, size }) => createTabBarIcon(route, color, size),
      tabBarStyle: TAB_BAR_STYLE,
      tabBarLabelStyle: TAB_BAR_LABEL_STYLE,
      tabBarActiveTintColor: ACTIVE_TINT_COLOR,
      tabBarInactiveTintColor: INACTIVE_TINT_COLOR,
      tabBarShowLabel: false,
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

// App Component
const App = () => {
  const isAuthenticated = !false; // Replace with actual authentication logic
  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="#ffffff" animated />
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;