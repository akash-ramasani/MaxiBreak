import { StatusBar } from 'expo-status-bar';
import { View, Alert, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Button from './components/UI/Buttons/Button';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const handlePress = () => {
    Alert.alert('Button Pressed', 'You clicked the button!');
  };
    
  return (
    <View style={styles.container}>
      <Button title='Register' onPress={handlePress} style={styles.buttonStyle}/>
      <StatusBar style="auto" />
    </View> 
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MaxiBreak" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  buttonStyle: {
    backgroundColor: '#FF5A5F',
  },
});