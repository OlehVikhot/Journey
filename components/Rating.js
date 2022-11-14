import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import TextInter from "./TextInter";

export default function Rating({ rating, reviews, vertical }) {
  const ratingDots = ["⬤ ", "⬤ ", "⬤ ", "⬤ ", "⬤ "];

  return (
    <View style={[styles.mainContainer, vertical && styles.verticalContainer]}>
      <View
        style={[
          styles.ratingContainer,
          vertical && styles.verticalratingContainer,
        ]}
      >
        {ratingDots.map((item, index) => {
          if (index <= rating - 1) {
            return (
              <Text key={index} style={[styles.dot]}>
                {item}
              </Text>
            );
          } else {
            return (
              <Text key={index} style={[styles.dot, styles.inactiveDot]}>
                {item}
              </Text>
            );
          }
        })}
      </View>
      <View>
        <TextInter style={styles.reviewText}>{reviews} rewiews</TextInter>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  verticalContainer: {
    flexDirection: "column",
  },
  ratingContainer: {
    flexDirection: "row",
    marginRight: 8,
  },
  verticalratingContainer: {
    marginRight: 0,
    marginBottom: 8,
  },
  dot: {
    fontSize: 8,
    color: Colors.purple1,
  },
  inactiveDot: {
    color: Colors.disabledPurple,
  },
  reviewText: {
    fontSize: 10,
    fontFamily: "Inter_400Regular",
    color: Colors.gray2,
  },
});
