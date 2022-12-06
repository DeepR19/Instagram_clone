import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import style from "./style";
import {postFooterIcons} from "../../DATA/POSTS/FooterData";
import { color } from 'react-native-elements/dist/helpers';

export default function PostFooter({post}) {
    return (
        <View>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={style.leftFooterIconsContainer}>
                    <Icon imgStyle={style.footerIcon} imgURL = {postFooterIcons[0].imageURL}/>
                    <Icon imgStyle={style.footerIcon} imgURL = {postFooterIcons[0].imageURL}/>
                    <Icon imgStyle={style.footerIcon} imgURL = {postFooterIcons[0].imageURL}/>
                </View>
                <Icon imgStyle={style.footerIcon} imgURL = {postFooterIcons[0].imageURL}/>
            </View>

            <View>
                
                <Captions post= {post}/>
                <CommentSection post={post}/>
                <Comments post={post} />
            </View>

        </View>
    )}


// Top side of footer
const Icon = ({imgStyle, imgURL})=>(
    <TouchableOpacity>
        <Image style={imgStyle} source = {{uri: imgURL}}/>
    </TouchableOpacity>
)

// captions
const Captions = ({post}) => (
    <>
        {/* show number of likes */}
        <Text style={{color: '#fff'}}>{post.likes} likes</Text>

        {/* show caption of the user */}
        <Text style={{marginTop: 5, color: '#fff'}}>

            <Text style={{fontWeight: '600'}}>{post.user} : #</Text>
            <Text>{post.caption}</Text>
        </Text>
    </>
)

// show number of line
const CommentSection = ({post})=>(
    <View style ={{marginTop: 6}}>
        {
            post.comments.length && (
                <Text style={{color: 'gray'}}>
                View
                {post.comments.length > 1 ? ' all ' : ' '} 
                {post.comments.length} 
                {post.comments.length > 1 ? ' comments ' : ' comment '} 
            </Text>
            ) 
        }
    </View>
)

// show all comments
const Comments = ({post})=>(
    <View style ={{marginTop: 8, marginLeft: 6}}>{
        post.comments.map((comment, index)=>(
            <View key={index}>
                <Text style={{color: '#fff'}}>
                    <Text style ={{fontWeight: '600'}}>
                        {comment.comment}
                    </Text>
                </Text>
            </View>
        ))
    }
    </View>
)