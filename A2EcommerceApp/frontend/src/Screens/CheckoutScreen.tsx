import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CartContext } from '../context/CartContext';
import { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Checkout'>;

const CheckoutScreen = () => {
  const { cart, getTotal } = useContext(CartContext);
  const navigation = useNavigation<NavigationProp>();

  // Shipping state
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handleConfirm = () => {
    if (!street || !city || !country) {
      Alert.alert('Please fill in all shipping details!');
      return;
    }

    const orderData = {
      orderId: Math.random().toString(36).substring(7),
      totalAmount: getTotal(),
      items: cart,
      date: new Date().toLocaleString(),
      address: `${street}, ${city}, ${country}`,
      paymentMethod: paymentMethod,
    };

    Alert.alert('Order Confirmed!', 'Your order has been placed successfully!', [
      {
        text: 'OK',
        onPress: () =>
          navigation.navigate('OrderConfirmation', {
            orderData,
          }),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/*  Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Shipping Details */}
        <Text style={styles.sectionTitle}>Shipping Details</Text>
        <TextInput
          placeholder="Street Address"
          placeholderTextColor="#00000044"
          value={street}
          onChangeText={setStreet}
          style={styles.input}
        />
        <TextInput
          placeholder="City"
          placeholderTextColor="#00000044"
          value={city}
          onChangeText={setCity}
          style={styles.input}
        />
        <TextInput
          placeholder="Country"
          placeholderTextColor="#00000044"
          value={country}
          onChangeText={setCountry}
          style={styles.input}
        />

        {/* Payment Method */}
        <Text style={styles.sectionTitle}>Payment Method</Text>
        {['Credit Card', 'Debit Card', 'Cash on Delivery', 'PayPal'].map((method) => (
          <TouchableOpacity
            key={method}
            style={[styles.paymentButton, paymentMethod === method && styles.selectedPayment]}
            onPress={() => setPaymentMethod(method)}
          >
            <Text
              style={[
                styles.paymentText,
                paymentMethod === method && { color: '#fff', fontWeight: 'bold' },
              ]}
            >
              {method}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Order Summary */}
        <Text style={styles.summary}>Order Summary</Text>
        {cart.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemText}>
              {item.name} x {item.quantity} - ${item.price * item.quantity}
            </Text>
          </View>
        ))}
        <Text style={styles.total}>Total: ${getTotal()}</Text>

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmText}>Confirm Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back to Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#F8FAFC' },
  header: {
    backgroundColor: '#ffffffff',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  headerTitle: { color: '#080303ff', fontSize: 22, fontWeight: 'bold' },

  container: { flex: 1, padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#0f172a' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  paymentButton: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  selectedPayment: { backgroundColor: '#6e4343ff' },
  paymentText: { fontSize: 16, color: '#0f172a', textAlign: 'center' },
  summary: { fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#0f172a', marginTop: 20 },
  item: { padding: 10, backgroundColor: '#fff', borderRadius: 8, marginBottom: 5 },
  itemText: { fontSize: 16, color: '#0f172a' },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'right',
    color: '#0f172a',
  },
  confirmButton: {
    backgroundColor: '#6e4343ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  confirmText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  backButton: { backgroundColor: '#475569', padding: 15, borderRadius: 10, alignItems: 'center' },
  backText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
