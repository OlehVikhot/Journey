import { Image, StyleSheet, View } from "react-native";
import { Heart } from "../UI/Heart";
import { Rating } from "../UI/Rating";
import { TextInter } from "../Layout/TextInter";
import { colors } from "../../constants/colors";
import { shadow } from "../../constants/shadow";

export function PlaceSmall() {
  return (
    <View style={[styles.mainContainerSmall, shadow]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require(`../../assets/images/museum.jpeg`)}
        />
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
    color: colors.gray2,
  },
});
