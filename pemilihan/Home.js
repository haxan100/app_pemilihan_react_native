/* eslint-disable */

import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
    const [nama, setNama] = useState('')
    
  const getData = async () => {
      console.log({nama})
    try {
      const jsonValue = await AsyncStorage.getItem('okeeee')
    //   console.log(jsonValue)
      var parse = JSON.parse(jsonValue);
    //   console.log(parse.nama)
    //   setNama ="jsjsjsjsjsj";


      if(!parse){
        // alert("Belum login!")
        navigation.navigate('Home')        
      }
      return jsonValue != null ? JSON.parse(jsonValue) : null;


    } catch(e) {
      console.log(e)
    }
  }


  useEffect(() => {
    getData();


  }, []);


    return (
        <View>
            <Text>Halo {nama}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
