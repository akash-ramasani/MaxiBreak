import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FormInput from '../../components/atoms/FormInput';
import FormButton from '../../components/atoms/FormButton';
import NavLink from '../../components/atoms/NavLink';

const formFields = [
    { placeholderText: 'Name', autoCapitalize: 'words', autoComplete: 'name' },
    { placeholderText: 'Phone Number', keyboardType: 'phone-pad', autoComplete: 'tel' },
    { placeholderText: 'Email Address', keyboardType: 'email-address', autoCapitalize: 'none', autoComplete: 'email' },
    { placeholderText: 'Password', autoComplete: 'password', isPassword: true },
];

const Register = ({ navigation }) => {
    const navigateToLogin = () => navigation.navigate('Login');

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            {formFields.map((field, index) => (
                <FormInput
                    key={index}
                    {...field}
                />
            ))}
            <FormButton 
                buttonTitle="Create account"
            />
            <NavLink linkText="Already have an account? Login here" onPress={navigateToLogin} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
});

export default Register;