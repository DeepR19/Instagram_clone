import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import style from "./style";

export default function PostImage({post}) {
    return (
        <View
            style={{
                width: '100%',
                height: 450
            }}
        >

            <Image
                source={{
                    uri: post.imageURL
                }}
                style={{
                    height: '100%',
                    resizeMode: 'cover',
                }}
            />
        </View>
    )}