/* eslint-disable */
import axios from 'axios'
import React,{useState} from 'react'
import { StyleSheet,TextInput, Text, View,TouchableOpacity } from 'react-native'
import qs from 'qs'; 



export default function Login() {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
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
            placeholder="Email…"
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail({email:text})}/>
        </View>
        <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Password…"
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword({password:text})}/>
        </View>

        <TouchableOpacity style = {styles.loginBtn} onPress={onPress}>
           <Text style = {styles.loginText}> LOGIN </Text>
         </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
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
