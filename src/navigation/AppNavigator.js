import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Register from '../screens/Auth/Register';

import HomeScreen from '../screens/HomeScreen';

const AuthStack = createNativeStackNavigator();
const Auth = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login" screenOptions={() => ({ headerShown: false })}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
        </AuthStack.Navigator>
    );
}

const MainStack = createNativeStackNavigator();
const Main = () => {
    return (
        <MainStack.Navigator initialRouteName="Home">
            <MainStack.Screen name="Home" component={HomeScreen} options={() => ({ headerShown: false })}/>
        </MainStack.Navigator>
    );
}

export default () => {
    const user = true;
    return (
        <NavigationContainer>
            
            {user != true && <Auth/> }

            {user == true && <Main />}

        </NavigationContainer>
    );
}