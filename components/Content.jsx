import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import WelcomeCard from "./WelcomeCard";
import CategoryCard from "./CategoryCard";
import prenatal from "../assets/prenatal.png";
import nutritional from "../assets/nutritional.png";
import postpartum from "../assets/postpartum.png";
import fplanning from "../assets/fplanning.png";

const Content = () => {
  return (
    <ScrollView style={styles.content}>
      <WelcomeCard />
      <CategoryCard
        title="Prenatal Care/Kula Da Ciki"
        color="#B8E0FF"
        image={prenatal}
        screen="PrenatalCare"
        text="Barka da zuwa cikin sashin kula da ciki. Muna tare dake don tabbatar da lafiyarki da ta jaririnki tun daga farkon ciki har zuwa haihuwa."
      />
      <CategoryCard
        title="Nutritional Tips/Shawarwarin Abinci"
        color="#FFD6D6"
        image={nutritional}
        screen="NutritionalTips"
        text="Barka da zuwa cikin sashin shawarwarin abinci. Anan zaki sami bayanai da shawarwari kan abincin da zai taimaka miki da jaririnki cikin lafiya."
      />
      <CategoryCard
        title="Postpartum Care/Kula Bayan Haihuwa"
        color="#FFD6FF"
        image={postpartum}
        screen="PostpartumCare"
        text="Barka da zuwa cikin sashin kula bayan haihuwa. Mun shirya miki shawarwari da bayanai don taimakawa lafiyarki da ta jaririnki bayan haihuwa."
      />
      <CategoryCard
        title="Family Planning/Tsarin Iyali"
        color="#D6FFE1"
        image={fplanning}
        screen="FamilyPlanning"
        text="Barka da zuwa cikin sashin tsarin iyali. Anan zaki sami bayanai da shawarwari kan yadda za ki tsara iyalinki da tsaro cikin hikima."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 10,
  },
});

export default Content;
