import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import style from "./Style";
import { Users } from './user';

export default function Stories() {
  return (
      <View style= {{marginBottom: 14 , marginTop:10, height: "12%"  }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator ={false}
        >
          {Users.map((story, index)=>(
            <View key={index} style={{alignItems: "center", }}>
              <Image
                source={{
                  uri: story.image
                }}
                style= {style.stori}
                
              />
            
              <Text style={{color: '#fff'}}>
                {story.user.length > 10 ? story.user.slice(0,10).toLowerCase()+"...": story.user}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
)}