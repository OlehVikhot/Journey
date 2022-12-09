import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PrimaryButton, TextInter, InfoComponent } from "../../../components";

export default function SavedFirstScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <TextInter style={styles.title}>Saved</TextInter>
      <View style={styles.infoContainer}>
        <InfoComponent
          text={"Save intresting places and restaurants you'd like to visit"}
        >
          <Feather name='map-pin' size={24} color='white' />
        </InfoComponent>
        <InfoComponent
          text={"Save entire information about country you'd like to visit"}
        >
          <AntDesign name='hearto' size={24} color='white' />
        </InfoComponent>
        <InfoComponent text={"Create your trip and share with friends"}>
          <MaterialCommunityIcons name='pen' size={24} color='white' />
        </InfoComponent>
      </View>

      <PrimaryButton
        text={"Create a trip"}
        onPress={() => navigation.navigate("SavedCreateEdit")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 70,
    paddingHorizontal: 23,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 34,
    marginBottom: 43,
  },
  infoContainer: {
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 25,
  },
});
