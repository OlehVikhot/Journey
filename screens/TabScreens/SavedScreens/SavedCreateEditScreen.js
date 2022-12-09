import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { addTrip } from "../../../store/savedSlice";
import { Input, PrimaryButton, TextTitle } from "../../../components";

export default function SavedCreateEditScreen({ navigation }) {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [tripName, setTripName] = useState();
  const [tripDescriprion, setTripDescriprion] = useState();

  function getTripName(text) {
    setTripName(text);
  }

  function getTripDescription(text) {
    setTripDescriprion(text);
  }

  function addNewTripHandler() {
    dispatch(
      addTrip({
        id: Math.floor(Math.random() * 10000),
        name: tripName,
        description: tripDescriprion,
        image: "https://how.travel/wp-content/uploads/2019/05/ce-travel1.jpg",
        intPlaces: [],
        cities: [],
      })
    );
    navigation.navigate("SavedList");
  }

  return (
    <View style={styles.mainContainer}>
      <TextTitle>{edit ? "Edit" : "Create"}</TextTitle>
      <View style={styles.inputName}>
        <Input
          label={"Trip name"}
          placeholder={"Trip name"}
          getText={getTripName}
        />
      </View>
      <View style={styles.inputDescr}>
        <Input
          label={"Description"}
          placeholder={"Describe your trip"}
          getText={getTripDescription}
        />
      </View>
      {/* <TextTitle>Friends</TextTitle>
      <View>
        <Image />
        <TextInter />
      </View> */}
      <PrimaryButton
        text={edit ? "Edit" : "Create"}
        onPress={addNewTripHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 23,
    marginTop: 12,
  },
  inputName: {
    marginTop: 12,
    marginBottom: 12,
  },
  inputDescr: {
    marginBottom: 40,
  },
});
