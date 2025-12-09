import React from "react";
import { View, Text, StyleSheet } from "react-native";

const user = {
  name: "Azhar Mehmood",
  skills: [
    "React Native",
    "Flutter",
    "UI/UX Design",
    "Android Development",
    "iOS Development",
  ],
  bio: "A React Developer.",
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.label}>
        Name: <Text style={styles.value}>{user.name}</Text>
      </Text>
      <Text style={styles.label}>
        Skills: <Text style={styles.value}>{user.skills.join(", ")}</Text>
      </Text>
      <Text style={styles.label}>
        Bio: <Text style={styles.value}>{user.bio}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: { fontSize: 16, fontWeight: "bold", marginVertical: 10 },
  value: { fontWeight: "normal", color: "#333" },
});
