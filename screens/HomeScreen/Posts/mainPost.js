import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import style from "./style";
import PostHeader from "./postHeader"
import PostImage from "./postImage"
import PostFooter from "./postFooter"
import {Divider} from "react-native-elements"

export default function POST({post}) {
  // console.log(post)
  return (
      
      <View style={{marginBottom: 30}}>
        <Divider width={1} orientation="vertical" />

        <PostHeader post={post}/>
        <PostImage post ={post}/>
        <View style={{marginHorizontal: 15, marginTop: 10}}>
          <PostFooter post= {post}/>
        </View>
      </View>
  )}