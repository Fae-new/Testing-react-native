import React from 'react'

import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal,Keyboard,TouchableWithoutFeedback } from 'react-native'


type btnProps={
    text:string,
    onPress:()=>void;
}

const FlatButton = ({text,onPress}:btnProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
<Text style={styles.buttonText}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
button:{
borderRadius:8,
paddingVertical:14,
paddingHorizontal:10,
    backgroundColor:'#f01d71'
},
buttonText:{
color:'white',
textTransform:'uppercase',
fontWeight:'bold',
fontSize:16,
textAlign:'center'
}

})

export default FlatButton;