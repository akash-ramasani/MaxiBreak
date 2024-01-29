import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';

import { SafeAreaView, ScrollView, StyleSheet, Image, Text, TouchableOpacity, View, ToastAndroid } from 'react-native';

import FormInput from '../../components/Auth/FormInput';
import FormButton from '../../components/Auth/FormButton';

import { auth } from '../../Config/FirebaseConfig';

import { LogBox } from 'react-native';
import _ from 'lodash';

const Login = ({ navigation }) => {

    LogBox.ignoreLogs(['Warning:...']);
    LogBox.ignoreAllLogs();
    const _console = _.clone(console);
    console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
    };


    const showToast = message => {
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            showToast("Logged in successfully.");
        })
        .catch(error => {
            showToast(error.message);
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}> 
                <View style={{alignItems: 'center', marginVertical: 40}}>
                    <Image
                        source={require('../../assets/icon.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.text}>GHMC</Text>
                </View>
                <FormInput
                    autofocus
                    iconType="mail"
                    type="email"
                    placeholderText="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    labelValue={email}
                    onChangeText={userEmail => setEmail(userEmail)}
                />
                <FormInput
                    iconType="lock"
                    type="password"
                    placeholderText="Password"
                    labelValue={password}
                    onChangeText={userPassword => setPassword(userPassword)}
                    secureTextEntry
                />
                <FormButton
                    buttonTitle="Log In"
                    onPress={handleSubmit}
                />
                <View style={{alignItems: 'center', marginVertical: 20}}>
                    <TouchableOpacity
                        style={styles.forgotButton}
                        onPress={() => navigation.navigate('ForgotPassword')}
                    >
                        <Text style={styles.navButtonText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.forgotButton}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.navButtonText}>
                            Don't have an acount? Create here
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
    },
    logo: {
        height: 200,
        width: 200,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e64e5',
        fontFamily: 'serif',
    },
});