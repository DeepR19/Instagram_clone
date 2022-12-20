import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import style from "./style";
import {postFooterIcons} from "../../../DATA/POSTS/FooterData";

export default function PostFooter({post}) {
    return (
        <View>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={style.leftFooterIconsContainer}>
                    <Icon imgStyle={style.footerIcon} imgURL = {postFooterIcons[0].imageUrl}/>
                    <Icon imgStyle={style.footerIcon} imgURL = {postFooterIcons[1].imageUrl}/>
                    <Icon imgStyle={style.footerIcon} imgURL = {postFooterIcons[2].imageUrl}/>
                </View>
                <Icon imgStyle={style.footerIcon} imgURL = {postFooterIcons[3].imageUrl}/>
            </View>

            <View>
                <Text style = {{color: "#fff", fontWeight: '600'}}>
                    23 likes
                </Text>
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

// Likes of posts
const Likes = ({post})=>{
    <View style = {{flexDirection: 'row', marginTop: 4}}>
        <Text style = {{color: "#fff", fontWeight: '600'}}>
            23 likes
        </Text>
    </View>
}

// captions
const Captions = ({post}) => (
    <>
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
            // here is very awesome thing is happens
            //  !! is used here
            //  0 -> false
            //  1 -> true
            !!post.comments.length && (
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
                <Text style={{color: '#fff', marginTop : 5}}>
                    <Text style ={{fontWeight: '600'}}>
                        {comment.user} : 
                    </Text>
                    {comment.comment}
                </Text>
            </View>
        ))
    }
    </View>
)