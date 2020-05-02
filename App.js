import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

// other screens
import { HomeScreen } from './screens/HomeScreen';
import { OrderDetails } from './screens/OrderDetails';
import { ProductsList } from './screens/ProductsList';
import { PhoneAuth } from './screens/PhoneAuth';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={PhoneAuth} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="ProductsList" component={ProductsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


