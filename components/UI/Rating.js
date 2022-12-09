import { StyleSheet, Text, View } from "react-native";
import { TextInter } from "../Layout/TextInter";
import { colors } from "../../constants/colors";

const ratingDots = ["⬤ ", "⬤ ", "⬤ ", "⬤ ", "⬤ "];

export function Rating({ rating, reviews, vertical }) {
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
    color: colors.purple1,
  },
  inactiveDot: {
    color: colors.disabledPurple,
  },
  reviewText: {
    fontSize: 10,
    fontFamily: "Inter_400Regular",
    color: colors.gray2,
  },
});
