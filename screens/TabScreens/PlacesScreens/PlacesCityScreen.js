import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  ForumSection,
  Heart,
  ImagesCounter,
  ImagesSlider,
  PlaceButton,
  PrimaryButton,
  PlaceList,
  TextButton,
  TextInter,
} from "../../../components";

export default function PlacesCityScreen({ navigation, route }) {
  const [activeScreen, setActiveScreen] = useState(0);

  const intPlaces = useSelector((state) => state.saved.parsedData.intPlaces);
  const restaurants = useSelector(
    (state) => state.saved.parsedData.restaurants
  );

  const cityId = route.params.cityId;
  const citiesData = route.params.citiesData;

  const chosenCity = citiesData.filter((item) => item.id === cityId)[0];

  const chosenCityIntPlaces = intPlaces.filter(
    (item) => item.city === chosenCity.name
  );
  const chosenCityRestaurants = restaurants.filter(
    (item) => item.city === chosenCity.name
  );

  useEffect(() => {
    navigation.setOptions({
      title: `${chosenCity.name}`,
    });
  }, []);

  function activeScreenHandler(screen) {
    setActiveScreen(screen);
  }

  let content = (
    <View>
      <View>
        <ImagesSlider uriList={chosenCity.imagesArr} />
        <View style={styles.heart}>
          <Heart item={chosenCity} />
        </View>
        <View style={styles.counter}>
          <ImagesCounter />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <TextInter style={styles.cityNameText}>{chosenCity.name}</TextInter>
          <TextInter style={styles.description}>
            {chosenCity.description}
          </TextInter>
          <View style={styles.viewMore}>
            <TextButton text={"View more information"} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton text={"Read entry information"} />
        </View>
        <View>
          <ForumSection />
        </View>
      </View>
    </View>
  );

  function placePressHandler(id) {
    navigation.navigate("PlacesPlace", {
      id: id,
      intPlacesList: chosenCityIntPlaces,
      restaurants: chosenCityRestaurants,
    });
  }

  if (activeScreen != 0) {
    content = (
      <View style={styles.intPlaces}>
        <View>
          <TextInter>
            657 interesting places sorted by travel favourites
          </TextInter>
        </View>
        {activeScreen === 1
          ? chosenCityIntPlaces.map((item) => {
              return (
                <PlaceList
                  key={item.id}
                  item={item}
                  onPress={() => placePressHandler(item.id)}
                />
              );
            })
          : chosenCityRestaurants.map((item) => {
              return (
                <PlaceList
                  key={item.id}
                  item={item}
                  onPress={() => placePressHandler(item.id)}
                />
              );
            })}
      </View>
    );
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.placesContainer}
      >
        <PlaceButton
          text={"OverView"}
          onPress={() => {
            activeScreenHandler(0);
          }}
          activeOn={activeScreen === 0 ? true : false}
        />
        <PlaceButton
          text={"Interesting Places"}
          onPress={() => {
            activeScreenHandler(1);
          }}
          activeOn={activeScreen === 1 ? true : false}
        />
        <PlaceButton
          text={"Restaurants"}
          onPress={() => {
            activeScreenHandler(2);
          }}
          activeOn={activeScreen === 2 ? true : false}
        />
      </ScrollView>
      {content}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },
  placesContainer: {
    paddingLeft: 23,
    marginBottom: 10,
  },
  heart: {
    position: "absolute",
    right: 24,
    top: 14,
  },
  counter: {
    position: "absolute",
    right: 24,
    bottom: 14,
  },
  cityNameText: {
    fontSize: 22,
    fontFamily: "Inter_400Regular",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    marginBottom: 6,
  },
  viewMore: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 22,
    marginBottom: 24,
  },
  infoContainer: {
    paddingHorizontal: 23,
    marginTop: 24,
  },
  intPlaces: {
    paddingHorizontal: 23,
  },
});
