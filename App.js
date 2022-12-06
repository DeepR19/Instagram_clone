import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from "./screens/HomeScreen/Header/Style";
import MainHome from './screens/HomeScreen/Home';

export default function App() {
  return (
    <View style= {styles.body}>
      <MainHome/>
      
      <StatusBar style='auto'/>
    </View>
  );
}
