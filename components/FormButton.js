import React from 'react';

import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { windowHeight } from '../utils/Dimensions';

const FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        height: windowHeight / 15,
        width: '100%',
        marginVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252525',
    },
    buttonText: {
        fontFamily: 'RobotoSlab_600SemiBold',
        fontSize: 18,
        color: '#ffffff',
    },
});