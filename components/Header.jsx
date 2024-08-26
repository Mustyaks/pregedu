import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const Header = ({ toggleSidebar }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const isHomeScreen = route.name === "Home";

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.leftIcons}>
          {isHomeScreen ? (
            <TouchableOpacity
              onPress={toggleSidebar}
              style={styles.iconContainer}
            >
              <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconContainer}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#006400",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#006400",
  },
  leftIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    padding: 10,
  },
});

export default Header;
