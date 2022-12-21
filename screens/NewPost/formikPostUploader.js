import React, { useState ,useEffect} from 'react'
import { View, Text, TextInput ,Image} from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider, Button } from 'react-native-elements'
// import validURL from 'valid-url'
import { firebase,db } from '../../firebase'

const placeHolderImage = 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'

export default function FormikPostUploader({navigation}) {
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)
    const [thumbnailURL, setThumbnailURL] = useState(placeHolderImage)

    const getUsername = ()=>{
        const user = firebase.auth().currentUser
        if(user){

            const unsunscribe = db.collection('users')
            .where("owner_uid" , "==", user.uid)
            .limit(1)
            .onSnapshot(snapshot => snapshot.docs.map(doc =>{
                setCurrentLoggedInUser({
                    username: doc.data().username,
                    profile_pic: doc.data().profile_pic
                })
            }))
            
            return unsunscribe
        }
    }

    // get current loggedIn user
    useEffect(()=>{
        getUsername()
    })

    const uploadPostToFirebase = (imageUrl, caption) => {
        const unSubscribe = db.collection('users')
                                .doc(firebase.auth().currentUser.email)
                                .collection('posts')
                                .add({
                                    imageUrl: imageUrl,
                                    user: currentLoggedInUser.username,
                                    profile_pic: currentLoggedInUser.profile_pic,
                                    owner_uid: firebase.auth().currentUser.uid,
                                    owner_email: firebase.auth().currentUser.email,
                                    caption: caption,
                                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                    likes: 0,
                                    likes_by_users: [],
                                    comments: []
                                })
                                .then(()=> navigation.goBack())

        return unSubscribe
    }


  return (

    <Formik 
        initialValues={{caption: '', imageUrl : ''}}
          onSubmit={values=>{
            uploadPostToFirebase(values.imageUrl, values.caption)
          }}
          validationSchema={Yup.object().shape({
            imageUrl : Yup.
                string()
                .url()
                .required('provide URL is required'),
            caption : Yup
                .string()
                .max(100, 'Caption has reached the character limit.')
                .required()
          })}
          validateOnMount={true}
      >

        {({handleChange, handleBlur, handleSubmit, setFieldTouched, touched, values, isValid, errors})=>(
            <>
                <View style = {{marginTop: 15,flexDirection: 'row',justifyContent: 'space-between'}}>

                    <View>
                        <Image source={{
                            uri:  'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'
                        }}
                        style ={{width: 100, height: 100, borderWidth: 2, borderColor : '#fff'}}/>
                    </View>

                    <View style={{flex: 1, marginLeft: 10}}>

                    <TextInput 
                            style={{color: '#fff', fontSize: 16}}
                          placeholderTextColor="#444"
                          placeholder="Phone number , username or email"
                          autoCapatilize = "none"
                          autoFocus={true}
                          onChangeText={handleChange('caption')}
                          onBlur={() => setFieldTouched('caption')}
                          value={values.caption}
                      />
                        {touched.caption && errors.caption &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.caption}</Text>
            }
                    </View>
                </View>
                <Divider width = {1} orientation='vertical' style={{marginTop: 15}}/>
                <TextInput
                    // onChangeText={e => setThumbnailURL(e)}
                    style={{color: '#fff', fontSize: 16 , margin:20}}
                    placeholder='Enter Image URL'
                    placeholderTextColor='gray'
                    onBlur={handleBlur('imageUrl')}
                    onChangeText={handleChange('imageUrl')}
                    value = {values.imageUrl}
                />
                {touched.imageUrl && errors.imageUrl &&
                    <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.imageUrl}</Text>
                } 

                <Button onPress={handleSubmit} title= "Share"  disabled={!isValid}/>
            </>
        )}
    </Formik>
  )
}