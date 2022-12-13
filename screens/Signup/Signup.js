import { View, Text, TextInput, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"
import { Validator } from 'email-validator'  // install thsi package  
import {db, firebase} from '../../firebase'


const LOGO = "https://cdn2.iconfinder.com/data/icon/social-media-2285/512/1_Instagram_colored_svg_1-512.png"

const SignupScreen = ({navigation}) => {
  const SignupForm = Yup.object().shape({
    email: Yup.string().email().required(
      'An email is required...'
    ),
    username: Yup.string().email().required().min(6,
      'An username is required...'
    ),
    password: Yup.string().required().min(8, "Your password is of atleast 8 characters")
  })


  // signup using firebase
  const onSignup = async (email, password, username)=>{
    try{
        const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log("registratoin on firebase is done!!")

        // make collection in fireStore6
        db.collection('users')
        .doc(authUser.user.email)
        .set({
          owner_uid: authUser.user.uid,
          username,
          email: authUser.user.email,
          profile_pic: await getRandomPic()
        })
    }catch(err){
      Alert.alert(err)
    }
  }

  // get random profile pic
  const getRandomPic = async ()=>{
      const res = await fetch("https://randomuser.me/api")
      const data = await res.json()
      return data.results[0].picture.large
  }

  return (
    <View style={StyleSheet.container}> 

      <Formik 
          initialValues={{email: '',password: ''}}
          onSubmit={values=>{
            onSignup(values.email, values.password, values.username)
          }}
          validationSchema={SignupForm}
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

                    {/* email */}
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


                    {/* username */}
                    <View style={[styles.inputField,{
                      borderColor: 1>values.password.length || values.password.length >= 6 ? '#ccc' : 'red'
                    }]}> 
                      <TextInput 
                          placeholderTextColor="#444"
                          placeholder="username"
                          autoCapatilize = "none"
                          textContentType='username'
                          autoCorrect={false}
                          secureTextEntry = {true}
                          onChangeText={handleChange('username')}
                          onBlur={handleBlur('username')}
                          value={values.username}
                      />
                    </View>

                    {/* password */}
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
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </Pressable>

                <View style={styles.signupContainer}>
                  <Text>Already have an account?</Text>
                  <TouchableOpacity>
                    <Text style={{color: "#6bb0f5"}} onPress={navigation.push('/login')}>click here</Text>
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

export default SignupScreen