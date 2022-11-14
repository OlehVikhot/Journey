import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import CitySearchItem from "../../../components/CitySearchItem";
import Input from "../../../components/Input";
import PrimaryButton from "../../../components/PrimaryButton";
import { useSelector } from "react-redux";

export default function MainSearchScreen({ navigation, route }) {
  const [activeInput, setActiveInput] = useState(1);

  const [countryOneFilter, setCountryOneFilter] = useState(null);
  const [countryTwoFilter, setCountryTwoFilter] = useState(null);

  let firstCountry = route.params.startCountry ? route.params.startCountry : "";
  console.log(route.params);
  let secondCountry = route.params.selectedCountry
    ? route.params.selectedCountry
    : "";

  const DATA = useSelector((state) => state.saved.parsedData);

  useEffect(() => {
    setCountryOneFilter(firstCountry);
    setCountryTwoFilter(secondCountry);
  }, []);

  function setActiveInputHandler(item) {
    setActiveInput(item);
  }

  function countryTwoFilterHandler(text) {
    setCountryTwoFilter(text);
  }

  function countryOneFilterHandler(text) {
    setCountryOneFilter(text);
  }

  function pressCountryHandler(text) {
    if (activeInput === 0) {
      setCountryOneFilter(text);
    } else {
      setCountryTwoFilter(text);
    }
  }

  let filteredCountries = DATA.countries.filter((item) =>
    item.name.includes(activeInput === 0 ? countryOneFilter : countryTwoFilter)
  );

  function readEntryInfoHandler() {
    if (countryOneFilter === countryTwoFilter) {
      Alert.alert(
        "Choose two different countries",
        "Please choose two different counties to see infromation"
      );
      return;
    }
    navigation.navigate("MainTripInfo", {
      countryOne: countryOneFilter,
      countryTwo: countryTwoFilter,
    });
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstInput}>
        <Input
          search
          labelOff
          placeholder={"Country of departue"}
          getText={countryOneFilterHandler}
          setInputText={countryOneFilter}
          onPressIn={() => setActiveInputHandler(0)}
        />
      </View>
      <View style={styles.secondInput}>
        <Input
          search
          labelOff
          autoFocus={true}
          placeholder={"Country of destination"}
          getText={countryTwoFilterHandler}
          setInputText={countryTwoFilter}
          onPressIn={() => setActiveInputHandler(1)}
        />
      </View>
      <ScrollView
        style={styles.itemsContainer}
        keyboardShouldPersistTaps={"handled"}
      >
        {filteredCountries.map((item, index) => {
          return (
            <CitySearchItem
              key={index}
              item={item}
              onPress={pressCountryHandler}
            />
          );
        })}
      </ScrollView>
      <View>
        <PrimaryButton
          text={"Read entry destination"}
          inactive={countryOneFilter && countryTwoFilter ? false : true}
          onPress={
            countryOneFilter && countryTwoFilter ? readEntryInfoHandler : null
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
  },
  firstInput: {
    marginVertical: 12,
  },
  secondInput: {
    marginBottom: 24,
  },
  itemsContainer: {
    marginBottom: 12,
    maxHeight: 280,
  },
});
