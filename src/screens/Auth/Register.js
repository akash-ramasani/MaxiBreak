import React, { useState } from "react";

import { ScrollView, StyleSheet } from 'react-native';

import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

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
    const [current, setCurrent] = useState("producer");
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            {formFields.map((field, index) => (
                <FormInput
                    key={index}
                    {...field}
                />
            ))}
            
            <RadioButtonGroup
                containerStyle={{ marginBottom: 10 }}
                selected={current}
                onSelected={(value) => setCurrent(value)}
                radioBackground="black"
            >
                <RadioButtonItem value="producer" label="Producer" />
            </RadioButtonGroup>

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