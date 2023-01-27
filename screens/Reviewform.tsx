import React from 'react'

import { View, TextInput, Button, Text } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import type { review } from '../screens/Home'
import * as yup from 'yup'
import FlatButton from '../shared/Button'

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number between 1 and 5', (val) => Number(val) < 6 && Number(val) > 0)

})

const Reviewform = ({ addReview }: { addReview: (values: review) => void }) => {
    return (

        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => {
                    addReview({ ...values, key: Math.random().toString() })
                    actions.resetForm();
                }}
                validationSchema={reviewSchema}
            >

                {(formikProps) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.title && formikProps.errors.title} </Text>
                        <TextInput
                            style={{...globalStyles.input,minHeight:80}}
                            placeholder='Review Body'
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                            multiline
                            onBlur={formikProps.handleBlur('body')}
                        
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.body && formikProps.errors.body} </Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            keyboardType='numeric'
                            onBlur={formikProps.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.rating && formikProps.errors.rating} </Text>
                       <FlatButton text='Submit' onPress={()=>{formikProps.handleSubmit()}}></FlatButton>
                       
                    </View>

                )}

            </Formik>


        </View>
    )
}

export default Reviewform