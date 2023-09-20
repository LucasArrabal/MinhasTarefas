import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, FlatList } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TaskList from './src/components/TaskList';

export default function App() {
  const [task, setTask] = useState([
    {key : 1, task:'task 1'},
    {key : 2, task:'task 1'},
    {key : 3, task:'task 1'},
    {key : 4, task:'task 1'},
    {key : 5, task:'task 1'}
  ]);

  return (
    <SafeAreaView style={styles.conteiner}>
      <StatusBar backgroundColor="#483D8B"  barStyle='#483D8B'/>
      <View>
      <Text style={styles.titulo}>Minhas Tarefas</Text>
      </View> 

      {/*lista */}
      <FlatList
      showsHorizontalScrollIndicator={false}
      data={task}
      keyExtractor={(item) => String(item.key)}
      renderItem={({item}) => <TaskList data={item} />}
      />

      
      
      <TouchableOpacity style={styles.fab}>
        <Ionicons name='ios-add' size={35} color="#fff"/>
      </TouchableOpacity>
    </SafeAreaView>
  );
  }

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor: '#483D8B'

  },
  titulo:{
    fontSize: 30,
    marginTop: 20,
    paddingBottom: 10,
    textAlign:'center',
    color: '#fff',
    
  },
  fab:{
    position: 'absolute',
    width:60,
    height:60,
    backgroundColor: '#191970',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 30,
    right:25,
    bottom:25,
    elevation:2,
    zIndex:9,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset:{
      width:1,
      height:3
    }
  
  },
  input:{

  },
  btn:{

  },
  btnText:{

  }

});


