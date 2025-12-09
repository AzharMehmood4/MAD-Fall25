import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OrdersContext } from '../context/OrdersContext';

const OrdersScreen = () => {
  const { orders, removeOrder } = useContext(OrdersContext)!;
  const navigation = useNavigation<any>();

  const handleRemove = (id: string) => {
    Alert.alert('Remove Order', 'Are you sure you want to delete this order?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Yes', onPress: () => removeOrder(id) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>☐ My Orders</Text>

      {orders.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>You don’t have any orders yet.</Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 80 }} // space for button
          renderItem={({ item }) => (
            <View style={styles.orderCard}>
              <Text style={styles.orderId}>Order ID: {item.id}</Text>
              <Text>Date: {item.date}</Text>
              <Text>Payment: {item.paymentMethod}</Text>
              <Text>Total: ${item.totalAmount}</Text>

              {/*  Order Status Display */}
              <Text>
                Status:{' '}
                <Text
                  style={{
                    color:
                      item.status === 'Delivered'
                        ? 'green'
                        : item.status === 'Cancelled'
                        ? 'red'
                        : '#5cac48ff',
                  }}
                >
                  {item.status}
                </Text>
              </Text>

              {item.items.map((product) => (
                <View key={product.id} style={styles.productRow}>
                  <Image source={{ uri: product.image }} style={styles.image} />
                  <View>
                    <Text>{product.name}</Text>
                    <Text>
                      ${product.price} × {product.quantity}
                    </Text>
                  </View>
                </View>
              ))}

              {/*Remove order button */}
              <TouchableOpacity onPress={() => handleRemove(item.id)} style={{ marginTop: 10 }}>
                <Text style={{ color: 'red', textAlign: 'right' }}>Remove Order</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {/*  Static "Go Back Home" button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.homeButtonText}>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#666' },
  orderCard: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 8,
    elevation: 2,
  },
  orderId: { fontWeight: 'bold' },
  productRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  image: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },

  // Bottom Button Styles
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  homeButton: {
    backgroundColor: '#6e4343ff',
    paddingVertical: 12,
    borderRadius: 8,
  },
  homeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
