import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../constants/colors.js";

import Rating from "./Rating.js";
import TextInter from "./TextInter.js";
import Heart from "./Heart";

export default function PlaceList({ onPress, item, noDescription }) {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.iconContainer}>
          <Heart item={item} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <TextInter style={styles.name}>{item.name}</TextInter>
        <View style={styles.ratingContainer}>
          <Rating rating={item.rate} reviews={item.reviews} />
        </View>
        <View>
          <TextInter style={styles.descrText}>
            {!noDescription && item.description}
          </TextInter>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    width: "100%",
    height: 112,
    padding: 10,
    borderRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray4,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 157,
    height: 92,
    borderRadius: 20,
    position: "relative",
  },
  iconContainer: {
    backgroundColor: "white",
    width: 32,
    height: 32,
    borderRadius: 200,
    position: "absolute",
    top: 10,
    right: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {},
  infoContainer: {
    flex: 1,
    // marginLeft: 28,
  },
  name: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
  },
  ratingContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  descrText: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: Colors.gray2,
  },
});
