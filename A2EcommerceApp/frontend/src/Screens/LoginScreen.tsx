import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenProp>();

  // STATE FOR INPUT FIELDS
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // LOGIN FUNCTIONALITY
const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert('Error', 'Please fill all fields');
    return;
  }

  setLoading(true);

  try {
    // fetch Api of backend
    const response = await fetch('https://a2backend.vercel.app//api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // SAVE USER DATA
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
      
      Alert.alert('Success', 'Login successful!');
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', data.message || 'Login failed');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#00000044"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#00000044"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Logging in...' : 'Login'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text style={{ color: '#6e4343ff', textDecorationLine: 'underline' }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#f5f5f5' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 30 
  },
  input: { 
    width: '100%', 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 15, 
    backgroundColor: '#fff', 
    color: 'black' 
  },
  button: { 
    backgroundColor: '#6e4343ff', 
    padding: 15, 
    borderRadius: 10, 
    width: '100%', 
    alignItems: 'center', 
    marginTop: 10 
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
  signupText: { 
    marginTop: 15, 
    color: 'black' 
  },
});
