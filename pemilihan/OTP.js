/* eslint-disable */

import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import qs from 'qs'; 
export default function Home() {
const [satu, setSatu] = useState()
const [dua, setDua] = useState()
const [tiga, setTiga] = useState()
const [empat, setEmpat] = useState()


const verif =()=>{
    var  a = satu.satu ;
    var b = dua.dua ;
    var c = tiga.tiga;
    var d = empat.empat ;
    var otp = a+""+b+""+""+c+""+d;

    var url = "https://easysurvey.id/api/verifikasiOTP/";

    if(a==undefined || b==undefined ||c==undefined ||d==undefined){
      alert("Mohon isi Kolom!")
    }else{
        var data = {
          kode_otp:otp,
          no_hp : '85155068925'
        }
        // console.log(data)
        data = qs.stringify(data)
        console.log(data)  
  
        axios.post(url, 
            data
        )
        .then(function (e) {
          var hasil = e.data;
          if(hasil.status==0){
            alert(hasil.message)
          }else{
            alert(hasil.message) 

          }
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  

 }

 
const resend =()=>{
    const noHp = "85155068925";

    var url = "https://easysurvey.id/api/getOTP/";

  
        var data = {
          no_hp : noHp
        }
        // console.log(data)
        data = qs.stringify(data)
        console.log(data)  
  
        axios.post(url, 
            data
        )
        .then(function (e) {
          var hasil = e.data;
          console.log(hasil)
          if(hasil.status==0){
            alert(hasil.message)
          }else{
            alert(hasil.message) 

          }
        })
        .catch(function (error) {
          console.log(error);
        });

    
  

 }









    const Blue = "#52ACFF" ;
    const light_Gray = "#52AdddFF" ;
    return (
        <View style={styles.containerawal}>
            
            <Text style={styles.textES}>Easy Survey</Text>
            <View style={styles.containerSMS}>
                <Text>Kami mengirimkan Kode OTP </Text>
                <Text  style={styles.Nomor} >Di Kirim Ke 089444444 </Text>
            </View>
            <View style={styles.textInputGroup}>
                <TextInput 
                selectionColor={Blue}


                    keyboardType="number-pad" 
                    style={styles.TextInput}  onChangeText={text => setSatu({satu:text})}
                    
                    />
                <TextInput keyboardType="number-pad"    onChangeText={text => setDua({dua:text})} style={styles.TextInput} />
                <TextInput  keyboardType="number-pad"   onChangeText={text => setTiga({tiga:text})} style={styles.TextInput} />
                <TextInput keyboardType="number-pad"    onChangeText={text => setEmpat({empat:text})} style={styles.TextInput} />
            </View>

            <Text>Tidak Dapat Kode OTP ?</Text>

            <TouchableOpacity onPress={resend} >
                <Text style={{color:'blue'}}>Kirim Ulang Kode OTP</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.verif} onPress={verif}>
                <Text style={styles.textVerif}>Verifikasi</Text>
            </TouchableOpacity>            
        </View>
    )
}

const styles = StyleSheet.create({
    verif:{
        marginTop:20,
        backgroundColor:'#52ACFF',
        borderRadius:10,
        padding:20,
        alignItems:'center',
        width:300
    },
    textVerif:{
        color:'#FFFFFF',
        fontSize:15

    },
    containerawal:{
        paddingTop:50,
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#E5E5E5'
    },
    textES:{
        fontSize:28,
        alignSelf:'center'
    },containerSMS:{
        paddingTop:50,        
        flexDirection:'column',
        alignItems:'center',
    },
    Nomor:{
        paddingTop:20,       
        fontSize:20
    },
    TextInput:{
        borderRadius:10,
        borderColor:'black',
        height: 40,
        margin: 12,
        borderWidth: 1,
        color:'white',
        backgroundColor:'#52ACFF',
        alignItems:'center',
        marginLeft:19,
        maxWidth:30,
    },
    textInputGroup:{
        flexDirection:'row'
    }


})
