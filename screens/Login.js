import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Image, Text, TouchableOpacity, View, ToastAndroid } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const Login =  () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}> 
                <View style={{alignItems: 'center', marginVertical: 40}}>
                    <Image
                        source={require('../assets/Login.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.text}>MxBrk</Text>
                </View>
                <FormInput
                    autofocus
                    iconType="mail"
                    type="email"
                    placeholderText="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    iconType="lock"
                    type="password"
                    placeholderText="Password"
                    secureTextEntry
                />
                <FormButton
                    buttonTitle="Log In"
                />
                <View style={{alignItems: 'center', marginVertical: 20}}>
                    <TouchableOpacity style={styles.forgotButton}>
                        <Text style={styles.navButtonText}>Forgotten Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.forgotButton}>
                        <Text style={styles.navButtonText}>Don't have an acount? Create here</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontFamily: 'serif',
        fontSize: 18,
        color: '#2e64e5'
    },
});