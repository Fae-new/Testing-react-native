import React from 'react'
import {View,Text,StyleSheet, StatusBar,Image,ImageBackground} from 'react-native'
import {Entypo } from '@expo/vector-icons';



const Header = ({navigation}:{navigation:any}) => {
  return (
<ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>
{/* <StatusBar barStyle={null}/> */}

<Entypo name="menu" size={25} color="black" onPress={()=>navigation.openDrawer()} style={styles.icon}/>
<View style={styles.headerTitle}>
  <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
    <Text style={styles.headerText}>GameZone </Text>
</View>


</ImageBackground>
  )
}



const styles=StyleSheet.create({
header:{
    width:'100%',
    height:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:StatusBar.currentHeight

 
},
headerText:{
    fontWeight:'bold',
    fontSize:20,
    color:'#333',
    letterSpacing:1,
 
},
icon:{
position:'absolute',
left:5
},
headerImage:{
  width:26,
  height:26,
  marginHorizontal:10
},
headerTitle:{
  flexDirection:'row'
}

})


export default Header