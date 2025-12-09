import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type SignupScreenProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

const SignupScreen = () => {
  const navigation = useNavigation<SignupScreenProp>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      //  Fetch Api of backend
      const response = await fetch('https://a2backend.vercel.app//api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Account created successfully');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', data.message || 'Signup failed');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="#00000044"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#00000044"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#00000044"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: 'black', marginTop: 15 }}>
          Already have an account?{' '}
          <Text style={{ color: '#6e4343ff', textDecorationLine: 'underline' }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, marginBottom: 15, backgroundColor: '#fff', color: 'black' },
  button: { backgroundColor: '#6e4343ff', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});












