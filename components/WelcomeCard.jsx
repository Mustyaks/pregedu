import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import doctor from "../assets/doctor.png";

const WelcomeCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Sannu da zuwa</Text>
      <View style={styles.content}>
        <Image source={doctor} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Barka da zuwa cikin manhajar mu ta ciki. Muna farin ciki da samun ki
            a cikin wannan tafiya mai cike da farin ciki da fatan alheri. Allah
            Ya ba ki sauƙi da lafiya, Amin."
          </Text>
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Watch</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      {/* <Text style={styles.exploreMore}>Explore more</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFD0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  description: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#32CD32",
    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
  },
  exploreMore: {
    marginTop: 10,
    color: "gray",
  },
});

export default WelcomeCard;
