import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { ScrollView, StyleSheet } from 'react-native';

import FormInput from '../../components/atoms/FormInput';
import FormButton from '../../components/atoms/FormButton';
import NavLink from '../../components/atoms//NavLink';

const Register = ({ navigation }) => {
    const inputFields = [
        { type: 'text', placeholderText: 'Name', keyboardType: 'default', autoCapitalize: 'none', autoCorrect: false },
        { type: 'email', placeholderText: 'Email Address', keyboardType: 'email-address', autoCapitalize: 'none', autoCorrect: false },
        { type: 'password', placeholderText: 'Password', isPassword: true }
    ];

    const navigateToLogin = () => navigation.navigate('Login');

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
            <FormButton buttonTitle="Create account" />
            
            <NavLink linkText="Already have an account? Login here" onPress={navigateToLogin} />
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
