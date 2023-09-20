import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, FlatList } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function TaskList({data}) {

    return (
        <View style={styles.conteiner}>
            <TouchableOpacity>
                <Ionicons name='md-checkmark-circle' size={30} color='#A9A9A9' />
            </TouchableOpacity>
            <View>
                <Text style={styles.task}>{data.task}</Text>
            </View>
        </View>
    );
    }


    const styles = StyleSheet.create({
        conteiner:{
          flex:1,
          margin:8,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10,
          padding: 6,
          elevation:1.5,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset:{
            width:1,
            height:3
          },
          backgroundColor: '#fff',
      
        },
        task:{
            color: '#1C1C1C',
            fontSize: 15,
            paddingLeft:5,
            paddingRight: 10
        }
      
      });    