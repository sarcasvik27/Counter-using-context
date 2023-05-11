import {Text, View, Image} from 'react-native';
import AddButton from './AddButton';
const ProductDisplay = ({element}) => {
  // const [count,setCount]={value}
  return (
    <>
      <View style={{flex: 1, backgroundColor:'white', marginTop: 10, borderRadius: 8, padding:8}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <Image
            source={{uri: element.item.images[0]}}
            style={{height: 100, width: 100, borderRadius: 8}}></Image>
          
        </View>
        <View>
        <Text>{element.item.title}</Text>
         <Text>{element.item.price}</Text>
         <Text>{element.item.description}</Text>
         <AddButton type={"Add"} element={element}></AddButton>
        </View>
      </View>
    </>
  );
};
export default ProductDisplay;
