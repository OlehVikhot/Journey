import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useSelector } from "react-redux";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Colors } from "../../../constants/colors";

import SavedOneScreen from "./SavedOneScreen";
import SavedFirstScreen from "./SavedFirstScreen";
import SavedListScreen from "./SavedListScreen";
import SavedCreateEditScreen from "./SavedCreateEditScreen";

const Stack = createNativeStackNavigator();

export default function SavedScreens({ navigation }) {
  const tripList = useSelector((state) => state.saved.savedLists).length;

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.white,
        },
      }}
    >
      {!tripList && (
        <Stack.Screen
          name="SavedFirst"
          component={SavedFirstScreen}
          options={{ headerShown: false }}
        />
      )}
      <Stack.Screen
        name="SavedList"
        component={SavedListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SavedCreateEdit"
        component={SavedCreateEditScreen}
        options={{
          headerShadowVisible: false,
          title: "Ukraine - Germany",
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              color="black"
              onPress={() => {
                navigation.navigate("SavedOneScreen");
              }}
            />
          ),
          headerRight: () => (
            <Feather name="share" size={24} color="black" onPress={() => {}} />
          ),
        }}
      />
      <Stack.Screen
        name="SavedOneScreen"
        component={SavedOneScreen}
        options={{
          headerShadowVisible: false,
          title: "Ukraine - Germany",
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              color="black"
              onPress={() => {
                navigation.navigate("SavedList");
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
