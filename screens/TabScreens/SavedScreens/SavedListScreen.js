import { useSelector } from "react-redux";
import { ScrollView, StyleSheet } from "react-native";
import {
  SavedTrip,
  ViewContainer,
  TextTitle,
  PrimaryButton,
} from "../../../components";

export default function SavedListScreen({ navigation }) {
  const tripList = useSelector((state) => state.saved.savedLists);

  return (
    <ViewContainer style={styles.mainContainer}>
      <TextTitle style={styles.title}>Saved</TextTitle>
      <ScrollView style={styles.scroll}>
        {tripList.map((item, index) => {
          return (
            <SavedTrip
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              onPress={() =>
                navigation.navigate("SavedOneScreen", {
                  name: item.name,
                  index: index,
                  intPlaces: item.intPlaces,
                  cities: item.cities,
                })
              }
            />
          );
        })}
      </ScrollView>
      <PrimaryButton
        text={"Create new trip"}
        onPress={() => navigation.navigate("SavedCreateEdit")}
      />
    </ViewContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 80,
  },
  title: {
    fontSize: 34,
    marginBottom: 34,
  },
  scroll: {
    marginBottom: 34,
  },
});
