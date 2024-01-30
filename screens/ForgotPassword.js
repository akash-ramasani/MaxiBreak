import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const ForgotPassword =  ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <FormInput
                    autofocus
                    iconType="mail"
                    type="email"
                    placeholderText="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormButton
                    buttonTitle="Send OTP"
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default ForgotPassword;

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