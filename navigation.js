import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainHome from "./screens/HomeScreen/Home"
import LoginScreen from './screens/Login/Login'
import NewPost from "./screens/NewPost/NewPost"
import SignupScreen from './screens/Signup/Signup'


const Stack = createNativeStackNavigator()

export const SignedOutStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={MainHome} />
        <Stack.Screen name="NewPost" component={NewPost}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

