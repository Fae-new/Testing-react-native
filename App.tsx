
import 'react-native-gesture-handler';


import About from './screens/About';
import Home from './screens/Home';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ReviewDetails from './screens/ReviewDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeStack from './routes/HomeStack';

import Header from './shared/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })

  if (!fontsLoaded) { return null }




  return (

    <NavigationContainer>
     
      <Tab.Navigator screenOptions={({ route }) => ({headerShown: false,})}>
        <Tab.Screen name="Home"  component={HomeStack}
          options={{ tabBarIcon: ({focused}) => (<Ionicons name={focused?'home':'home-outline'} size={30}  />) }} />
        <Tab.Screen name="About"
          options={{
            header: ({ navigation }) => <Header navigation={navigation} />,
             headerShown: true, 
            headerStyle: { backgroundColor: 'gold' },
            tabBarIcon: ({focused}) => (<Ionicons name={focused?'boat':'boat-outline'} size={30} />)

          }} component={About} />
      
      </Tab.Navigator>
    </NavigationContainer>

  )

}

