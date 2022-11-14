import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import PrimaryButton from "../../../components/PrimaryButton";
import StackView from "../../../components/StackView";
import TextInter from "../../../components/TextInter";
import { Colors } from "../../../constants/colors";

export default function MainTripInfoScreen({ navigation, route }) {
  const DATA = useSelector((state) => state.saved.parsedData);

  const [activeScreenHealth, setActiveScreenHealth] = useState(true);

  const { countryOne, countryTwo } = route.params;

  const chosenCountry = DATA.countries.filter(
    (item) => item.name === "Ukraine"
  )[0];

  useEffect(() => {
    navigation.setOptions({
      title: `${countryOne} - ${countryTwo}`,
    });
  }, []);

  function changeActiveScreen(screen) {
    setActiveScreenHealth(screen);
  }

  const health = (
    <View style={styles.infoContainer}>
      <TextInter style={styles.infoContainerText}>
        {chosenCountry.health.countryGeneralInfo}
      </TextInter>
      <View style={styles.stackViewContainer}>
        {chosenCountry.health.stackInfo.map((item, index) => (
          <View key={index} style={styles.stack}>
            <StackView title={item.title} description={item.textInfo} />
          </View>
        ))}
      </View>
    </View>
  );

  const link = (
    <View style={styles.infoContainer}>
      <View style={styles.stackViewContainer}>
        {chosenCountry.links.map((item, index) => (
          <View key={index} style={styles.stack}>
            <StackView title={item.title} link={item.link} />
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topButtonsContainer}>
        <Pressable
          style={[
            styles.topButtonContainer,
            activeScreenHealth && styles.activeTopButton,
          ]}
          onPress={() => {
            changeActiveScreen(true);
          }}
        >
          <TextInter style={styles.topButtonsText}>Health</TextInter>
        </Pressable>
        <Pressable
          style={[
            styles.topButtonContainer,
            !activeScreenHealth && styles.activeTopButton,
          ]}
          onPress={() => {
            changeActiveScreen(false);
          }}
        >
          <TextInter style={styles.topButtonsText}>Links</TextInter>
        </Pressable>
      </View>

      {activeScreenHealth && health}
      {!activeScreenHealth && link}

      <PrimaryButton text={"Add to saved"} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
    paddingTop: 17,
  },
  topButtonsContainer: {
    flexDirection: "row",
  },
  topButtonContainer: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray4,
  },
  activeTopButton: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.purple1,
  },
  infoContainer: {
    marginTop: 24,
  },
  infoContainerText: {
    fontFamily: "Inter_400Regular",
  },
  stackViewContainer: {
    marginVertical: 14,
  },
  stack: {
    marginBottom: 12,
  },
});
