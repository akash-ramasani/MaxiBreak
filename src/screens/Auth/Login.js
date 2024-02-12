import React, { useState } from 'react';

import { ScrollView, View, Text, StyleSheet } from 'react-native';

import FormInput from '../../components/atoms/FormInput';
import FormButton from '../../components/atoms/FormButton';
import NavLink from '../../components/atoms//NavLink';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    console.log(email);
  };

  const navigateToForgotPassword = () => navigation.navigate('ForgotPassword');
  const navigateToRegister = () => navigation.navigate('Register');

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Maxi Break</Text>
      </View>

      <FormInput autofocus type="email" placeholderText="Email Address" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} onChangeText={text => setEmail(text)} />
      <FormInput type="password" placeholderText="Password" isPassword={true}/>
      
      <NavLink linkText="Forgotten Password?" onPress={navigateToForgotPassword} customStyles={styles.navLink} onChangeText={text => setPassword(text)}/>
      
      <FormButton buttonTitle="Log in" onPress={handleLogin}/>
      
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
