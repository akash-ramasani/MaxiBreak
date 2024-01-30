import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const Login =  ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}> 
                <View style={{alignItems: 'center', marginVertical: 40}}>
                    <Text style={[styles.text, {fontSize: 36, color: '#FF5A5F'}]}>MxiBrk</Text>
                    <Image
                        source={require('../assets/Login.png')}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.text}>Login</Text>
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
                    <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('ForgotPassword') }>
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