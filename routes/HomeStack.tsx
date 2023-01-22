import react from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { View } from 'react-native';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';
import HomeDrawer from './HomeDrawer';


export type StackParams = {
  HomePage: undefined;
  Details: { 
    title: string;
    rating: number;
    body: string;
    key: string;
};

};

const Stack = createNativeStackNavigator <StackParams>();

export default function HomeStack() {

  return (

    <Stack.Navigator initialRouteName='HomePage' screenOptions={{
    
      headerTintColor: '#444',
      headerTitleAlign: 'center'
    }}>
      
      <Stack.Screen name="HomePage" options={{headerShown:false}}
      
       component={HomeDrawer} />
      <Stack.Screen name="Details" component={ReviewDetails} />
    </Stack.Navigator>


  )

}

