import React from 'react';

import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const Login =  ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <StatusBar style="auto"/>
                <View style={{alignItems: 'center', marginVertical: 40}}>
                    <Text style={[styles.text, {fontSize: 36, color: '#FF5A5F'}]}>MxiBrk</Text>
                    <Image
                        source={require('../assets/Login.png')}
                        style={styles.logo}
                    />
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
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword') }>
                        <Text style={styles.navButtonText}>Forgotten Password?</Text>
                    </TouchableOpacity>
                </View>
                
                <FormButton buttonTitle="Log In" />

                <View style={{alignItems: 'center', marginVertical: 20}}>
                    <TouchableOpacity style={styles.forgotButton}>
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
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
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
        fontFamily: 'serif',
        fontSize: 15,
        color: '#2e64e5'
    },
});