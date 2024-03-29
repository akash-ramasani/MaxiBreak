import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';

import FormInput from '../../components/atoms/FormInput';
import FormButton from '../../components/atoms/FormButton';
import NavLink from '../../components/atoms//NavLink';

const ForgotPassword = ({navigation}) => {
    // This structure allows for easy expansion if more input fields are needed in the future.
    const emailInputProps = {
        autofocus: true,
        type: "email",
        placeholderText: "Email",
        keyboardType: "email-address",
        autoCapitalize: "none",
        autoCorrect: false,
    };

    const navigateToLogin = () => navigation.navigate('Login');

    return (
        <ScrollView 
            contentContainerStyle={styles.container} 
            showsVerticalScrollIndicator={false} 
            showsHorizontalScrollIndicator={false}
        >
            <FormInput {...emailInputProps} />
            <FormButton buttonTitle="Reset password" />
            <NavLink linkText="Already have an account? Login here" onPress={navigateToLogin} />
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