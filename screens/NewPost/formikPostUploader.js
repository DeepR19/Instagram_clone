import React, { useState } from 'react'
import { View, Text, TextInput ,Image} from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider, Button } from 'react-native-elements'
import validURL from 'valid-url'

const uploadPostSchema = Yup.object().shape({
    imageUrl : Yup.string().url().required('A URL is required'),
    caption : Yup.string().max(10, 'Caption has reached the character limit.')
})
const placeHolderImage = 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'

export default function FormikPostUploader({navigation}) {

    const [thumbnailURL, setThumbnailURL] = useState(placeHolderImage)
  return (
    <Formik
        initialValues={{caption: '', imageUrl : ''}}
        onSubmit={values => {
            console.log(values)
            console.log("Yout post was submitted successfully...")
            navigation.goBack()
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