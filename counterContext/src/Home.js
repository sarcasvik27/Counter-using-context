import {Text, View, Pressable,FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductDisplay from './Components/ProductDisplay';
import Header from './Components/Header';

const Home = () => {
  const [productdata, setdata] = useState();
  // const [count,setCount]=useState(0)
  let key2;
  useEffect(() => {
    Apicaller();
  }, []);
  const Apicaller = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    setdata(response.data.products);
    console.log()
  };

  return (
      <View style={styles.container}>
       <Header screen={"Home"}></Header>
        <FlatList
          data={productdata}
          renderItem={element => <ProductDisplay element={element} />}
          keyExtractor={element=>element.id}
        />
      </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor:'rgba(242, 242, 242, 1)',
    marginBottom:20,
  }
})
