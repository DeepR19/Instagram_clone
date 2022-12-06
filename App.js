import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MAIN from './screens/Header/TopHeader';
import Stories from './screens/Stories/Story';
import styles from "./screens/Header/Style";
import POST from "./screens/Posts/mainPost"
import { POSTS } from './DATA/POSTS/postData';

export default function App() {
  return (
    <View style= {styles.body}>
      <MAIN/>
      <Stories/>
      <ScrollView>
        {POSTS.map((post, index)=>(
          <POST post={post} key={index}/>
        ))}
      </ScrollView>

      <StatusBar style='auto'/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
