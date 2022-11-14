import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Input from "../../../components/Input.js";
import ScrollPlaces from "../../../components/ScrollPlaces.js";

const parsedLoaction = {
  country: "Ukraine",
  city: "Lviv",
};

export default function PlacesMainScreen({ navigation }) {
  const DATA = useSelector((state) => state.saved.parsedData);

  function goToSearchWidowHandler() {
    navigation.navigate("PlacesSearch");
  }

  const initialPlacesData = DATA.intPlaces.filter(
    (item) => item.city === parsedLoaction.city
  );
  const initialRestaurantsData = DATA.restaurants.filter(
    (item) => item.city === parsedLoaction.city
  );
  const initialCityData = DATA.cities.filter(
    (item) => item.country === parsedLoaction.country
  );

  function placePressHandler(id) {
    navigation.navigate("PlacesPlace", {
      id: id,
      intPlacesList: initialPlacesData,
      restaurants: initialRestaurantsData,
    });
  }

  function cityPressHandler(id) {
    navigation.navigate("PlacesCity", {
      cityId: id,
      citiesData: initialCityData,
    });
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <View style={[styles.inputStyle]}>
          <Input
            placeholder={"Where are you going?"}
            search
            labelOff
            inactive
            onPressIn={goToSearchWidowHandler}
          />
        </View>
        <ScrollPlaces
          title={"Nearby interesting places"}
          data={initialPlacesData}
          getId={placePressHandler}
        />
        <ScrollPlaces
          title={"Nearby interesting restaurants"}
          data={initialRestaurantsData}
          getId={placePressHandler}
        />
        <ScrollPlaces
          title={"Nearby interesting cities"}
          data={initialCityData}
          getId={cityPressHandler}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 23,
    paddingTop: 50,
  },
  inputStyle: {
    marginTop: 10,
  },
  scrollContainer: {
    // marginBottom: 50,
  },
});
