import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CartContext } from '../context/CartContext';

// Define the type for the navigation stack
type RootStackParamList = {
   Home: undefined;
  Cart: undefined;
  Checkout: undefined;
  Profile: undefined;
};

// Define the navigation prop type
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CartScreen = () => {
  
  const { cart, getTotal, removeFromCart } = useContext(CartContext);
  const navigation = useNavigation<NavigationProp>();

  // Delete handler
  const handleRemove = (id: string) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from the cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => removeFromCart(id), style: 'destructive' },
      ]
    );
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price} x {item.quantity}</Text>
      </View>
      {/* Delete Box */}
      <TouchableOpacity style={styles.deleteBox} onPress={() => handleRemove(item.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Your Cart</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>Subtotal: ${getTotal()}</Text>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate('Checkout')}
            >
              <Text style={styles.checkoutText}>Go to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
       <View style={styles.tabBar}>
              <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.tabIcon}>⾕</Text>
                <Text style={styles.tabText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.tabIcon}>🛒</Text>
                <Text style={{fontSize: 12, marginTop: 2 , textDecorationLine: 'underline', color: '#aa4848ff'}}>Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
                  style={{ width: 24, height: 24 , marginTop: 7}}
                 />
                <Text style={styles.tabText}>Profile</Text>
              </TouchableOpacity>
            </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 10 , paddingBottom: 70},
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' , paddingVertical: 18,backgroundColor: '#ffffffff',},
  emptyText: { textAlign: 'center', marginTop: 20, fontSize: 16, color: '#475569' },
  item: { flexDirection: 'row', backgroundColor: '#fff', padding: 10, marginVertical: 5, borderRadius: 10, alignItems: 'center' },
  image: { width: 70, height: 70, borderRadius: 10 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#0f172a' },
  price: { fontSize: 14, color: '#6e4343ff', marginTop: 5 },
  deleteBox: {
    backgroundColor: '#aa4848ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteText: { color: '#fff', fontWeight: 'bold' },
  footer: { paddingVertical: 10, borderTopWidth: 1, borderColor: '#E2E8F0', backgroundColor: '#fff' },
  total: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'right', color: '#0f172a' },
  checkoutButton: { backgroundColor: '#6e4343ff', padding: 12, borderRadius: 10, alignItems: 'center' },
  checkoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  tabBar: {
    position: 'absolute',       
    bottom: 0,                  
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 4,
    borderColor: '#E2E8F0',
    backgroundColor: '#fff',
  },
  tabItem: { alignItems: 'center' },
  tabIcon: { fontSize: 24},
  tabText: { fontSize: 12, marginTop: 2 , color: 'black'},
});
