import { Image, ScrollView, StyleSheet, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width / 2;

export function ImagesSlider({ uriList }) {
  const isArr = Array.isArray(uriList);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      {isArr &&
        uriList.map((item, index) => {
          return (
            <View style={styles.mainContainer} key={index}>
              <Image style={styles.image} source={{ uri: item }} />
            </View>
          );
        })}
      {!isArr && (
        <View style={styles.mainContainer}>
          <Image style={styles.image} source={{ uri: uriList }} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width,
    height,
  },
  image: {
    width: "100%",
    height: "100%",
    // resizeMode: "stretch",
  },
});
