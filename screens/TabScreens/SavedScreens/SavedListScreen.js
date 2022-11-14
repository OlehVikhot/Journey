import { ScrollView, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import SavedTrip from "../../../components/SavedTrip";
import TextTitle from "../../../components/TextTitle";
import ViewContainer from "../../../components/ViewContainer";
import { useSelector } from "react-redux";

export default function SavedListScreen({ navigation }) {
  const tripList = useSelector((state) => state.saved.savedLists);
  console.log(tripList);

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
