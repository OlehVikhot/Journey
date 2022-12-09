import { Image, Pressable, StyleSheet, View } from "react-native";
import { TextInter } from "../Layout/TextInter";
import { colors } from "../../constants/colors";

export function SavedTrip({ name, description, image, onPress }) {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View>
        <TextInter style={styles.title}>{name}</TextInter>
        <TextInter style={styles.descr}>{description}</TextInter>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: 1.2,
    borderBottomColor: colors.gray4,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 10,
    marginRight: 20,
    // backgroundColor: "black",
  },
  title: {
    fontSize: 16,
    marginBottom: 6,
  },
  descr: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
  },
});
