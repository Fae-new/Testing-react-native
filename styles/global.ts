import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex:1,
        padding:24,
      
    },
    titleText:{
        fontFamily:'Nunito-bold',
        fontSize:19,
        color:'#333'
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20
    }
})

export const images=[
    require('../assets/rating-1.png'),
    require('../assets/rating-2.png'),
    require('../assets/rating-3.png'),
    require('../assets/rating-4.png'),
    require('../assets/rating-5.png')
]
