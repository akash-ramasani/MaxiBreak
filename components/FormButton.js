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
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#252525',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        fontFamily: 'RobotoSlab_500Medium',
        fontSize: 18,
        color: '#ffffff',
    },
});