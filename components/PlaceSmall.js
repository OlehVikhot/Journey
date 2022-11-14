import { Image, StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../constants/colors.js";
import { Shadow } from "../constants/shadow.js";
import Heart from "./Heart.js";

import Rating from "./Rating.js";
import TextInter from "./TextInter.js";

export default function PlaceSmall() {
  return (
    <View style={[styles.mainContainerSmall, Shadow]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require(`../img/museum.jpeg`)} />
        <View style={styles.iconContainer}>
          <Heart />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <TextInter style={styles.name}>Main Tower</TextInter>
        <View style={styles.ratingContainer}>
          <Rating rating={4} />
        </View>
        <View>
          <TextInter style={styles.descrText}>Arhitectural buldings</TextInter>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerSmall: {
    flexDirection: "row",
    width: 328,
    height: 112,
    padding: 10,
    borderRadius: 20,
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
    position: "absolute",
    top: 10,
    right: 0,
  },
  icon: {},
  infoContainer: {
    flex: 1,
    marginLeft: 18,
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
