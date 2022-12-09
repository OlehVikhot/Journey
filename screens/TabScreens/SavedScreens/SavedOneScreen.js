import { useSelector } from "react-redux";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { PlaceList, TextInter } from "../../../components";

function SavedListAuthor({ image, author, items }) {
  return (
    <View style={styles.authorContainer}>
      <Image style={styles.image} source={{ uri: image }} />
      <TextInter style={styles.authorText}>
        made by {author} | {items} items
      </TextInter>
    </View>
  );
}

export default function SavedOneScreen({ route, navigation }) {
  const tripList = useSelector((state) => state.saved.savedLists);

  const name = route.params.name;
  const index = route.params.index;

  const intPlaces = useSelector(
    (state) => state.saved.savedLists[index].intPlaces
  );
  const cities = useSelector((state) => state.saved.savedLists[index].cities);

  function cityPressHandler(id) {
    navigation.navigate("PlacesScreens", {
      screen: "PlacesCity",
      params: {
        cityId: id,
        citiesData: cities,
      },
    });
  }

  function placePressHandler(id) {
    navigation.navigate("PlacesScreens", {
      screen: "PlacesPlace",
      params: {
        id: id,
        intPlacesList: intPlaces,
        restaurants: [],
      },
    });
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <TextInter style={styles.title}>{name}</TextInter>
      <SavedListAuthor
        author={"Alex"}
        items={10}
        image={
          "https://www.maintower.de/wp-content/uploads/2021/01/maintower-impressions1600x1034.jpg"
        }
      />
      <View style={styles.listContainer}>
        {cities.map((item) => {
          return (
            <PlaceList
              key={item.id}
              item={item}
              noDescription
              onPress={() => {
                cityPressHandler(item.id);
              }}
            />
          );
        })}
        {intPlaces.map((item) => {
          return (
            <PlaceList
              key={item.id}
              item={item}
              onPress={() => {
                placePressHandler(item.id);
              }}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 23,
    marginTop: 12,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 22,
    marginBottom: 10,
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 200,
    marginRight: 12,
  },
  authorText: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
  },
  listContainer: {
    marginTop: 33,
  },
});
