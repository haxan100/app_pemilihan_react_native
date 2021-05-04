/* eslint-disable */
import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const SplasSeceren = () => {
    return (
        <View style={styles.container}>
            <View style={styles.atasgambar}> 
                <View style={styles.containerGambar}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
            <View style={styles.containertext} >
                <Text>Pilihan Anda</Text>
                <Text>Menentukan Masa Depan</Text>
            </View>
            </View>
            <View style={styles.containerBawah}>
             <Text>version 0.1</Text>
            </View>

        </View>
    )
}

export default SplasSeceren

const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 150,
  },atasgambar:{
      flex:1,
      flexDirection:'column',
    //   justifyContent:'center',  
      alignItems:'center'    
  },
  container:{
      flex:1
  },
  
  containerGambar:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    

    },
  containertext:{      
      flexDirection:'column',
      flex:1,
      
      alignItems:'center',
      justifyContent:'center'
  }
  ,containerBawah:{
      alignItems:'center'
  }
})
