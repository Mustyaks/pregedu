import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";

const PostpartumCare = ({ navigation }) => {
  const postPartumCareContent = [
    {
      id: 1,
      title: "1. Kula da Lafiyar Jiki",
      description:
        "`Gyaran Haihuwa ta Hanyar Farji: Kulawa da Perineal don maganin rashin jin dadi, zubar jini (lochia), da karkatar da mahaifa. Gyaran Haihuwa ta Hanyar Cesarean: Kula da yankin yankin, rage aiki mai nauyi, da aiki jiki. Kula da Nono: Shayarwa, ciyarwa da kwalba, da kula da nono. Lafiyar Farji: Ayyukan Kegel don ƙarfafa tsokokin farji.`",
    },
    {
      id: 2,
      title: "2. Jin Daɗin Lafiya da Na Zuciya",
      description:
        "`Damuwar Uwa: Canjin yanayi, kuka, da rashin bacci. Ciwon Zuciya na Bayan Haihuwa: Alamomi masu tsanani da ke buƙatar kulawa ta likita. Damuwa na Bayan Haihuwa: Alamomin damuwa da tsoro. Tsarin Taimako: Muhimmancin samun tsarin taimako daga iyali, abokai, da likitoci.`",
    },
    {
      id: 3,
      title: "3. Abinci da Shaƙuwa",
      description:
        "`Abincin Daidaitacce: Abinci mai gina jiki don dawowa da samar da nono. Shaƙuwa: Yin shaƙuwa sosai musamman ga mata masu shayarwa.`",
    },
    {
      id: 4,
      title: "4. Hutawa da Barci",
      description:
        "`Barci Lokacin Da Jariri Ke Barci: Daidaita tsarin barci na uwa da jariri. Taimako da Kula da Jariri: Karɓar taimako daga iyali don samun hutu mai kyau.`",
    },
    {
      id: 5,
      title: "5. Kula da Jariri",
      description:
        "`Ciyarwa: Kafa jadawalin ciyarwa ko shayarwa. Canjin Kwayoyi da Tsabta: Canjin kwayoyi na yau da kullum. Ziyarar Lafiya: Ziyarar likitan yara na yau da kullum.`",
    },
    {
      id: 6,
      title: "6. Tsararren Iyali da Lafiyar Jima'i",
      description:
        "`Tsararren Iyali: Tattaunawa akan zaɓuɓɓukan tsararren iyali da mai ba da lafiya. Komawa zuwa Ayyukan Jima'i: Yawancin likitoci suna ba da shawarar jira har zuwa duban bayan haihuwa kafin komawa ayyukan jima'i.`",
    },
    {
      id: 7,
      title: "7. Duban Bayan Haihuwa",
      description:
        "`Taron dubawa bayan makonni shida don duba dawowar mahaifiya ta jiki da na zuciya.`",
    },
    {
      id: 8,
      title: "8. Alamomin Da Za A Kula Da Su",
      description:
        "`Zubar Jini Mai Yawa: Zubar da pad cikin awa ɗaya. Alamomin Kamuwar Cuta: Zazzaɓi, wari mai wari, ko ciwon ciki. Ciwon Mai Tsanani: Ciwon da ya daɗe ko yana ƙaruwa. Damuwa Na Lafiyar Zuciya: Ci gaba da jin baƙin ciki ko damuwa.`",
    },
    {
      id: 9,
      title: "9. Albarkatu da Taimako",
      description:
        "`Masu ba da shawara kan Shayarwa: Don taimakon shayarwa. Kungiyoyin Taimako: Don sabbin iyaye. Masu Ba da Lafiya: Kulawa na ci gaba daga likitocin obstetricians ko likitocin yara.`",
    },
    {
      id: 10,
      title: "10. Abubuwan Al'adu da Na Mutum",
      description:
        "`Al'adu na Al'adu: Ayyuka na musamman ko al'adu don kula da bayan haihuwa. Bukatun Mutum: Kwarewar kowace mace na daban don haka kula da kanka yana da mahimmanci.`",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Header toggleSidebar={() => navigation.goBack()} />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Prenatal Care/Kula Bayan Haihuwa</Text>
        {postPartumCareContent.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    // marginBottom: 20,
  },
  itemTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default PostpartumCare;
