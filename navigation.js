import {createStackNavigator} from '@react-navigation/stack'
import {createAppContainer} from "react-navigation"

import MainHome from "./screens/HomeScreen/Home"
import NewPost from "./screens/NewPost/NewPost"
import LoginScreen from './screens/Login/Login'
import SignupScreen from './screens/Signup/Signup'

const screens = {
  Home:{
    screen: MainHome
  },
  Login:{
    screen: LoginScreen
  },
  Signup:{
    screen: SignupScreen
  },
  NewPost:{
    screen: NewPost
  },
}

const Stack = createStackNavigator(screens)

export default createAppContainer(Stack)
