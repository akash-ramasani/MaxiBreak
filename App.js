import React from 'react';

import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_600SemiBold, RobotoSlab_900Black } from '@expo-google-fonts/roboto-slab';
import Toast from 'react-native-toast-message'; // Import Toast

import AppNavigator from './src/navigation/AppNavigator';

const App = () => {

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

    return (
        <>
            <AppNavigator />
            <Toast />
        </>
    );
}

export default App;