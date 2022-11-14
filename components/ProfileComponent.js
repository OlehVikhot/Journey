import { Image, Pressable, StyleSheet, View } from "react-native";
import TextInter from "./TextInter";
import { Shadow } from "../constants/shadow";
import { Colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileComponent({ img, name, icon, text }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.mainContainer, pressed && Shadow]}
    >
      <View style={styles.leftIconText}>
        {img && (
          <Image
            style={styles.profileImage}
            source={require(`../img/starting1.png`)}
          />
        )}
        {icon && <View style={styles.leftIcon}>{icon}</View>}
        <View>
          {img && <TextInter style={styles.name}>{name}</TextInter>}
          <TextInter style={styles.text}>{text}</TextInter>
        </View>
      </View>
      <View style={styles.RightIcon}>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: Colors.gray4,
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 10,
  },
  mainContainerPressed: {
    // backgroundColor: Colors.gray4,
  },
  leftIconText: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftIcon: {
    marginRight: 15,
  },
  text: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 100,
    marginRight: 16,
  },
  name: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    marginBottom: 6,
  },
});
