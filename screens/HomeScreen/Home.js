import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import MAIN from './Header/TopHeader';
import Stories from './Stories/Story';
import styles from "./Header/Style";
import POST from "./Posts/mainPost"
import BottomTabs from './Bottom_Tab/Bottom';
import { POSTS } from '../../DATA/POSTS/postData';
import { bottomIcon } from '../../DATA/Icons/BottomIcon';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';

export default function MainHome({navigation}) {
  // const [posts, setPosts] = useState([])

  // useEffect(()=>{
  //   db.collectionGroup('posts').onSnapshot(snapshot=>{
  //     setPosts(snapshot.docs.map(doc => doc.data()))
  //   })
  // }, [])

  return (
    <View style= {styles.body}>
      <MAIN navigation={navigation}/>
      <Stories/>

      <ScrollView>
        {POSTS.map((post, index)=>(
          <POST post={post} key={index}/>
        ))}
      </ScrollView>

      <BottomTabs icons = {bottomIcon}/>
      
      <StatusBar style='auto'/>
    </View>
  );
}
