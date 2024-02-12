import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Account = () => {
    return (
        <View style={styles.container}>
             <Text style={{fontFamily: 'RobotoSlab_400Regular'}}>Account Screen</Text>
        </View>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});