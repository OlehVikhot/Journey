import { Pressable, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import TextInter from "./TextInter";
import { Colors } from "../constants/colors";

export default function CitySearchItem({ item, onPress }) {
  return (
    <Pressable style={styles.itemContainer} onPress={() => onPress(item.name)}>
      <Feather style={styles.icon} name="map-pin" size={24} color="black" />
      <View>
        <TextInter style={styles.itemTextCountry}>{item.name}</TextInter>
        <TextInter style={styles.itemTextMainland}>
          {item.country || item.location}
        </TextInter>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: Colors.gray5,
    paddingVertical: 12,
  },
  icon: {
    marginRight: 15,
  },
  itemTextCountry: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  itemTextMainland: {
    color: Colors.gray3,
    fontSize: 12,
    fontFamily: "Inter_400Regular",
  },
});
