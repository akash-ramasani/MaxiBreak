import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts, RobotoSlab_300Light, RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_600SemiBold, RobotoSlab_900Black } from '@expo-google-fonts/roboto-slab';

import Login from './screens/Auth/Login';
import ForgotPassword from './screens/Auth/ForgotPassword';
import Register from './screens/Auth/Register';

const AuthStack = createNativeStackNavigator();
const App = () =>{

    // Load custom fonts
    let [fontsLoaded] = useFonts({
        RobotoSlab_300Light,
        RobotoSlab_400Regular,
        RobotoSlab_500Medium,
        RobotoSlab_600SemiBold,
        RobotoSlab_900Black,
    });

    // Render null while fonts are loading
    if (!fontsLoaded) {
        return null;
    }

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