import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Sidebar = ({ closeSidebar }) => {
  const navigation = useNavigation();

  const menuItems = [
    { icon: "home", title: "Sannu da Zuwa", screen: "Home" },
    { icon: "medical", title: "Kulawar Cikin-Gida", screen: "PrenatalCare" },
    { icon: "nutrition", title: "Shawarwarin Abinci", screen: "NutritionalTips" },
    { icon: "woman", title: "Kulawar Bayan Haihuwa", screen: "PostpartumCare" },
    { icon: "people", title: "", screen: "Tsarin Iyali" },
    // { icon: "settings", title: "Setting", screen: "Settings" },
    // { icon: "help-circle", title: "Help", screen: "Help" },
  ];

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
    closeSidebar();
  };

  return (
    <View style={styles.sidebar}>
      <Text style={styles.welcomeText}>Welcome</Text>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => handleNavigation(item.screen)}
        >
          <Ionicons name={item.icon} size={24} color="white" />
          <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: "#000080",
    padding: 20,
  },
  welcomeText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  menuText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Sidebar;
