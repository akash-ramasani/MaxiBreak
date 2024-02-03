import React from 'react';

import { View, TextInput, StyleSheet } from 'react-native';

import { windowHeight } from '../utils/Dimensions';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput value={labelValue} style={styles.input} numberOfLines={1} placeholder={placeholderText} placeholderTextColor="#666" {...rest}/>
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'RobotoSlab_300Light',
        color: '#252525',
        justifyContent: 'center',
        alignItems: 'center',
    },
});