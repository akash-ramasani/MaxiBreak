import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium, RobotoSlab_600SemiBold, RobotoSlab_900Black } from '@expo-google-fonts/roboto-slab';

import FormInput from '../../components/FormInput'
import FormButton from '../../components/FormButton';
import NavLink from '../../components/NavLink';

const Login = ({ navigation }) => {
  // Load custom fonts
  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_900Black,
  });

  // Render null while fonts are loading
  if (!fontsLoaded) {
    return null;
  }

  const navigateToForgotPassword = () => navigation.navigate('ForgotPassword');
  const navigateToRegister = () => navigation.navigate('Register');

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Maxi Break</Text>
      </View>

      <FormInput autofocus type="email" placeholderText="Email Address" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
      <FormInput type="password" placeholderText="Password" isPassword={true}/>
      
      <NavLink linkText="Forgotten Password?" onPress={navigateToForgotPassword} customStyles={styles.navLink} />
      
      <FormButton buttonTitle="Log in" />
      
      <NavLink linkText="Don't have an account? Create here" onPress={navigateToRegister} />

    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 40,
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'RobotoSlab_900Black',
  },
  navLink: {
    marginVertical: 5,
    alignSelf: 'flex-end',
  },
});
