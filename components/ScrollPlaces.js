import { ScrollView, StyleSheet, View } from "react-native";
import Input from "./Input";
import PlaceBig from "./PlaceBig";
import SeeAllButton from "./SeeAllButton";
import TextInter from "./TextInter";

export default function ScrollPlaces({ title, data, getId }) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <TextInter style={styles.title}>{title}</TextInter>
        <SeeAllButton />
      </View>
      <ScrollView
        style={styles.scroll}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item) => {
          return (
            <View key={item.id} style={styles.placeContainer}>
              <PlaceBig
                item={item}
                img={item.image}
                name={item.name}
                location={`${item.country} ${item.city ? item.city : ""}`}
                rating={item.rate}
                reviews={item.reviews}
                getId={getId}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingVertical: 5,
    paddingLeft: 5,
  },
  placeContainer: {
    marginRight: 17,
  },
  titleContainer: {
    marginTop: 25.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16.5,
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
  },
});
