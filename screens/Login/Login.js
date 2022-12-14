import { View, Text,StyleSheet, TextInput, Pressable,Alert, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"
import { Validator } from 'email-validator'  // install thsi package  

import {firebase} from '../../firebase'

const LOGO = "https://cdn2.iconfinder.com/data/icon/social-media-2285/512/1_Instagram_colored_svg_1-512.png"

const LoginScreen = ({navigation}) => {

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required(
      'An email is required...'
    ),
    password: Yup.string().required().min(8, "Your password is of atleast 8 characters")
  })

  const onLogin = async (email, password)=> {
    try{
      await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log("firebase done")
    }catch(err){
      Alert.alert(err.message, [
        {text: "OK",
      onPress: ()=>console.log('OK'),
    style: 'cancel'},
        {
          text: 'SignUp',
          onPress : ()=>navigation.push('/signup')
        }
      ])
    }
  }

  return (
    <View style={StyleSheet.container}> 

      <Formik 
          initialValues={{email: '',password: ''}}
          onSubmit={values=>{
            onLogin(values.email, values.password)
          }}
          validationSchema={LoginFormSchema}
          validateOnMount={true}
      >

        {(handleChange, handleBlur, handleSubmit, values, isValid)=>(
            <>
                  
                  {/* Image */}
                  <View style={StyleSheet.LogoContainer}>
                      <Image source ={{uri: LOGO}} height={100} width={100}/>
                  </View> 

                  {/* Form */}
                  <View style={styles.wrapper}>
                    <View style={[styles.inputField,
                    {borderColor: values.email.length < 1 || Validator.validate(values.email) ? "#ccc" : 'red'}]}> 
                      <TextInput 
                          placeholderTextColor="#444"
                          placeholder="Phone number , username or email"
                          autoCapatilize = "none"
                          keyboardType = "email-address"
                          textContentType='emailAddress'
                          autoFocus={true}
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
                      />
                    </View>
                    <View style={[styles.inputField,{
                      borderColor: 1>values.password.length || values.password.length >= 6 ? '#ccc' : 'red'
                    }]}> 
                      <TextInput 
                          placeholderTextColor="#444"
                          placeholder="Password"
                          autoCapatilize = "none"
                          textContentType='password'
                          autoCorrect={false}
                          secureTextEntry = {true}
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          value={values.password}
                      />
                    </View>
                    <View style={{alignItems: 'flex-end', marginBottom: 30}}>
                      <Text style={{color: '#6bb0f5'}}>Forgot Password? </Text>
                    </View>
                  </View>

                  <Pressable titleSize={20} 
                      style={styles.button(isValid)}
                      onPress={handleSubmit}
                      disabled={!isValid}
                    >
                    <Text style={styles.buttonText}> Log In</Text>
                  </Pressable>

                <View style={styles.signupContainer}>
                  <Text>Don't have an account?</Text>
                  <TouchableOpacity>
                    <Text style={{color: "#6bb0f5"}} onPress={navigation.push('/signup')}>click here</Text>
                  </TouchableOpacity>
                </View>

            </>

      )}
    </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 12
  } 
  ,LogoContainer:{
    alignItems: 'center',
    marginTop: 60
  },
  wrapper:{
    marginTop: 80
  },
  inputField:{
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#fafafa",
    marignBottom: 10,
    borderWidth: 1
  },
  button: isValid => ({
    backgroundColor: isValid ? '#0096f6' : '#9acaf7',
    alignItems: 'center',
    minHeight: 42,
    borderRadius: 4,
    jsutifyContent: 'center'
  }),
  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20
  },
  signupContainer:{
    flexDirection: 'row',
    width: '100%',
    jsutifyContent: 'center',
    marginTop: 50
  }
})

export default LoginScreen