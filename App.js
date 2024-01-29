import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Image, Text, TouchableOpacity, View, ToastAndroid } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import FormInput from './components/FormInput';
import FormButton from './components/FormButton';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}> 
                <View style={{alignItems: 'center', marginVertical: 40}}>
                    <Image
                        source={require('./assets/Login.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.text}>MaxiBreak</Text>
                </View>
                <FormInput
                    autofocus
                    iconType="mail"
                    type="email"
                    placeholderText="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    iconType="lock"
                    type="password"
                    placeholderText="Password"
                    secureTextEntry
                />
                <FormButton
                    buttonTitle="Log In"
                />
                <View style={{alignItems: 'center', marginVertical: 20}}>
                    <TouchableOpacity style={styles.forgotButton}>
                        <Text style={styles.navButtonText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.forgotButton}>
                        <Text style={styles.navButtonText}>
                            Don't have an acount? Create here
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MaxiBreak" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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