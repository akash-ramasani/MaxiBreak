import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';

const AuthStack = createNativeStackNavigator();

const App = () =>{
    return (
        <NavigationContainer>
            <AuthStack.Navigator initialRouteName="Login" screenOptions={() => ({ headerShown: true, headerTitleAlign: 'center' })}>
                <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerTitle: 'Forgot Passowrd'}}/>
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}

export default App;