import { StyleSheet, Text, View } from "react-native";
import ProfileComponent from "../../../components/ProfileComponent";
import TextTitle from "../../../components/TextTitle";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TextButton from "../../../components/TextButton";

export default function ProfileMainScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <TextTitle style={styles.headline}>Profile</TextTitle>
      <ProfileComponent text={"Edit Profile"} img name={"Alex"} />

      <TextTitle style={styles.titles}>Account Setting</TextTitle>
      <ProfileComponent
        text={"Notification"}
        icon={<Entypo name="notification" size={24} color="black" />}
      />
      <ProfileComponent
        text={"Privacy and sharing"}
        icon={<Feather name="lock" size={24} color="black" />}
      />

      <TextTitle style={styles.titles}>Support</TextTitle>
      <ProfileComponent
        text={"How Journey works"}
        icon={<AntDesign name="questioncircleo" size={24} color="black" />}
      />
      <ProfileComponent
        text={"Get Help"}
        icon={<MaterialIcons name="headset-mic" size={24} color="black" />}
      />

      <TextTitle style={styles.titles}>Legal</TextTitle>
      <ProfileComponent
        text={"Term of service"}
        icon={
          <MaterialCommunityIcons
            name="file-document-multiple-outline"
            size={24}
            color="black"
          />
        }
      />
      <ProfileComponent
        text={"Privacy Policy"}
        icon={
          <MaterialCommunityIcons
            name="file-document-multiple"
            size={24}
            color="black"
          />
        }
      />
      <View style={styles.logOut}>
        <TextButton
          text={"Log Out"}
          onPress={() =>
            navigation.navigate("LogInScreens", { screen: "LogInMain" })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 23,
    marginTop: 70,
  },
  headline: {
    fontSize: 34,
    marginBottom: 20,
  },
  titles: {
    marginTop: 20,
  },
  logOut: {
    alignItems: "center",
    marginTop: 43,
  },
});
