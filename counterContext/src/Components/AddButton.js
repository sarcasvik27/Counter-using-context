import React, {useState} from 'react';
import {TouchableOpacity, Text, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import { Add_to_cart } from '../Redux/Action/Action';

const AddButton = ({element,type}) => {
  const [buttoncolor, setbuttoncolor] = useState('black');
  const [buttontype, setbuttontype] = useState(type);
  const [clicked,setclicked]=useState(false);
  // const[data,setdata]=useState()

  const cartdata = useSelector(state => state.Addtocart);
  const {products} = cartdata;


  const dispatch = useDispatch();
  const Addedtocart = () => {
    if(products.includes(element.item)){
      Alert.alert("product already in the cart")}
    else{
      dispatch(Add_to_cart(element.item))
    }
  };
  return (
    <TouchableOpacity
      style={{
        width: 60,
        borderColor: 'grey',
        borderRadius: 8,
        borderWidth: 0.4,
        backgroundColor: buttoncolor,
        padding: 6,
        marginVertical:20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={Addedtocart}disabled={clicked}>
      <Text style={{color: 'white'}}>{buttontype}</Text>
    </TouchableOpacity>
  );
};
export default AddButton;
