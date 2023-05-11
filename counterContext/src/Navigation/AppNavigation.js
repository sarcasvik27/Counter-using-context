import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import Cart from '../Screen/Cart';;
const Stack = createNativeStackNavigator();
const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
