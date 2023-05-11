import {Text,FlatList,View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import Header from '../Components/Header';
import CartDisplay from '../Components/CartDisplay';
const Cart = () => {
   
  const cartdata = useSelector(state => state.Addtocart);
  const {products} = cartdata;
  const [totalPrice, setTotalPrice] = useState(0)
  const [emptymessage,setEmptyMessage]=useState("Your Cart is empty")
   
  useEffect(()=>{
    handleCalculatePrice()
  })

  const handleCalculatePrice = () => {
    let price = 0;
    products.map(data => {
      console.log('==>>', data.price);
      price = price+data.price
    });
    setTotalPrice(price)
  };
if(totalPrice!=0){
  return (
    <>
      <Header screen={'Cart'} />

      <View style={{flex:1,marginBottom:20}}>
      <FlatList
        data={cartdata.products} // cartdata.products is an array of objects
        renderItem={element => (
          <CartDisplay data={element} keyExtractor={item => item.id} />
        )}
      />
      </View>

      <Text style={{fontSize:20,textAlign:'center'}}>Your wishlist total is {totalPrice}</Text>
    </>
  );}
  else {
    return(
      <>
       <Header screen={'Cart'} />
  
       <Text style={{fontSize:20,textAlign:'center'}}>{emptymessage}</Text>
      </>
    )
  }
};
export default Cart;
