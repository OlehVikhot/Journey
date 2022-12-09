import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { parseData } from "../../store/savedSlice";
import { setLocation } from "../../store/authSlice";
import MainScreens from "./MainScreens";
import PlacesScreens from "./PlacesScreens";
import SavedScreens from "./SavedScreens";
import ProfileScreens from "./ProfileScreens";
import { NEWDATA } from "../../util/DataNew";
import { pickLocation } from "../../util/location";
import { colors } from "../../constants/colors";

const Tab = createBottomTabNavigator();

export default function TabsScreens() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(parseData(NEWDATA));
  }, []);

  useEffect(() => {
    async function getLocation() {
      const location = await pickLocation();

      dispatch(
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        })
      );
    }
    getLocation();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          overflow: "hidden",
          paddingTop: 10,
          height: 96,
          backgroundColor: colors.purple1,
        },
      }}
    >
      <Tab.Screen
        name='MainScreens'
        component={MainScreens}
        options={{
          headerShown: false,
          tabBarLabel: "Main",
          tabBarLabelStyle: {
            color: colors.white,
          },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name='home-sharp' size={24} color={colors.white} />
            ) : (
              <Ionicons
                name='ios-home-outline'
                size={24}
                color={colors.white}
              />
            ),
        }}
      />
      <Tab.Screen
        name='PlacesScreens'
        component={PlacesScreens}
        options={{
          headerShown: false,
          tabBarLabel: "Places",
          tabBarLabelStyle: {
            color: colors.white,
          },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <FontAwesome5 name='search' size={24} color={colors.white} />
            ) : (
              <AntDesign name='search1' size={24} color={colors.white} />
            ),
        }}
      />
      <Tab.Screen
        name='SavedScreens'
        component={SavedScreens}
        options={{
          headerShown: false,
          tabBarLabel: "Saved",
          tabBarLabelStyle: {
            color: colors.white,
          },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <AntDesign name='heart' size={24} color={colors.white} />
            ) : (
              <AntDesign name='hearto' size={24} color={colors.white} />
            ),
        }}
      />
      <Tab.Screen
        name='ProfileScreens'
        component={ProfileScreens}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            color: colors.white,
          },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <FontAwesome5 name='user-alt' size={24} color={colors.white} />
            ) : (
              <FontAwesome5 name='user' size={24} color={colors.white} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
