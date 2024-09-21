import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Singup from './components/signup/singup';
import Login from './components/login/login';
import RootNavigator from './root/RootNavigator';

export default function App() {
  return (
    <View className='flex-1'>
    <RootNavigator/>
      <StatusBar style="auto" />
    </View>
  );
}
