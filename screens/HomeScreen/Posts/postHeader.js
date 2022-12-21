import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import style from "./style";

export default function PostHeader({post}) {
    return (
        <View style={{margin: 5,flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center', paddingRight: 20}}>
            <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Image
                    source={{uri: post.profile_pic}}
                    style={style.profile_pic}
                />
                <Text style={{color: 'white', marginLeft: 10, fontWeight: '400'}}>{post.user}</Text>
            </View>

            <Text style={{color: 'white', fontWeight: '00', fontSize: 20}}>...</Text>
        </View>

    )}