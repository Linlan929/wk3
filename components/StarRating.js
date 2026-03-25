import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const starActive = require("../assets/icon_star_filled.png");
const starInactive = require("../assets/icon_star_empty.png");
const StarRating = ({ rating = 0 }) => {
  // star陣列
  let stars = Array(5).fill(starInactive);

  stars.fill(starActive, 0, rating);

  return (
    <View style={{ flexDirection: "row" }}>
      {stars.map((starSource, index) => (
        <Image
          key={index}
          source={starSource}
          style={{ width: 14, height: 14, marginRight: 4 }}
        />
      ))}
    </View>
  );
};
export default StarRating;