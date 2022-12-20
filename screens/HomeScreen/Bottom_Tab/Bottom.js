import {View, Text, TouchableOpacity, Image} from 'react-native'
import {useState} from "react"
import {Divider} from "react-native-elements"
import style from './style'
import { StyleSheet } from "react-native";

const hereStyle = StyleSheet.create({
    profilePic : (action = "") => ({
        borderRadius: 50,
        borderWidth: action === "Profile" ?.6:0,
        borderColor: "#fff"
    })
})

export default function BottomTabs ({icons}){
    const[ action, setAction] = useState("Home")

    const Icon = ({icon}) => (
        <TouchableOpacity onPress ={()=> setAction(icon.name)}>
            <Image source = {{
                uri : action === icon.name ? icon.active : icon.inactive
            }}
            style = {[
                style.icon,
                icon.name === "Profile" ? hereStyle.profilePic() : null,
                action === "Profile" && icon.name === action ? hereStyle.profilePic(action): null
            ]}
            />
        </TouchableOpacity>
    )
    return(
        <View style ={style.wrapper} >
            <Divider width={1} orientation = 'vertical'/> 
            <View style= {style.container}>
                {
                    icons.map((icon, index)=>(
                            <Icon key={index} icon = {icon}/>
                        ))
                    }
            </View>
        </View>
    )
}