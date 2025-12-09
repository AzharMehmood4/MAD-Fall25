import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeNav = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const categories = [
  { id: '1', name: 'All' },
  { id: '2', name: 'Apple' },
  { id: '3', name: 'Samsung' },
  { id: '4', name: 'OnePlus' },
  { id: '5', name: 'Google' },
  { id: '6', name: 'Xiaomi' },
];

const products = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    price: 2499,
    category: 'Apple',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1999,
    category: 'Samsung',
    image: 'https://www.ultraskins.co.uk/wp-content/uploads/2024/01/gloss-full-body-clear-series-galaxy-s24-ultra-skin-wrap-ultraskins.avif',
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    price: 1799,
    category: 'Google',
    image: 'https://static0.anpoimages.com/wordpress/wp-content/uploads/2024/01/google-pixel-8-pro-mint-1.jpg?q=50&fit=crop&w=825&dpr=1.5',
  },
  {
    id: '4',
    name: 'OnePlus 12',
    price: 1599,
    category: 'OnePlus',
    image: 'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-1.jpg',
  },
  {
    id: '4',
    name: 'OnePlus 12',
    price: 1599,
    category: 'OnePlus',
    image: 'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-1.jpg',
  },
  {
    id: '5',
    name: 'Xiaomi 14 Ultra',
    price: 1399,
    category: 'Xiaomi',
    image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-ultra-1.jpg',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation<HomeNav>();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(
    (item) =>
      (selectedCategory === 'All' || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderCategory = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[
        styles.categoryBtn,
        selectedCategory === item.name && styles.activeCategory,
      ]}
      onPress={() => setSelectedCategory(item.name)}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item.name && styles.activeText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductDetails', { product: item })}
      >
        <Text style={styles.buttonText}>View Details</Text> 
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://imgs.search.brave.com/OiKm9L8HpegwzUWxTtaDuwd1s3tILS-iFI1ybBZQPTQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTc3/NTA5NTc4L3Bob3Rv/L3NtYXJ0cGhvbmUt/YmV6ZWwtbGVzcy10/ZW1wbGF0ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9MkYw/UVI3eEd4cTVxYzBs/WnEzSU5MekFxLU10/M3FpMHpEQ2VWcVlq/VC14dz0' }}
            style={{ width: 40, height: 40, marginRight: 10 }}
            resizeMode="contain"
          />
          <Text style={[styles.header, { fontSize: 22 }]}>Mobile Shop</Text>
        </View>

        {/* Search Bar */}
        <TextInput
          placeholder="🔍 Search mobiles..."
          placeholderTextColor="#00000044"
          style={styles.searchBar}
          value={search}
          onChangeText={setSearch}
        />

        {/* Categories */}
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />

        {/* Products */}
        <FlatList
          data={filteredProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
          scrollEnabled={false}
        />
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>⾕</Text>
          <Text style={{fontSize: 12, marginTop: 2 , textDecorationLine: 'underline', color: '#aa4848ff'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.tabIcon}>🛒</Text>
          <Text style={styles.tabText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
             style={{ width: 24, height: 24 ,marginTop: 7}}
           />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  scrollContainer: { paddingHorizontal: 10 },
  header: {
    backgroundColor: '#fffefeff',
    paddingVertical: 8,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#0f172a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
    borderColor: '#E2E8F0',
    borderWidth: 1,
  },
  categoryList: { paddingVertical: 10 },
  categoryBtn: {
    backgroundColor: '#E2E8F0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 5,
  },
  activeCategory: { backgroundColor: '#6e4343ff' },
  categoryText: { color: '#334155', fontWeight: '500' },
  activeText: { color: '#fff' },
  list: { justifyContent: 'center', paddingBottom: 60 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
    flex: 1,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: { width: 140, height: 140, borderRadius: 10 },
  name: {
    fontSize: 15,
    fontWeight: '600',
    marginVertical: 8,
    color: '#0f172a',
    textAlign: 'center',
  },
  price: { fontSize: 14, fontWeight: 'bold', color: '#6e4343ff', marginBottom: 8 },
  button: { backgroundColor: '#6e4343ff', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 4,
    borderColor: '#E2E8F0',
    backgroundColor: '#fff',
  },
  tabItem: { alignItems: 'center' },
  tabIcon: { fontSize: 24, color: '#6e4343ff' },
  tabText: { fontSize: 12, marginTop: 2 },
});
