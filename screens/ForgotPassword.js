import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { ScrollView, StyleSheet } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const ForgotPassword = () => {
    // This structure allows for easy expansion if more input fields are needed in the future.
    const emailInputProps = {
        autofocus: true,
        type: "email",
        placeholderText: "Email",
        keyboardType: "email-address",
        autoCapitalize: "none",
        autoCorrect: false,
    };

    return (
        <ScrollView 
            contentContainerStyle={styles.container} 
            showsVerticalScrollIndicator={false} 
            showsHorizontalScrollIndicator={false}
        >
            <StatusBar style="auto"/>
            <FormInput {...emailInputProps} />
            <FormButton buttonTitle="Send OTP" />
        </ScrollView>
    );
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});