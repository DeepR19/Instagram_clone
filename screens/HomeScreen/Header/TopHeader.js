import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import style from "./Style";
import { firebase } from '../../../firebase';

const handleSignout = async ()=>{
  try {
    await firebase.auth().signOut()
    console.log("signed out successfully")
  } catch (error) {
    console.log(error)
  }
}

export default function MAIN({navigation}) {


  return (
    <View style={style.mainHeaderContainer}>
      <TouchableOpacity onPress={handleSignout}>
        <View style={style.mainHeader}>
          <Image
            source={require("../../../assets/headerImage.png")}
              style= {style.headerImage}
          />
        </View>
      </TouchableOpacity>

      <View style={style.iconsContainer}>
      <TouchableOpacity onPress={()=>navigation.navigate("NewPost")}>
       <Image
          source={{
            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png"
          }}
          style= {style.icon}
       />
      </TouchableOpacity>
        
      <TouchableOpacity>
       <Image
          source={{
            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png"
          }}
          style= {style.icon}
       />
      </TouchableOpacity>
        
      <TouchableOpacity>
        <View style={style.unreadBadge}>
          <Text style={style.unreadBadgeText}>11</Text>
        </View>
       <Image
          source={{
            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png"
          }}
          style= {style.icon}
       />
      </TouchableOpacity>
        
      </View>
    </View>
  );
}