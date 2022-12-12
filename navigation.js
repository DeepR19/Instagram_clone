import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from "@react-navigation/native"
import MainHome from "./screens/HomeScreen/Home"
import NewPost from "./screens/NewPost/NewPost"


const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}

const SignedInStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName = "MainScreen"
            screenOptions = {screenOptions}
        >
            <Stack.Screen name="MainScreen" component={MainHome}/>
            <Stack.Screen name="NewPost" component={NewPost}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SignedInStack