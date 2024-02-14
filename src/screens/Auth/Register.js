import React, { useState } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, Platform, ToastAndroid, } from 'react-native';
import FormInput from '../../components/atoms/FormInput';
import FormButton from '../../components/atoms/FormButton';
import NavLink from '../../components/atoms/NavLink';
import Toast from 'react-native-toast-message'; // Import the toast library
import { supabase } from '../../config/supabase';

const Register = ({ navigation }) => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false); // Loading state

    // Update form state
    const updateInput = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };

    const handleSignUp = async () => {
        setLoading(true); // Start loading
        const { name, phoneNumber, email, password } = formData;

        const { user, error: signupError } = await supabase.auth.signUp({
            email,
            password,
        });
        console.log({ user, signupError });
    
        if (signupError) {
            showToast(signupError.message);
            setLoading(false);
            return;
        }

        if (user) {
            const { error: updateError } = await supabase.auth.update({
                data: { name: name, phone: phoneNumber },
            });
    
            if (updateError) {
                showToast(updateError.message);
                setLoading(false); // Stop loading on error
                return;
            }
    
            showToast('Signup successful!');
            navigation.navigate('Login');
        }
        setLoading(false); // Stop loading on success or if we somehow miss the conditions
    };
    
    // Helper function to show toast messages
    const showToast = (message) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.LONG);
        } else {
            Toast.show({
                type: 'error', // You can choose different types depending on your toast setup
                position: 'bottom',
                text1: message,
            });
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <FormInput
                placeholderText="Name"
                onChangeText={(text) => updateInput('name', text)}
                autoCapitalize="words"
                autoComplete="name"
            />
            <FormInput
                placeholderText="Phone Number"
                onChangeText={(text) => updateInput('phoneNumber', text)}
                keyboardType="phone-pad"
                autoComplete="tel"
            />
            <FormInput
                placeholderText="Email Address"
                onChangeText={(text) => updateInput('email', text)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
            />
            <FormInput
                type="password"
                placeholderText="Password"
                isPassword={true}
                autoComplete="password"
                onChangeText={(text) => updateInput('password', text)}
            />
            <FormButton 
                buttonTitle={loading ? <ActivityIndicator color="#fff" /> : "Create account"} 
                onPress={handleSignUp} 
                disabled={loading}
            />
            <NavLink linkText="Already have an account? Login here" onPress={() => navigation.navigate('Login')} />
            <Toast />
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
    // Include any other styles you might have here
});

export default Register;