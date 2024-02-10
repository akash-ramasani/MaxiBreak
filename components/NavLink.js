import React from 'react';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavLink = ({ linkText, onPress, customStyles }) => {
  return (
    <TouchableOpacity style={[styles.navLink, customStyles]} onPress={onPress}>
        <Text style={styles.navLinkText}>{linkText}</Text>
    </TouchableOpacity>
  );
};

export default NavLink;

const styles = StyleSheet.create({
    navLink: {
        marginVertical: 30,
    },
    navLinkText: {
        fontFamily: 'RobotoSlab_400Regular',
        color: '#2e64e5'
    },
});