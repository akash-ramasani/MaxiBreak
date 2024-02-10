import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const Register = () => {
    const inputFields = [
        { type: 'text', placeholderText: 'Name', keyboardType: 'default', autoCapitalize: 'none', autoCorrect: false },
        { type: 'email', placeholderText: 'Email', keyboardType: 'email-address', autoCapitalize: 'none', autoCorrect: false },
        { type: 'password', placeholderText: 'Password', isPassword: true }
    ];

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <StatusBar style="auto"/>
            {inputFields.map((input, index) => (
                <FormInput
                    key={index}
                    autofocus={index === 0}
                    {...input}
                />
            ))}
            <FormButton buttonTitle="Create Account" />
        </ScrollView>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
