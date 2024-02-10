import React, { useState, memo, useCallback } from 'react';

import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { windowHeight } from '../utils/Dimensions';

const FormInput = memo(({ labelValue, placeholderText, iconType, isPassword, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [hasPassword, setHasPassword] = useState(false);

  const toggleShowPassword = useCallback(() => setShowPassword(prevState => !prevState), []);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        secureTextEntry={isPassword && !showPassword}
        onChangeText={(text) => setHasPassword(text.length > 0)}
        {...rest}
      />
      {isPassword && hasPassword && (
        <TouchableOpacity onPress={toggleShowPassword} style={styles.icon}>
          <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color="#000" />
        </TouchableOpacity>
      )}
    </View>
  );
});

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: windowHeight / 15,
    width: '100%',
    marginVertical: 10,
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F4F4',
  },
  input: {
    padding:10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'RobotoSlab_400Regular',
    color: '#252525',
  },
  icon: {
    marginRight: 10,
  },
});
