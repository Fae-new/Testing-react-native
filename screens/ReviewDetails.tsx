import { RouteProp } from '@react-navigation/native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import Card from '../shared/Card'
import { globalStyles,images } from '../styles/global'
import type {StackParams} from '../routes/HomeStack'




type Props = NativeStackScreenProps<StackParams, 'Details'>;


const ReviewDetails = ({ route, navigation }: Props) => {


const ratingImg=route.params.rating

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={{marginBottom:5}}> {route.params.title}</Text>
                <Text> {route.params.body}</Text>
                <View style={styles.rating}>
                    <Text style={{fontWeight:'bold'}}>Rating: </Text>
                    <Image source={images[ratingImg-1]} />
                </View>
            </Card>

        </View>
    )
}
const styles = StyleSheet.create({
    rating: {
flexDirection:'row',
justifyContent:'center',
paddingTop:16,
marginTop:16,
borderTopWidth:1,
borderTopColor:'#eee'
    }

})



export default ReviewDetails;