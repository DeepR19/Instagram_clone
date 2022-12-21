import * as React from 'react'
import {Image, Text,View} from "react-native"
// import SignedInStack from './navigation';
// import AuthNavigation from './authNavigation';
import Navigator from "./navigation"
import MainHome from "./screens/HomeScreen/Home"
import NewPost from './screens/NewPost/NewPost';
import LoginScreen from "./screens/Login/Login"
import SignupScreen from './screens/Signup/Signup';

import Navigation from './navigation';
import AuthNavigation from './authNavigation';

export default function App() {
  return (
    <AuthNavigation/>
  
  );
}
