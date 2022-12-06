import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import style from "./Style";

export default function MAIN() {
  return (
    <View style={style.mainHeaderContainer}>
      <TouchableOpacity>
        <View style={style.mainHeader}>
          <Text style={{ fontSize: 23, fontFamily: 'sans-serif' ,color: 'white' }}>InstaGram</Text>
        </View>
      </TouchableOpacity>

      <View style={style.iconsContainer}>
      <TouchableOpacity>
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