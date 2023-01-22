import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import { globalStyles } from '../styles/global'
// import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Header from '../shared/Header';

const Drawer = createDrawerNavigator();

const HomeDrawer = ({ navigation }: { navigation: any }) => {


  return (

<Drawer.Navigator screenOptions={{header:({navigation})=><Header navigation={navigation}/>}}>

<Drawer.Screen name='HomeDrawer' component={Home}/>

    </Drawer.Navigator>
  )
}



export default HomeDrawer