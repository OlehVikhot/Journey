import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Colors } from "../../../constants/colors";

import ChosenPlaceScreen from "./PlacesPlaceScreen";
import PlacesMainScreen from "./PlacesMainScreen";
import PlacesSearchScreen from "./PlacesSearchScreen";
import PlacesCityScreen from "./PlacesCityScreen";
import PlacesPlaceScreen from "./PlacesPlaceScreen";

const Stack = createNativeStackNavigator();

export default function PlacesScreens({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.white,
        },
      }}
    >
      <Stack.Screen
        name="PlacesMain"
        component={PlacesMainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlacesSearch"
        component={PlacesSearchScreen}
        options={{
          gestureDirection: "vertical",
          title: "Where are you going?",
          headerShadowVisible: false,
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              color="black"
              onPress={() => {
                navigation.navigate("PlacesMain");
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="PlacesCity"
        component={PlacesCityScreen}
        options={{
          // gestureDirection: "vertical",
          title: "Frankfurt",
          headerShadowVisible: false,
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              color="black"
              onPress={() => {
                navigation.navigate("PlacesMain");
              }}
            />
          ),
          headerRight: () => (
            <Feather name="share" size={24} color="black" onPress={() => {}} />
          ),
        }}
      />
      <Stack.Screen
        name="PlacesPlace"
        component={PlacesPlaceScreen}
        options={{
          // gestureDirection: "vertical",
          title: "Frankfurt",
          headerShadowVisible: false,
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              color="black"
              onPress={() => {
                // navigation.navigate("PlacesCity");
              }}
            />
          ),
          headerRight: () => (
            <Feather name="share" size={24} color="black" onPress={() => {}} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
