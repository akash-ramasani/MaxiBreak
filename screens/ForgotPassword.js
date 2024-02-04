import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { ScrollView, StyleSheet } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const ForgotPassword =  () => {

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <StatusBar style="auto"/>
            <FormInput
                autofocus
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