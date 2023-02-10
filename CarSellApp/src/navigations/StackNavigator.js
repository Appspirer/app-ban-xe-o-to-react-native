import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Boarding, DashBoard, History, Details } from '../screens';
import DrawerContent from './DrawerContent'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Boarding" component={Boarding} />
        <Stack.Screen name="DashBoard" component={DrawerContent} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;