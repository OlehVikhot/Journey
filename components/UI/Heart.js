import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Modal, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { addTripItem, removeTripItem } from "../../store/savedSlice";
import { SavedTrip } from "../Complex/SavedTrip";
import { TextInter } from "../Layout/TextInter";
import { PrimaryButton } from "./PrimaryButton";
import { colors } from "../../constants/colors";

export function Heart({ item }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [heartActive, setHeartActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const tripList = useSelector((state) => state.saved.savedLists);

  useEffect(() => {
    if (item.isSaved === true) {
      setHeartActive(true);
    }
    if (item.isSaved === false) {
      setHeartActive(false);
    }
  }, [item]);

  function heartPressHandler() {
    if (heartActive) {
      setModalVisible(false);
      setHeartActive(false);
      dispatch(removeTripItem({ item: item }));
    }
    if (!heartActive) {
      setModalVisible(true);
    }
  }

  function addPlace(tripId) {
    if (!heartActive) {
      dispatch(addTripItem({ tripId, item }));
      setHeartActive(true);
    }
    setModalVisible(false);
  }

  function createNewTripHandler() {
    navigation.navigate("SavedScreens", {
      screen: "SavedCreateEdit",
    });
    setModalVisible(false);
  }

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Pressable style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.textContainer}>
              <TextInter style={styles.headerText}>
                Select a trip to save
              </TextInter>
            </View>
            <ScrollView style={styles.scrollList}>
              {tripList.map((item) => {
                return (
                  <SavedTrip
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    onPress={() => {
                      addPlace(item.id);
                    }}
                  />
                );
              })}
            </ScrollView>

            <View style={styles.button}>
              <PrimaryButton
                text={"Create a new trip"}
                onPress={createNewTripHandler}
              />
            </View>
          </View>
        </Pressable>
      </Modal>
      <Pressable style={styles.iconContainer} onPress={heartPressHandler}>
        {heartActive ? (
          <AntDesign
            style={styles.iconActive}
            name="heart"
            size={18}
            color="black"
          />
        ) : (
          <AntDesign name="hearto" size={18} color="black" />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 26,
    paddingTop: 26,
    maxHeight: 400,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textContainer: {
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    marginBottom: 15,
  },
  scrollList: {
    maxHeight: 230,
  },
  iconContainer: {
    backgroundColor: "white",
    width: 32,
    height: 32,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  iconActive: {
    color: colors.purple1,
  },
  button: {
    marginTop: 16,
    marginBottom: 40,
  },
});
