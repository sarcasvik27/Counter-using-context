import React, {useState,useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const HomeHeader = ({screen}) => {
  const navigation = useNavigation();
  const cartdata = useSelector(state => state.Addtocart);
  const {products} = cartdata;
  const [count,setCount]=useState()
  
  useEffect(()=>{getData()},[]);

  const getData=()=>{
   // console.log(products.length)
   console.log("nfnfnfnfnnfnfn")
    console.log("hello hihih ",products.length)
  }


  return (
    <View
      style={{
        backgroundColor: 'Grey',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
      }}>
      <Text>{screen}</Text>
      {screen === 'Home' && (
        <View style={{flexDirection: 'row'}}>
          <Pressable
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Icon name="shopping-cart" style={{fontSize: 25}}></Icon>
            <Text>{count}</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default HomeHeader;
