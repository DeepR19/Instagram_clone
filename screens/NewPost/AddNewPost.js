import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import FormikPostUploader from './formikPostUploader'

export default function AddNewPost({navigation}) {
  return (
    <View style = {styles.container}>
        <Header navigation={navigation}/>
        <Divider width={1} orientation='vertical'/>
        <FormikPostUploader navigation={navigation}/>
    </View>
  )
}

const Header = ({navigation })=>(
    <View style = {styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={{
                uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'
            }}
            style = {{width: 30, height: 30}}/>
        </TouchableOpacity>
        
        <Text style={styles.headerText}>Add New Post</Text>
        <Text></Text>
    </View>
)

