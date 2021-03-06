/* eslint-disable */
import axios from 'axios'
import qs from 'qs'; 
import React,{useState,useEffect} from 'react'
import { StyleSheet,TextInput, Text, View,TouchableOpacity,Alert  } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function Login({navigation}) {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const Regis = ({navigation})=>{
    console.log("wddew")
    console.log(navigation)
    // navigation.navigate('Register')
   }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('okeeee')
      console.log("Data Ada? =>", jsonValue)
      var parse = JSON.parse(jsonValue);
      if(!parse){
        // alert("Belum login!")
        
      }else{
        // alert("Sudah login!")
        navigation.navigate('Home')

      }
      return jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log(jsonValue)

    } catch(e) {
      console.log(e)
    }
  }



  

  useEffect(() => {
    getData();

  }, []);

    const showAlert = () =>
    Alert.alert(
      "Logout",
      "Apakah Anda Akan Keluar ?",
      [
        {
          text: "Batal",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: () => keluar() 
      
        }
      ]
    );

  const keluar =  () =>{
    
    const removeValue = async () => {
      try {
        await AsyncStorage.removeItem('okeeee')

      } catch(e) {
        alert(e)
      }
    
      console.log('Done.')
    }
    console.log("d ")
    alert("Berhasil logout")
    removeValue()

  } 


   const onPress =()=>{
      var  e = email.email;
      var  p =  password.password;
      var url = "https://easysurvey.id/api/login/";
      // console.log(e,p==undefined)
      // return false
      if(e==undefined || p==undefined){
        alert("Mohon isi Email Dan Password")
      }else{
          var data = {
            'username': e,
            'password': p
          }
          // console.log(data)
          data = qs.stringify(data)
          // console.log(data)  
    
          axios.post(url, 
              data
          )
          .then(function (e) {
            var hasil = e.data;
            if(hasil.status==0){
              alert(hasil.message)
            }else{
              alert(hasil.message) 
              // console.log(hasil)
              // berhasil login
              const value = {
                nama : hasil.data.nama_lengkap,
                id_user : hasil.data.id_user,
                is_agent : hasil.data.is_agent,
                no_hp : hasil.data.no_hp,
                isLogin:true
              }
              // console.log(value ,"ddddd")

              const storeData = async (value) => {
                try {
                  const jsonValue = JSON.stringify(value)
                  await AsyncStorage.setItem('okeeee', jsonValue)
                  // console.log(jsonValue )
                } catch (e) {
                  console.log(e)
                  // saving error
                  alert(e)
                }
              }
              storeData(value)
              navigation.navigate('Home')


            }
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    

   }

    // console.log(email,password)
    return (  
    <View style={styles.container}>
        <View style={styles.ConteinertextAwal}>
            <Text style={styles.textAwal}>Login</Text>
        </View>
        <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Email???"
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail({email:text})}/>
        </View>
        <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Password???"
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword({password:text})}/>
        </View>

        <TouchableOpacity style = {styles.loginBtn} onPress={onPress}>
           <Text style = {styles.loginText}> LOGIN </Text>
         </TouchableOpacity>
         <TouchableOpacity style = {styles.loginBtn} onPress={navigation.navigate('Register')}>
           <Text style = {styles.loginText}> Register </Text>
         </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}  onPress={showAlert} >Logot SONTOEH</Text>
        </TouchableOpacity>

      </View>
       
    );
}

const styles = StyleSheet.create({
    ConteinertextAwal:{
        // flex:1,
        flexDirection:'row'
    },
    textAwal:{
        // flex:1,
        color:'#fb5baf',
        flexDirection:'row',
        fontSize:50,
        paddingBottom:20,
        fontWeight:"500",
        // fontStyle:
    },
    
    container: {
        flex: 1,    
        backgroundColor: "#465661",    
        alignItems: "center",    
        justifyContent: "center",    
      },
      inputView:{
        width:"80%",    
        backgroundColor:"#465881" ,    
        borderRadius:25,    
        height:50,    
        marginBottom:20,    
        justifyContent:"center" ,    
        padding:20
    
      },
      inputText:{
        height:50,    
        color:"white"    
      },
      loginText:{
        color:"white",    
        fontSize:20    
      },
      loginBtn: {
        width: "80%" ,
        backgroundColor: "#fb5b5a",   
        borderRadius: 25,   
        height: 50,   
        alignItems: "center" ,   
        justifyContent: "center" ,   
        marginTop: 40,
        marginBottom: 10
   
      },

})
