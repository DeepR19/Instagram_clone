import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from "react-navigation"

import MainHome from "./screens/HomeScreen/Home"
import NewPost from "./screens/NewPost/NewPost"
import {Login} from './login'
import {Signup} from './Signup'
import FormikPostUploader from './screens/NewPost/formikPostUploader'
import SignupScreen from './screens/Signup/Signup'

const screens = {
  Login:{
    screen: Signup
  },
  Signup:{
    screen: SignupScreen
  },
  
}

const Stack = createStackNavigator(screens)

export default createAppContainer(Stack)
