import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet,View, Text, FlatList, TouchableOpacity, Modal } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card';
import Ionicons from '@expo/vector-icons/Ionicons';




const Home = ({ navigation }: { navigation: any }) => {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of fresh air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta catch them all (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not so "final" fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ])
  const [modalOpen, setModalOpen] = useState(false);

  return (

    <View style={globalStyles.container} >

      <Modal visible={modalOpen} animationType='slide'>
        <View>
        <Ionicons name='close-circle' style={{...styles.modalToggle,...styles.modalClose}} onPress={ ()=>setModalOpen(false)} size={34} />
          <Text>heyyy</Text>
        </View>
      </Modal>

      <Ionicons name='add-circle' style={styles.modalToggle}  onPress={ ()=>setModalOpen(true)} size={34} />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />


    </View>

  )
}


const styles=StyleSheet.create({
modalToggle:{
  marginBottom:10,
  borderWidth:1,
  borderColor:'#f2f2f2',
  padding:10,
  borderRadius:10,
  alignSelf:'center'
},
modalClose:{
  marginTop:20,
  marginBottom:0
},
modalContent:{

  flex:1
}

})

export default Home;