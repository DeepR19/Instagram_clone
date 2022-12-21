import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import style from "./style";
import PostHeader from "./postHeader"
import PostImage from "./postImage"
import PostFooter from "./postFooter"
import {Divider} from "react-native-elements"
import { firebase, db } from '../../../firebase';

export default function POST({post}) {

  const handleLike = (post)=>{
    const currentLikeStatus = !post.likes_by_users
                                  .includes(
                                    firebase.auth().currentUser.email
                                  )

    // it says in users collection contain posts groupcollecion
    // then based on postId and OwnerEmail Like the post        
    db.collection('users')
    .doc(post.owner_email)
    .collection('posts')
    .doc(post.id)
    .update({
      likes_by_users : currentLikeStatus ? firebase.firestore.FieldValue
                                .arrayUnion(
                                  firebase.auth().currentUser.email
                                ):
                                firebase.firestore.FieldValue
                                .arrayRemove(
                                  firebase.auth().currentUser.email
                                )
    }).then(()=>{
      console.log()
    }).catch(err=>{
      alert(err)
    })
  }
  return (
      
      <View style={{marginBottom: 30}}>
        <Divider width={1} orientation="vertical" />

        <PostHeader post={post}/>
        <PostImage post ={post}/>
        <View style={{marginHorizontal: 15, marginTop: 10}}>
          <PostFooter post= {post} handleLike ={handleLike}/>
        </View>
      </View>
  )}