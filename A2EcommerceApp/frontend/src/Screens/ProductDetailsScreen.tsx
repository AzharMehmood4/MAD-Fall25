import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

const ProductDetailsScreen = () => {
  const route = useRoute();
  const { product } = route.params as {
    product: {
      id: string;
      name: string;
      price: number;
      category: string;
      image: string;
      description?: string;
      reviews?: string[];
    };
  };

  const { addToCart } = useContext(CartContext);

  const description =
    product.description ||
    'This is a high-quality mobile phone with excellent performance and camera features. Perfect for everyday use.';
  const reviews =
    product.reviews || [
      'Excellent phone! Highly recommend.',
      'Battery lasts long and camera is amazing.',
      'Good value for money.',
    ];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    Alert.alert('Success', 'Added to Cart');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Heading */}
      <Text style={styles.title}>📦 Product Details</Text>

      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.category}>Category: {product.category}</Text>
        <Text style={styles.description}>{description}</Text>

        {/* Reviews */}
        <Text style={styles.reviewHeading}>Reviews:</Text>
        {reviews.map((review, index) => (
          <Text key={index} style={styles.reviewText}>
            • {review}
          </Text>
        ))}

        {/* Add to Cart */}
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  image: { width: '100%', height: 250, marginVertical: 10 },
  infoContainer: { paddingHorizontal: 20, paddingBottom: 30 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#0f172a', marginVertical: 5 },
  price: { fontSize: 18, fontWeight: '600', color: '#6e4343ff', marginVertical: 5 },
  category: { fontSize: 16, color: '#334155', marginVertical: 5 },
  description: { fontSize: 14, color: '#475569', marginVertical: 10 },
  reviewHeading: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  reviewText: { fontSize: 14, color: '#334155', marginLeft: 10, marginVertical: 2 },
  button: {
    backgroundColor: '#6e4343ff',
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
