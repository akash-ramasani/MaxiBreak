import React, { useEffect } from 'react';
import * as Contacts from 'expo-contacts';

import { View, Text, StyleSheet } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Home = () => {
    const insets = useSafeAreaInsets();
    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.PhoneNumbers], // Requesting phone numbers
            });
    
            if (data.length > 0) {
              console.log(JSON.stringify(data, null, 2));
            }
          }
        })();
      }, []);
    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
             <Text style={{fontFamily: 'RobotoSlab_400Regular'}}>Home Screen</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});