import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../constants/colors.js";
import { Shadow } from "../constants/shadow.js";
import Heart from "./Heart.js";

import Rating from "./Rating.js";
import TextInter from "./TextInter.js";

export default function PlaceBig({
  getId,
  item,
  img,
  name,
  location,
  rating,
  reviews,
}) {
  return (
    <Pressable
      style={[styles.mainContainer, Shadow]}
      onPress={() => getId(item.id)}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: img }} />
        <View style={styles.iconContainer}>
          <Heart item={item} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <TextInter style={styles.name}>{name}</TextInter>
          <TextInter style={styles.descrText}>{location}</TextInter>
        </View>
        <View style={styles.ratingContainer}>
          <Rating rating={rating} reviews={reviews} vertical />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: 242,
    height: 189,
    padding: 12,
    borderRadius: 20,
  },
  imageContainer: {},
  image: {
    width: 218,
    height: 116,
    borderRadius: 20,
    position: "relative",
    marginBottom: 8,
  },
  iconContainer: {
    position: "absolute",
    right: 12,
    bottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    marginBottom: 2,
    fontSize: 14,
    fontFamily: "Inter_700Bold",
  },
  ratingContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  descrText: {
    marginTop: 2,
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: Colors.gray2,
  },
});
