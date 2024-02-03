import React from 'react';

import { ScrollView, View, Text, TouchableOpacity, StyleSheet, useColorScheme  } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

import { useFonts, RobotoSlab_300Light, RobotoSlab_500Medium, RobotoSlab_800ExtraBold } from '@expo-google-fonts/roboto-slab';

const Login =  ({ navigation }) => {

    let [fontsLoaded, fontError] = useFonts({
        RobotoSlab_800ExtraBold,
        RobotoSlab_500Medium,
        RobotoSlab_300Light,
    });
    
    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <StatusBar style="auto"/>

                <View style={{marginVertical: 40}}>
                    <Text style={{fontSize: 24, fontFamily: 'RobotoSlab_800ExtraBold'}}>Maxi Break</Text>
                </View>

                <FormInput
                    autofocus
                    type="email"
                    placeholderText="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                
                <FormInput
                    type="password"
                    placeholderText="Password"
                    secureTextEntry
                />
                
                <View style={{marginVertical: 5}}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.navButtonText}>Forgotten Password?</Text>
                    </TouchableOpacity>
                </View>
                
                <FormButton buttonTitle="Log In"/>

                <View style={{marginVertical: 20}}>
                    <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.navButtonText}>Don't have an acount? Create here</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
    },
    logo: {
        height: 200,
        width: 200,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    forgotButton: {
        marginVertical: 20,
    },
    navButtonText: {
        fontFamily: 'RobotoSlab_300Light',
        color: '#2e64e5'
    },
});