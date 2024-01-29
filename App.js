import { StatusBar } from 'expo-status-bar';
import { View, Alert, StyleSheet } from 'react-native';

import Button from './components/UI/Buttons/Button';

export default function App() {

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#FF5A5F',
  },
});