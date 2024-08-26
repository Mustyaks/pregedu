import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const CategoryCard = ({ title, color, image, screen, text }) => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.description}>{text}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNavigation(screen)}
            >
              <Text style={styles.buttonText}>Karanta</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreButtonText}>More</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  description: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#32CD32",
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
  },
  moreButton: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
  },
  moreButtonText: {
    color: "black",
  },
});

export default CategoryCard;
