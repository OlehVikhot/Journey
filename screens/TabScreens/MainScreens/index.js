import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import MainPageScreen from "./MainPageScreen";
import MainTripInfoScreen from "./MainTripInfoScreen";
import MainSearchScreen from "./MainSearchScreen";
import MainMapScreen from "./MainMapScreen";
import { colors } from "../../../constants/colors";

const Stack = createNativeStackNavigator();

export default function MainScreens({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Stack.Screen
        name='Main'
        component={MainPageScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Map'
        component={MainMapScreen}
        options={{
          gestureDirection: "vertical",
          title: "Select destination country",
          headerShadowVisible: false,
          headerLeft: () => (
            <Ionicons
              name='chevron-back'
              size={24}
              color='black'
              onPress={() => {
                navigation.navigate("Main");
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name='MainSearch'
        component={MainSearchScreen}
        options={{
          gestureDirection: "vertical",
          title: "Discover entry information",
          headerShadowVisible: false,
          headerLeft: () => (
            <Ionicons
              name='chevron-back'
              size={24}
              color='black'
              onPress={() => {
                navigation.navigate("Main");
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name='MainTripInfo'
        component={MainTripInfoScreen}
        options={{
          headerShadowVisible: false,
          title: "Ukraine - Germany",
          headerLeft: () => (
            <Ionicons
              name='chevron-back'
              size={24}
              color='black'
              onPress={() => {
                navigation.navigate("Main");
              }}
            />
          ),
          headerRight: () => (
            <Feather name='share' size={24} color='black' onPress={() => {}} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
