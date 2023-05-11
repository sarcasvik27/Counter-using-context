import {useEffect,useState} from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';
import { ActivityIndicator } from "react-native";

const App_Navigator = () => {

const [id,setId]=useState(null)
const [loading,setLoading]=useState(true)

useEffect(()=>{getId()},[])
const getId=async()=>{
setId(await AsyncStorage.getItem('token'))
setLoading(false)
}

if(loading==true){
  return(
    <ActivityIndicator/>
  )
}
else if(id==null){
  return (<AuthNavigation/> );
}
else {
  return(
    <AppNavigation/>
  )
}
}
export default App_Navigator;
