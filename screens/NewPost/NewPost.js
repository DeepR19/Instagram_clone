import React from "react"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AddNewPost from "./AddNewPost"

export default function NewPost({navigation}){
    return(
        <SafeAreaView style={{backgroundColor: "#000", flex: 1}}>
            <AddNewPost navigation={navigation}/>
        </SafeAreaView>
    )
}