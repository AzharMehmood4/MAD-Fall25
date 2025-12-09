import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";

const dummyOffers = [
  { id: "1", title: "Python Tutoring", user: "Ali" },
  { id: "2", title: "Guitar Lessons", user: "Fatima" },
  { id: "3", title: "Drawing Basics", user: "Ahmed" },
  { id: "4", title: "Yoga & Meditation", user: "Sara" },
];

export default function HomeScreen({ navigation }) {
  const renderOffer = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardText}>Offered by: {item.user}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Skills</Text>
      <FlatList
        data={dummyOffers}
        keyExtractor={(item) => item.id}
        renderItem={renderOffer}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Post a New Skill"
          onPress={() => navigation.navigate("CreatePost")}
          color="#007AFF"
        />
        <Button
          title="View Profile"
          onPress={() => navigation.navigate("Profile")}
          color="#007AFF"
        />
      </View>
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
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  cardTitle: { fontSize: 18, fontWeight: "bold" },
  cardText: { fontSize: 14, color: "#666" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
