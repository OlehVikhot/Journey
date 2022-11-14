import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Colors } from "../../constants/colors";

import MainScreens from "./MainScreens/MainScreens";
import PlacesScreens from "./PlacesScreens/PlacesScreens";
import SavedScreens from "./SavedScreens/SavedScreens";
import ProfileScreens from "./ProfileScreens/ProfileScreens";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { parseData } from "../../store/savedSlice";
import { setLocation } from "../../store/authSlice";

import { NEWDATA } from "../../util/DataNew";
import { pickLocation } from "../../util/location";

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
          backgroundColor: Colors.purple1,
        },
      }}
    >
      <Tab.Screen
        name="MainScreens"
        component={MainScreens}
        options={{
          headerShown: false,
          tabBarLabel: "Main",
          tabBarLabelStyle: {
            color: Colors.white,
          },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="home-sharp" size={24} color={Colors.white} />
            ) : (
              <Ionicons
                name="ios-home-outline"
                size={24}
                color={Colors.white}
              />
            ),
        }}
      />
      <Tab.Screen
        name="PlacesScreens"
        component={PlacesScreens}
        options={{
          headerShown: false,
          tabBarLabel: "Places",
          tabBarLabelStyle: {
            color: Colors.white,
          },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <FontAwesome5 name="search" size={24} color={Colors.white} />
            ) : (
              <AntDesign name="search1" size={24} color={Colors.white} />
            ),
        }}
      />
      <Tab.Screen
        name="SavedScreens"
        component={SavedScreens}
        options={{
          headerShown: false,
          tabBarLabel: "Saved",
          tabBarLabelStyle: {
            color: Colors.white,
          },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <AntDesign name="heart" size={24} color={Colors.white} />
            ) : (
              <AntDesign name="hearto" size={24} color={Colors.white} />
            ),
        }}
      />
      <Tab.Screen
        name="ProfileScreens"
        component={ProfileScreens}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            color: Colors.white,
          },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <FontAwesome5 name="user-alt" size={24} color={Colors.white} />
            ) : (
              <FontAwesome5 name="user" size={24} color={Colors.white} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
