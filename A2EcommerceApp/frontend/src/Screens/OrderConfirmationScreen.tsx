import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { OrdersContext } from '../context/OrdersContext';

const OrderConfirmationScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { addOrder } = useContext(OrdersContext)!;
  const { orderData } = route.params;

  useEffect(() => {
    if (orderData) addOrder(orderData);
  }, []);

  return (
    <View style={styles.container}>
      {/*Success Illustration */}
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/845/845646.png' }}
        style={styles.image}
      />

      <Text style={styles.title}>Order Confirmed!</Text>
      <Text style={styles.subtitle}>Thank you for your purchase 🎉</Text>

      {/*  Order Info */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Order ID:</Text>
        <Text style={styles.infoValue}>{orderData.orderId}</Text>
      </View>

      <Text style={styles.description}>
        You’ll receive an update once your order is shipped. You can track your order anytime from the “My Orders” section.
      </Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.primaryButtonText}>Back to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Orders')}
      >
        <Text style={styles.secondaryButtonText}>View My Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#8FA38A',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginRight: 6,
  },
  infoValue: {
    fontSize: 16,
    color: '#8FA38A',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 20,
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: '#6e4343ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    marginTop: 15,
  },
  secondaryButtonText: {
  color: '#6e4343ff',
  fontWeight: '600',
  fontSize: 15,
  textDecorationLine: 'underline', 
},
});
