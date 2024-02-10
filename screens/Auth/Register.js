import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, StyleSheet } from 'react-native';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import NavLink from '../../components/NavLink';

const Register = ({ navigation }) => {
    const inputFields = [
        { type: 'text', placeholderText: 'Name', keyboardType: 'default', autoCapitalize: 'none', autoCorrect: false },
        { type: 'email', placeholderText: 'Email', keyboardType: 'email-address', autoCapitalize: 'none', autoCorrect: false },
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
            
            <Text style={{color:'grey'}}>By registering, you agree to our Terms of Service and Privacy Policy.</Text>
            
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
