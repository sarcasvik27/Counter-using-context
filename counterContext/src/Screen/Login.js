import React, { useState } from 'react';
import { Text, View ,StyleSheet, Pressable} from 'react-native';
import InputBox from '../Components/InputBox';
import Button from '../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";

const Login = ({navigation}) => {
  const [email,setemailid]=useState("")
  const [password,setpassword]=useState("")
  const [emailerror,setEmailError]=useState("")
  const [passworderror,setPasswordError]=useState("")


  const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regpswrd =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  

      const Emailvalidation = email => {
        if (email == '') {
          setEmailError('This Field is necessary');
        } else if (emailregex.test(email)) {
          return true;
        } else {
          setEmailError('Invalid email id');
        }
      };
  

      const Passwordvalidation = password => {
        if (password == '') {
          setPasswordError('This Field is necessary');
        } else if (regpswrd.test(password)) {
          return true;
        } else {
          setPasswordError('Password must contain minimum eight characters, at least one letter, one number and one special character');
        }
      };

const storeToken=async(token)=>{
await AsyncStorage.setItem("token",token)
  navigation.navigate("Home")
}


  const validation=async()=>{
    if (
      Emailvalidation(email) &&
      Passwordvalidation(password)){
      const token=  moment().format('MMMM Do YYYY, h:mm:ss a')
      console.log(token)
      await storeToken(token)
     
      }
  }

 
  return(
 
<> 
<View style={styles.innerView}>
    <Text style={styles.text}>Login</Text>
    <InputBox placeholder={'EMAIL ID'} data={[email,setemailid]} error={[emailerror,setEmailError]}></InputBox>
    <Text style={styles.text1}>{emailerror}</Text>
    <InputBox  secure={true} placeholder={'PASSWORD'} data={[password,setpassword]} error={[passworderror,setPasswordError]}></InputBox>
    <Text style={styles.text1}>{passworderror}</Text>
    </View>
    <View style={styles.ButtonDiv}>
    <Button title={"LOGIN"} functionality={()=>validation()}></Button>
    <Pressable onPress={()=>{navigation.navigate("Signup")}}>
    <Text style={styles.text2}>New to the app? signup</Text>
    </Pressable>
    </View>
    </>
  )
};

const styles=StyleSheet.create({
    OuterView:{
       flex:1,
       backgroundColor:"black" ,
    },
    text:{
        color:"white",
        fontSize:29,
        fontWeight:"bold",
    }, text2:{
      color:"white",
      fontWeight:"bold",
      textAlign:"center",
      padding:15,
  },
    innerView:{
       flex:8,
       borderWidth:1,
       paddingVertical:100,
       justifyContent:"flex-start",
       alignItems:"center",
       backgroundColor:"black",
    },
    ButtonDiv:{
      backgroundColor:"black",
      padding:50,
      justifyContent:"center",
      alignItems:"center",

    },  text1:{
      color:"red",
      width:"90%"
  }
})
export default Login;
