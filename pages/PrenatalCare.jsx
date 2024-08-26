import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";

const PrenatalCare = ({ navigation }) => {
  const prenatalCareContent = [
    {
      id: 1,
      title: "1. Menene Kulawar Cikin-Gida?",
      description: `Kulawar cikin-gida tana nufin ziyara a asibiti don dubawa da gwaje-gwaje a lokacin da mace ke dauke da juna biyu. Haka kuma, yana ba da shawara akan abinci, motsa jiki, da kuma zaɓuɓɓukan rayuwa don tabbatar da lafiyar uwa da jariri.
      `,
    },
    {
      id: 2,
      title: "2. Muhimmancin Kulawar Cikin-Gida",
      description: `Dubawa na Lafiya: Dubawa akai-akai na taimakawa wajen duba yadda jaririn ke girma da kuma lafiyar mahaifiya.Maganin Hadari: Samun ganowa da wuri akan matsaloli kamar su ciwon suga na masu ciki (gestational diabetes), ko hawan jini (preeclampsia), yana ba da damar magani da wuri. Ilmantarwa: Ba da ilimi akan dabi'un da zasu taimaka, haihuwa, da kuma kulawar jariri. Tallafi: Taimako na tunani da kuma goyon baya ga yanayin mace na ciki da haihuwa.
      `,
    },
    {
      id: 3,
      title: "3. Manyan Bangarori na Kulawar Cikin-Gida",
      description: `A. Farko (Makonni 1-12)\nZiyara ta Farko:Tabbatar da ciki ta hanyar gwajin fitsari ko na jini.Lissafin lokacin haihuwa bisa ga lokacin karshe na haila ko amfani da na'ura mai duba ciki (ultrasound).Binciken tarihin likita, ciki har da ciki na baya, tarihin lafiya na iyali, da kuma abubuwan da ke rayuwa.Gwajin jini don duba cututtuka kamar su rashin jini (anemia), irin jini, da wasu cututtuka masu yaduwa.Tattaunawa akan sinadaran gina jiki na ciki (prenatal vitamins), musamman folic acid, don hana matsaloli a kwakwalwa da kashin baya.\n\nZiyarar Biyu da Ta Biyo Baya:Kula da nauyi, matsa jini, da fitsari.Gwaje-gwaje don wasu cututtuka (misali, Down syndrome).\n\nB. Na Biyu (Makonni 13-26)\nDubawa Akai-akai:Ci gaba da duba nauyi, matsa jini, da fitsari.Auna girman jariri da saurin zuciyarsa.Amfani da na'ura mai duba ciki (ultrasound) a makonni 18-22 don duba cigaban jariri da gano jinsinsa idan ana so.\n\nGwaje-gwaje:Gwajin rashin jini (anemia) da sauran cututtuka.Shawara akan Lafiya da Rayuwa:Abinci mai gina jiki, motsa jiki, da magance wasu matsaloli kamar ciwon baya da ciwon zuciya.Shiryawa don haihuwa da alamun fara haihuwa.\n\nC. Na Uku (Makonni 27-40)\nZiyarar Akai-akai:Duba matsayin jariri da girman sa.Tattaunawa akan alamun haihuwa da shirin haihuwa.Gwajin cututtuka kamar su Group B Streptococcus (GBS).Tattaunawa akan kulawar bayan haihuwa da shayarwa.\n\nKulawa na Musamman:Maganin matsaloli kamar su hawan jini na ciki (preeclampsia) ko haihuwar kafin lokaci.Shiryawa don haihuwa, da tattaunawa akan maganin ciwo da shirin haihuwa.
      `,
    },
    {
      id: 4,
      title: "4. Gwaje-gwaje da Tsare-tsare na Kowa-da-Kowa",
      description: `Na'ura Mai Duba Ciki (Ultrasound): Ana amfani da ita don ganin girman jariri da duba abubuwan da basu dace ba.Gwajin Jini: Don duba rashin jini (anemia), irin jini, Rh factor, da cututtuka.Gwajin Fitsari: Don duba furotin, glucose, da alamun cututtuka.Gwajin Glucose: Don duba ciwon suga na masu ciki (gestational diabetes).Gwajin Rashin Damuwa (Non-Stress Test - NST): Don duba saurin zuciya da motsin jariri.Amniocentesis ko Chorionic Villus Sampling (CVS): Don duba cututtuka na gado a wasu lokuta.
      `,
    },
    {
      id: 5,
      title: "5. Rayuwa da Abinci",
      description: `Abinci: Cikin gina jiki mai kyau da yake daidai da kwayoyin halitta, iron, calcium, da folic acid.Ruwa: Shan ruwa mai yawa.Motsa Jiki: Motsa jiki mai sauki kamar tafiya, iyo, da yoga na ciki.Guje wa Abubuwa Masu Cutarda Lafiya: Giya, taba, wasu magunguna, da abinci mara kyau ko wanda bai dahu ba.
      `,
    },
    {
      id: 6,
      title: "6. Tallafin Zuci da Hankali",
      description: `Magance damuwa, ciwon zuciya, da damuwa.Hada iyali ko abokin zama a cikin kulawar ciki da ilmantarwa.
      `,
    },
    {
      id: 7,
      title: "7. Shiryawa Don Haihuwa",
      description: `Kirkirar shirin haihuwa, tattaunawa akan zaɓuɓɓukan maganin ciwo, da zaɓar hanyar haihuwa.Sani akan alamun fara haihuwa da lokacin zuwa asibiti ko wurin haihuwa.
      `,
    },
    {
      id: 8,
      title: "8. Kulawa Bayan Haihuwa",
      description: `Ziyarar biyo bayan haihuwa don duba yadda aka warke da magance duk wani matsalar bayan haihuwa kamar ciwon ciki ko shayarwa.
      `,
    },
    {
      id: 9,
      title: "9. Abubuwa Na Musamman",
      description: `Ciki Mai Hadari: Ana iya bukatar kulawa na musamman da karin duba don matsaloli kamar hawan jini, ciwon suga, ko ciki mai yawa.Kulawa na Wurare Masu Sauri: Wasu za su zaɓi masu haihuwa (midwives) ko masu ba da taimako (doulas) don kula ta musamman ga ciki da haihuwa.
      `,
    },
    {
      id: 10,
      title: "10. Albarkatu da Tallafi",
      description: `Samun zuwa darussan ciki, kungiyoyin tallafi, da albarkatu ga sabbin iyaye.Kulawar cikin-gida ya kamata ta zama bisa bukatun mutum da kuma so, tare da tattaunawa tsakanin masu juna biyu da likitocidon tabbatar da sakamako mai kyau ga mahaifiya da jariri.
      `,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Header toggleSidebar={() => navigation.goBack()} />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Prenatal Care/Kula Da Ciki</Text>
        {prenatalCareContent.map((item, index) => (
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

export default PrenatalCare;
