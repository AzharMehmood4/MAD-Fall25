import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ item }: any) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: 150,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
  },
  image: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  price: {
    color: '#E50914',
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default ProductCard;
