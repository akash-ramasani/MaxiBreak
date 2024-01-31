import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const ForgotPassword =  () => {
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
        padding: 20,
    }
});