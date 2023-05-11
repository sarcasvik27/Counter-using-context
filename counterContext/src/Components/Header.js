import React, {useState,useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

const Header = ({screen}) => {
  const [count,setCount]=useState(0)
  const navigation = useNavigation();
  const cartdata = useSelector(state => state.Addtocart);
  const {products} = cartdata;

  //useEffect(()=>{setCount(products.length)})
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
      {screen === 'Cart' && (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon1 name="arrowleft" style={{fontSize: 25}} />
        </Pressable>
      )}

     {screen === 'Signup' && (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon1 name="arrowleft" style={{fontSize: 25}} />
        </Pressable>
      )}

      <Text>{screen}</Text>
      {screen === 'Home' && (
        <View style={{flexDirection: 'row'}}>
          <Pressable
            onPress={() => {
              navigation.navigate('Cart');
            }}>
             {count==0?null: <View style={{borderRadius:50,borderColor:"black",backgroundColor:"red",justifyContent:"center",height:25,width:25,alignItems:
            "center"}}>
           <Text style={{color:"white"}}>{count}</Text>
             </View>}
            <Icon name="shopping-cart" style={{fontSize: 25,marginHorizontal:10}}></Icon>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Header;
