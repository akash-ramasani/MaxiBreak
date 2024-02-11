import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_600SemiBold, RobotoSlab_900Black } from '@expo-google-fonts/roboto-slab';

import Login from './src/screens/Auth/Login';
import ForgotPassword from './src/screens/Auth/ForgotPassword';
import Register from './src/screens/Auth/Register';

import HomeScreen from './src/screens/HomeScreen'

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
            <MainStack.Screen name="Home" component={HomeScreen}/>
        </MainStack.Navigator>
    );
}

const App = () =>{

    // Load custom fonts
    let [fontsLoaded] = useFonts({
        RobotoSlab_400Regular,
        RobotoSlab_500Medium,
        RobotoSlab_600SemiBold,
        RobotoSlab_900Black,
    });

    // Render null while fonts are loading
    if (!fontsLoaded) {
        return null;
    }

    const user = true;

    return (
        <NavigationContainer>
            
            {user != true && <Auth/> }

            {user == true && <Main />}

        </NavigationContainer>
    );
}

export default App;