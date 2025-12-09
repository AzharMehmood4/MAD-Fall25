import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; 

const { width } = Dimensions.get('window');

type LandingScreenProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

const LandingScreen = () => {
  const navigation = useNavigation<LandingScreenProp>();

  return (
    <View style={styles.container}>
      {/* Hero Image */}
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7gQFgtWvjENlFgmdFJtCLKctHGIidainZw&s' }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Mobile Shop</Text>
        <Text style={styles.subtitle}>
          Build your dreams with modern mobile technology. Explore products, track orders, and enjoy seamless shopping experience.
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Signup')} 
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Optional small footer */}
      <Text style={styles.footer}>By continuing, you agree to our Terms & Conditions</Text>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000', 
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#6e4343ff', 
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  footer: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
