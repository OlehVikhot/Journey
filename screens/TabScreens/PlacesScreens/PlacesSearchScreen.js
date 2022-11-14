import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CitySearchItem from "../../../components/CitySearchItem";
import Input from "../../../components/Input";

export default function PlacesSearchScreen({ navigation }) {
  const [cityFilter, setCityFilter] = useState("");

  const DATA = useSelector((state) => state.saved.parsedData);

  function cityPickHandler(cityId) {
    navigation.navigate("PlacesCity", {
      cityId: cityId,
      citiesData: DATA.cities,
    });
  }

  function cityFilterHandler(text) {
    setCityFilter(text);
  }

  const filteredCities = DATA.cities.filter((item) =>
    item.name.includes(cityFilter)
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Input search autoFocus={true} labelOff getText={cityFilterHandler} />
      </View>
      <ScrollView
        style={styles.citiesContainer}
        keyboardShouldPersistTaps={"handled"}
        showsVerticalScrollIndicator={false}
      >
        {filteredCities.map((item) => {
          return (
            <CitySearchItem
              item={item}
              key={item.id}
              onPress={() => cityPickHandler(item.id)}
              setInputText={cityFilter}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 23,
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  citiesContainer: {
    maxHeight: 340,
  },
});
