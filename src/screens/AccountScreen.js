import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Account = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={{flex:0.25, padding: 10, backgroundColor: 'blue'}}>

                <View style={{flex: 3, backgroundColor: 'pink'}}>
                    <Text style={{fontFamily: 'RobotoSlab_900Black', fontSize: 30}}>Account</Text>
                </View>

                <View style={{flex: 7, flexDirection: 'row', borderWidth: 0.5, borderColor: '#252525', borderRadius: 5, marginVertical: 10, overflow: 'hidden', backgroundColor: 'white'}}>
                    <View style={{flex: 0.3, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink'}}>
                        <Image source={require("../../assets/images/avatar.png")} style={{width: 150, height: 150}}/>
                    </View>

                    <View style={{flex: 0.7, alignItems: 'center', justifyContent: 'center', padding: 10, backgroundColor: 'pink'}}>
                        <Text style={{fontFamily: 'RobotoSlab_500Medium', fontSize: 26}}>Akash Ramasani</Text>
                    </View>
                </View>
            </View>

            

        </View>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});