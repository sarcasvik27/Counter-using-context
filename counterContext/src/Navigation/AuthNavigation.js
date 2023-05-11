import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import Cart from '../Screen/Cart';
import Signup from '../Screen/Signup';
import Login from '../Screen/Login';
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AuthNavigation;
