import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, FlatList, Modal } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TaskList from './src/components/TaskList';
import * as Animatable from 'react-native-animatable';

const AnimatableBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const [task, setTask] = useState([]);
  const[open , setOpen] = useState(false);
  const[input , setInput] = useState(' ');

  function handleAdd(){
    if(input === '') return;
    
    const data = {
      key: input,
      task: input
    };

    setTask([...task, data]);
    setOpen(false);
    setInput('');
  }

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

      <Modal animationType='slide' transparent={false}  visible={open}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setOpen(false)}>
              <Ionicons style={{marginLeft: 5 , marginRight:5}} name='md-arrow-back' size={40} color='#fff'/>
            </TouchableOpacity>
            <Text style={styles.modalTitulo}>Nova Tarefa</Text>
          </View>

          <Animatable.View style={styles.modalBody} animation="fadeInUp" useNativeDriver>
            <TextInput 
            multiline={true}
            placeholder='Nova tarefa'
            placeholderTextColor="#483D8B"
            style={styles.input}
            value={input}
            onChangeText={(texto) => setInput(texto)}
            />

            <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
              <Text style={styles.handleAddText}>Registrar</Text>
            </TouchableOpacity>
          </Animatable.View>
        </SafeAreaView>
      </Modal>
      
      <AnimatableBtn style={styles.fab}
       useNativeDriver
       animation="bounceInUp" 
       duration={1500} 
       onPress= { () => setOpen(true)}
       >
        <Ionicons name='ios-add' size={35} color="#fff"/>
      </AnimatableBtn>
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
  modal:{
    flex:1,
    backgroundColor: '#483D8B'
  },  
  modalHeader:{
    marginLeft:10,
    marginTop:20,
    flexDirection: 'row',
    alignItems:'center'

  },
  modalTitulo:{
    marginLeft: 15,
    fontSize:30,
    color:'#fff'
  },
  modalBody:{
    marginTop:15
  },
  input:{
    backgroundColor:'#fff',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop:30,
    padding:9,
    height:80,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 10,
  },
  handleAdd:{
    backgroundColor: 'green',
    marginTop: 20, 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight:10, 
    height:40,
    borderRadius: 10,
  },
  handleAddText:{
    fontSize:20,
  }


});


