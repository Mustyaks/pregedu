import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import { ScrollView } from "react-native-web";

const nutritionalTipsContent = [
  {
    title: "Zamanin Cikin Farko (Mako 1-12)",
    description:
      "Mahimman Abubuwan Gina Jiki: Folic Acid, Iron, Calcium, Vitamin D, Protein",
    items: [
      {
        id: "1.1",
        title: "Folic Acid",
        description:
          "Yana da mahimmanci don hana cututtuka na neural tube. Nemi kashi 400-600 micrograms a kowace rana.",
      },
      {
        id: "1.2",
        title: "Iron",
        description:
          "Yana taimakawa wajen kara yawan jinin da kuma safarar oxygen. Nemi kimanin 27 mg a kowace rana.",
      },
      {
        id: "1.3",
        title: "Calcium",
        description:
          "Yana da mahimmanci don bunkasa kasusuwa da haƙoran jariri. Mata masu ciki suna bukatar kimanin 1,000 mg a kowace rana.",
      },
      {
        id: "1.4",
        title: "Vitamin D",
        description: "Yana taimakawa wajen shan calcium da aikin garkuwa.",
      },
      {
        id: "1.5",
        title: "Protein",
        description:
          "Yana taimakawa wajen bunkasa ƙwayoyin jiki na jariri, har da kwakwalwa. Nemi akalla 70 grams a kowace rana.",
      },
    ],
    tips: [
      "Abinci Ƙanana, Akai-akai: Yana taimakawa wajen shawo kan amai da rashin jin daɗi.",
      "Sha Ruwa: Sha ruwa mai yawa don samun ruwa a jiki.",
      "Guji: Kifi mai yawan mercury, kifi ko kayan teku marasa soya sosai, kayan madara marasa ni'ima, da abubuwan sha masu yawan caffeine.",
    ],
  },
  {
    title: "Zamanin Cikin Tsakani (Mako 13-26)",
    description:
      "Mahimman Abubuwan Gina Jiki: Iron da Calcium, Vitamin A, Omega-3 Fatty Acids, Fiber",
    items: [
      {
        id: "2.1",
        title: "Iron da Calcium",
        description:
          "Sun kasance masu muhimmanci yayin da kasusuwa na jariri suke bunƙasa.",
      },
      {
        id: "2.2",
        title: "Vitamin A",
        description:
          "Yana taimakawa wajen bunkasa idanu da garkuwar jiki na jariri. Kada a wuce 770 micrograms na retinol a kowace rana.",
      },
      {
        id: "2.3",
        title: "Omega-3 Fatty Acids",
        description: "Yana da muhimmanci don bunkasa kwakwalwa da idanu.",
      },
      {
        id: "2.4",
        title: "Fiber",
        description:
          "Yana taimakawa wajen hana tsayuwar bayan gida, matsala da aka saba da ita yayin daukar ciki.",
      },
    ],
    tips: [
      "Abinci Mai Balanci: Mai da hankali kan abincin da ke dauke da sinadarai don tallafawa bunƙasar jariri.",
      "Snacking: Haɗa abincin shan abinci mai lafiya kamar ƙwayoyi, yogurt, da 'ya'yan itatuwa.",
      "Rage Sugar da Gishiri: Yana taimakawa wajen sarrafa yawan nauyi da hawan jini.",
    ],
  },
  {
    title: "Zamanin Cikin Karshe (Mako 27-40)",
    description:
      "Mahimman Abubuwan Gina Jiki: Iron, Calcium da Vitamin D, Vitamin C, B Vitamins, Choline",
    items: [
      {
        id: "3.1",
        title: "Iron",
        description:
          "Bukatuwa na ƙaruwa don tallafawa jinin da jariri yake samu.",
      },
      {
        id: "3.2",
        title: "Calcium da Vitamin D",
        description: "Suna ci gaba da tallafawa bunkasar kasusuwa.",
      },
      {
        id: "3.3",
        title: "Vitamin C",
        description:
          "Yana taimakawa wajen shan iron da tallafawa garkuwar jiki.",
      },
      {
        id: "3.4",
        title: "B Vitamins",
        description:
          "Mahimmanci don samar da kuzari da bunkasar ƙwayoyin jiki.",
      },
      {
        id: "3.5",
        title: "Choline",
        description: "Yana da muhimmanci don bunkasar kwakwalwa.",
      },
    ],
    tips: [
      "Abinci Ƙanana, Akai-akai: Zai iya taimakawa wajen maganin heartburn da rashin jin daɗi yayin da jariri ya bunƙasa.",
      "Sha Ruwa: Ci gaba da sha ruwa mai yawa.",
      "Guji Yawan Gishiri da Abincin da Aka Sarrafa: Yana taimakawa wajen hana kumburi da hawan jini.",
    ],
  },
  {
    title: "Nasihu na Gabaɗaya Ga Dukkanin Zamanai",
    description:
      "Vitamins na Farko: Yi la'akari da shan sinadarai na gina jiki na musamman don cike gurbin da ake bukata.",
    items: [
      {
        id: "4.1",
        title: "Nauyin Lafiya",
        description: "Bi shawarwarin likitan ki game da ƙaruwa a cikin nauyi.",
      },
      {
        id: "4.2",
        title: "Tsaron Abinci",
        description:
          "Wanke 'ya'yan itatuwa da ganyayyaki sosai, guji nama ko kayan teku marasa soya sosai, da yi hankali da wasu nau'in kifi.",
      },
      {
        id: "4.3",
        title: "Caffeine da Giya",
        description: "Rage shan caffeine da guje wa shan giya.",
      },
    ],
    tips: [
      "Tuntuɓi likitan ki don shawarwari na musamman game da abinci yayin daukar ciki, domin bukatun kowa na iya bambanta.",
    ],
  },
];

const NutritionalTips = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{item.title}</Text>
      <Text style={styles.sectionDescription}>{item.description}</Text>
      {item.items.map((subItem) => (
        <View key={subItem.id} style={styles.item}>
          <Text style={styles.itemTitle}>{subItem.title}</Text>
          <Text style={styles.itemDescription}>{subItem.description}</Text>
        </View>
      ))}
      <View style={styles.tipsContainer}>
        {item.tips.map((tip, index) => (
          <Text key={index} style={styles.tip}>
            {tip}
          </Text>
        ))}
      </View>
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Header toggleSidebar={() => navigation.goBack()} />
          <View style={styles.content}>
            <Text style={styles.title}>Prenatal Care/Kula Da Ciki</Text>
          </View>
        </>
      }
      data={nutritionalTipsContent}
      keyExtractor={(item) => item.title}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  section: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionDescription: {
    fontSize: 16,
    marginVertical: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
  },
  tipsContainer: {
    marginTop: 10,
  },
  tip: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default NutritionalTips;
