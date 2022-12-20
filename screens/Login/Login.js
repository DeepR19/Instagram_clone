import { View, Text, TextInput,StyleSheet, Button, Image, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import { Formik } from 'formik'
import * as yup from "yup"
import { Validator } from 'email-validator'  // install thsi package  
import {db, firebase} from '../../firebase'


const INSTAGRAM_LOGO =
  'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'

const LoginScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.container}> 
      <View style={{ alignItems: "center" }}>
        <Image source={{
          uri: INSTAGRAM_LOGO
        }}
        style = {{width: 100, height: 100}}/>
      </View>

      <Formik 
          initialValues={{email: '',password: ''}}
          onSubmit={values=>{
            // onSignup(values.email, values.password, values.username)
            values => Alert.alert(JSON.stringify(values))
          }}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email()
              .required(),
            password: yup
              .string()
              .min(4)
              .max(10, 'Password should not excced 10 chars.')
              .required(),
          })}
          // validateOnMount={true}
      >

        {({handleChange, handleBlur, handleSubmit, setFieldTouched, touched, values, isValid, errors})=>(
            <>
                  
                  {/* Image */}
                  <View style={StyleSheet.LogoContainer}>
                      <Image source ={{uri: "https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-256.png"}} height={100} width={100}/>
                  </View> 

                  {/* Form */}
                  <View style={styles.wrapper}>

                    {/* email */}
                    <View style={[styles.inputField,
                    {borderColor: values ? values.email.length < 1  ? "red" : '#ccc': null}]}> 
                      <TextInput 
                          placeholderTextColor="#444"
                          placeholder="Phone number , username or email"
                          autoCapatilize = "none"
                          keyboardType = "email-address"
                          textContentType='emailAddress'
                          autoFocus={true}
                          onChangeText={handleChange('email')}
                          onBlur={() => setFieldTouched('email')}
                          value={values.email}
                      />
                        {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
            }
                    </View>


                   
                    {/* password */}
                    <View style={[styles.inputField,{
                      borderColor: 1>values.password.length || values.password.length >= 6 ? '#ccc' : 'red'
                    }]}> 
                      

<TextInput
              value={values.password}
              // style={inputStyle}
              onChangeText={handleChange('password')}
                          placeholderTextColor="#444"
                          placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            
            {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
            }
                    </View>
                    <View style={{alignItems: 'flex-end', marginBottom: 30}}>
                      <Text style={{color: '#6bb0f5'}}>Forgot Password? </Text>
                    </View>
                  </View>
                  {console.log(isValid)}

                
                <Button
              color="#3740FE"
              title='Login'
              disabled={!isValid}
              onPress={handleSubmit}
            />

                <View style={styles.signupContainer}>
                  <Text>Don't have an account?</Text>
                  <TouchableOpacity>
                    <Text style={{color: "#6bb0f5"}} >click here</Text>
                  </TouchableOpacity>
                </View>

            </>

      )}
    </Formik>
    </View>
    </>

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
    marginTop: 60,
    
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
    backgroundColor: '#0096f6' ,
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
    justifyContent: 'center',
    marginTop: 50
  }
})

export default LoginScreen