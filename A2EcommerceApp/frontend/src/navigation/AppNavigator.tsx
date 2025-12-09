import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProductDetailsScreen from '../Screens/ProductDetailsScreen';
import CartScreen from '../Screens/CartScreen';
import CheckoutScreen from '../Screens/CheckoutScreen';
import OrderConfirmationScreen from '../Screens/OrderConfirmationScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import OrdersScreen from '../Screens/OrdersScreen';
import { OrdersProvider } from '../context/OrdersContext';
import LandingScreen from '../Screens/LandingScreen';
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Orders:undefined;
  ProductDetails: { product: any };
  Cart: undefined;
  Checkout: undefined;
  Landing: undefined;
  OrderConfirmation: {
    orderData: {
      orderId: string;
      totalAmount: number;
      items: any[];
      date: string;
      address: string;
      paymentMethod: string;
    };
  };
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
 return (
  <OrdersProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </OrdersProvider>
);
};

export default AppNavigator;
