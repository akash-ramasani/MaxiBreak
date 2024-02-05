import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import Register from './screens/Register';

const AuthStack = createNativeStackNavigator();
const App = () =>{
    
    return (
        <NavigationContainer>
            <AuthStack.Navigator initialRouteName="Login" screenOptions={() => ({ headerShown: false })}>
                <AuthStack.Screen name="Login" component={Login} />
                <AuthStack.Screen name="Register" component={Register} />
                <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}

export default App;