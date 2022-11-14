import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import Heart from "../../../components/Heart";
import ImagesCounter from "../../../components/ImagesCounter";
import ImagesSlider from "../../../components/ImagesSlider";
import Rating from "../../../components/Rating";
import TextButton from "../../../components/TextButton";
import TextInter from "../../../components/TextInter";
import { Entypo } from "@expo/vector-icons";
import ForumSection from "../../../components/ForumSection";
import ScrollPlaces from "../../../components/ScrollPlaces";
import { useEffect } from "react";

const { width } = Dimensions.get("window");
const height = width / 2;

export default function PlacesPlaceScreen({ navigation, route }) {
  let placeId = route.params.id;

  const intrestingPlaces = [
    ...route.params.intPlacesList,
    ...route.params.restaurants,
  ];

  const chosenPlace = intrestingPlaces.filter((item) => item.id === placeId)[0];

  useEffect(() => {
    navigation.setOptions({
      title: `${chosenPlace.name}`,
    });
  }, [placeId]);

  // function placePressHandler(id) {
  //   navigation.navigate("PlacesPlace", {
  //     id: id,
  //     intPlacesList: route.params.intPlacesList,
  //     restaurants: route.params.restaurants,
  //   });
  // }

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <ImagesSlider uriList={chosenPlace.image} />
      </View>
      <View style={styles.counter}>
        <ImagesCounter />
      </View>
      <View style={styles.heart}>
        <Heart item={chosenPlace} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <TextInter style={styles.headerText}>{chosenPlace.name}</TextInter>
          <View style={styles.rating}>
            <Rating rating={chosenPlace.rate} reviews={chosenPlace.reviews} />
          </View>
          <TextButton text={"Visit website"} />
        </View>
        <Pressable style={styles.openHoursContainer}>
          <View>
            <TextInter style={styles.openText}>Open now</TextInter>
            <TextInter style={styles.openHours}>10:00 AM - 6:00 AM</TextInter>
          </View>
          <Entypo name="chevron-right" size={24} color="black" />
        </Pressable>
        <View style={styles.aboutContainer}>
          <TextInter style={styles.aboutText}>About</TextInter>
          <TextInter style={styles.aboutDescr}>
            Considered the city's finest art museum, the stadel holds a
            fantastic collection of works from the 14th century thought the
            present day...
          </TextInter>
          <TextButton text={"Read more"} />
        </View>
        <View>
          <TextInter style={styles.aboutText}>The area</TextInter>
          <TextInter style={styles.adress}>Adress</TextInter>
          <TextInter style={styles.adressDescr}>
            Scmaumainkali 63, 60596 Frankfurt Hesse Germany
          </TextInter>
          <TextInter style={styles.adress}>How to get there</TextInter>
          <TextInter style={styles.hotToGet}>
            Scweizer Platz / Museum suffer - 7 min walk Willy Brand Platz /
            Europaische Zentralbank - 9 min walk
          </TextInter>
        </View>
      </View>
      <View style={styles.mapContainer}>
        <Image source={require("../../../img/map2.png")} style={styles.map} />
      </View>
      <View style={styles.additionalInfoContainer}>
        <View>
          <ForumSection />
        </View>
        {/* <View>
          <ScrollPlaces
            title={"Nearby intersting places"}
            data={route.params.intPlacesList}
            getId={placePressHandler}
          />
          <ScrollPlaces
            title={"Nearby intersting restaurants"}
            data={route.params.restaurants}
          />
        </View> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {},
  heart: {
    position: "absolute",
    top: 14,
    right: 23,
  },
  counter: {
    position: "absolute",
    right: 23,
    top: 165,
  },
  infoContainer: {
    padding: 23,
  },
  titleContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 26,
  },
  headerText: {
    fontFamily: "Inter_700Bold",
    fontSize: 22,
    marginBottom: 9,
  },
  rating: {
    marginBottom: 9,
  },
  openHoursContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  openText: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
  },
  openHours: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  aboutContainer: {
    alignItems: "flex-start",
    marginBottom: 22,
  },
  aboutText: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    marginBottom: 6,
  },
  aboutDescr: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    marginBottom: 6,
  },
  adress: {
    marginBottom: 6,
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  adressDescr: {
    marginBottom: 6,
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  hotToGet: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  mapContainer: {},
  map: {
    width: width,
    height: height,
  },
  additionalInfoContainer: {
    padding: 23,
  },
});
