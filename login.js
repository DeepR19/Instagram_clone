 // Formik x React Native example
 import React from 'react';
 import { Button, TextInput, View } from 'react-native';
 import { Formik } from 'formik';
import * as Yup from "yup"

 const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    username: Yup.string().email().required().min(6,
      'An username is required...'
    ),
    password: Yup.string().required().min(8, "Your password is of atleast 8 characters")
  })
 export const Login = props => (
   <Formik
     initialValues={{ email: '' }}
     onSubmit={values => console.log(values)}
    //  validationSchema={SignupSchema}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
 );