import React, { useState, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import FormInput from '../../components/atoms/FormInput';
import FormButton from '../../components/atoms/FormButton';
import NavLink from '../../components/atoms/NavLink';

// Use React.memo to prevent unnecessary re-renders
const Login = React.memo(({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Use useCallback to memoize the handler and prevent it from being recreated on every render
  const handleLogin = useCallback(() => {
    console.log(email, password);
  }, [email, password]); // Dependencies ensure function is updated when email or password changes

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Maxi Break</Text>
      </View>

      <FormInput
        autoFocus
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
      />
      <FormInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      
      <NavLink
        linkText="Forgotten Password?"
        onPress={() => navigation.navigate('ForgotPassword')}
        customStyles={styles.navLink}
      />
      
      <FormButton buttonTitle="Log in" onPress={handleLogin} />
      
      <NavLink
        linkText="Don't have an account? Create here"
        onPress={() => navigation.navigate('Register')}
      />
    </ScrollView>
  );
});

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
