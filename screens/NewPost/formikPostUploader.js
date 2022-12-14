import React, { useState ,useEffect} from 'react'
import { View, Text, TextInput ,Image} from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider, Button } from 'react-native-elements'
import validURL from 'valid-url'
import { firebase,db } from '../../firebase'

const uploadPostSchema = Yup.object().shape({
    imageUrl : Yup.string().url().required('A URL is required'),
    caption : Yup.string().max(10, 'Caption has reached the character limit.')
})
const placeHolderImage = 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'

export default function FormikPostUploader({navigation}) {
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)
    const [thumbnailURL, setThumbnailURL] = useState(placeHolderImage)

    const getUsername = ()=>{
        const user = firebase.auth().currentUser
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
                                    createdAt: firebase.fireStore.FieldValue.serverTimestamp(),
                                    // likes: 0,
                                    likes_by_users: [],
                                    comments: []
                                })
                                .then(()=> navigation.goBack())

        return unSubscribe
    }


  return (
    <Formik
        initialValues={{caption: '', imageUrl : ''}}
        onSubmit={values => {
            uploadPostToFirebase(values.imageUrl, values.caption)
        }}
        validationSchema={uploadPostSchema}
        validateOnMount = {true}
    >
        {({handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
            <>
                <View style = {{marginTop: 15,flexDirection: 'row',justifyContent: 'space-between'}}>

                    <View>
                        <Image source={{
                            uri: validURL.isUri(thumbnailURL) ?
                                        thumbnailURL :
                                        placeHolderImage
                        }}
                        style ={{width: 100, height: 100, borderWidth: 2, borderColor : '#fff'}}/>
                    </View>

                    <View style={{flex: 1, marginLeft: 10}}>

                        <TextInput
                            style={{color: '#fff', fontSize: 20}}
                            multiline= {true}
                            placeholder='Write a caption...'
                            placeholderTextColor='gray'
                            onChange={handleChange('caption')}
                            onBlur={handleBlur('caption')}
                            value = {values.caption}
                        />
                    </View>
                </View>
                <Divider width = {1} orientation='vertical' style={{marginTop: 15}}/>
                <TextInput
                    onChangeText={e => setThumbnailURL(e)}
                    style={{color: '#fff', fontSize: 18 }}
                    placeholder='Enter Image URL'
                    placeholderTextColor='gray'
                    onChange={handleChange('imageUrl')}
                    onBlur={handleBlur('imageUrl')}
                    value = {values.imageUrl}
                />
                {console.log(thumbnailURL)}
                {errors.imageUrl && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                        {errors.imageUrl}
                    </Text>
                )}

                <Button onPress={handleSubmit} title= "Share"  disabled={!isValid}/>
            </>
        )}
    </Formik>
  )
}