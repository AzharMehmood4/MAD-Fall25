import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "test@student.com" && password === "12345") {
      navigation.navigate("Home");
    } else {
      Alert.alert(
        "Error",
        "Wrong email or password. Try test@student.com and 12345."
      );
    }
  };

  const handleSignup = () => {
    Alert.alert(
      "Signup",
      "Signup not implemented yet, but it would save your info!"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SkillSwap!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email (try test@student.com)"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password (try 12345)"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={handleLogin} color="#007AFF" />
        <Button title="Sign Up" onPress={handleSignup} color="#007AFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
