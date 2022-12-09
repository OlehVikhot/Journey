import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Image, StyleSheet, View, Dimensions, Pressable } from "react-native";
import { Input, PrimaryButton, TextInter } from "../../../components";
import { getCountryName, getMapPreview } from "../../../util/location";
import { colors } from "../../../constants/colors";

const { width } = Dimensions.get("window") - 23;
const { height } = Dimensions.get("window");

export default function MainScreen({ navigation, route }) {
  const [startCountry, setStartCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  let location = useSelector((state) => state.auth.location);

  useEffect(() => {
    (async () => {
      if (location.lng && location.lat) {
        const country = await getCountryName(location.lat, location.lng);
        setStartCountry(country);
      }
    })();
  }, [location]);

  let locationPreview = (
    <Image
      style={styles.map}
      source={{
        uri: getMapPreview(49.107292028106905, 12.579945794502002, true),
      }}
    />
  );

  if (location.lat && location.lng) {
    locationPreview = (
      <Image
        style={styles.map}
        source={{ uri: getMapPreview(location.lat, location.lng) }}
      />
    );
  }

  const mapPickedLocation = route.params && {
    lat: route.params.pickedLat,
    lng: route.params.pickedLng,
  };

  if (mapPickedLocation) {
    locationPreview = (
      <Image
        style={styles.map}
        source={{
          uri: getMapPreview(mapPickedLocation.lat, mapPickedLocation.lng),
        }}
      />
    );
  }

  function pickOnMapHandler() {
    navigation.navigate("Map", {
      location: mapPickedLocation ? mapPickedLocation : location,
    });
  }

  useEffect(() => {
    (async () => {
      if (mapPickedLocation) {
        const country = await getCountryName(
          mapPickedLocation.lat,
          mapPickedLocation.lng
        );
        setSelectedCountry(country);
      }
    })();
  }, [mapPickedLocation]);

  function readInfoHandler() {
    navigation.navigate("MainSearch", { startCountry });
  }

  function readEntryInfoHandler(isButton) {
    if (startCountry && selectedCountry && isButton) {
      navigation.navigate("MainTripInfo", {
        countryOne: startCountry,
        countryTwo: selectedCountry,
      });
      return;
    }

    if (startCountry && selectedCountry && !isButton) {
      navigation.navigate("MainSearch", {
        startCountry: startCountry,
        selectedCountry: selectedCountry,
      });
      return;
    }

    if (startCountry) {
      navigation.navigate("MainSearch", { startCountry });
      return;
    }
    if (selectedCountry) {
      navigation.navigate("MainSearch", { selectedCountry: selectedCountry });
      return;
    }

    navigation.navigate("MainSearch", {
      startCountry: "",
      selectedCountry: "",
    });
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <View>
          <TextInter style={styles.titleText}>Hey, Alex</TextInter>
          <TextInter style={styles.underTitleText}>
            Where are you going?
          </TextInter>
        </View>
        <View>
          <Image
            style={styles.profileImage}
            source={require(`../../../assets/images/starting1.png`)}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <TextInter style={styles.info}>Discover entry information</TextInter>
        <TextInter style={styles.subInfo}>
          First, choose country of depature. Next, country of destination
        </TextInter>
      </View>
      <Input
        labelOff
        search
        placeholder={"Search"}
        text
        inactive
        onPressIn={() => readEntryInfoHandler()}
        setInputText={selectedCountry}
      />
      <Pressable onPress={pickOnMapHandler} style={styles.mapContainer}>
        {locationPreview}
      </Pressable>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          text={"Read entry information"}
          onPress={() => readEntryInfoHandler(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 23,
    marginTop: 74,
  },
  titleContainer: {
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 28,
    color: colors.purple1,
    fontFamily: "Inter_700Bold",
  },
  underTitleText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  profileImage: {
    width: 51,
    height: 51,
    borderRadius: 100,
  },
  infoContainer: {
    marginBottom: 14,
  },
  info: {
    fontFamily: "Inter_700Bold",
    marginBottom: 4,
  },
  subInfo: {
    fontFamily: "Inter_400Regular",
  },
  mapContainer: {
    marginTop: 14,
    marginBottom: 14,
    height: height - 460,
  },
  map: {
    width: width,
    height: "100%",
    borderRadius: 18,
  },
  buttonContainer: {
    marginBottom: 10,
  },
});
