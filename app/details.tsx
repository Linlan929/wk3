import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import NavBottomButton from "../components/Nav";
import React, { useState } from "react";
import StarRating from "../components/StarRating";

const newest = [
  {
    id: "1",
    title: "Yves Saint Laurent",
    subtitle: "Suzy Menkes",
    image: require("../assets/4.png"),
    rating: 4.0,
    description:
      "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
  },
  {
    id: "2",
    title: "The Book of Signs",
    subtitle: "Rudolf Koch",
    image: require("../assets/5.png"),
    rating: 3.0,
    description:
      "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
  },
  {
    id: "3",
    title: "Stitched Up",
    subtitle: "Tansy E. Hoskins",
    image: require("../assets/6.png"),
    rating: 3.0,
    description:
      "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.",
  },
];

export default function DetailsScreen() {
  const router = useRouter();
  // 上一頁
  const { id } = useLocalSearchParams();
  const selectedBook = newest.find((book) => book.id === id) || newest[0];
  const { title, subtitle, image, description, rating } = selectedBook;

  const [IsBookmark, setIsBookmark] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.NavTopButton}>
        {/* 返回按鈕 */}
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={require("../assets/icon_back.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>

        {/* 收藏 */}
        <TouchableOpacity onPress={() => setIsBookmark(!IsBookmark)}>
          <Image
            source={
              IsBookmark
                ? require("../assets/icon_nav_bookmark_actived.png")
                : require("../assets/icon_nav_bookmark.png")
            }
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.ratingRow}>
          <StarRating rating={rating} />
          <Text style={styles.ratingText}> {rating}.0 / 5.0</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.buttonOfBuy}>
        <Text style={styles.buttonText}>BUY NOW FOR $46.99</Text>
      </View>

      <NavBottomButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  NavTopButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  container: { flex: 1, backgroundColor: "#fff" },
  content: { alignItems: "center" },
  image: { width: 200, height: 300, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: "bold", marginTop: 15 },
  subtitle: { fontSize: 14, color: "#666", marginVertical: 7 },
  description: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 24,
    margin: 10,
    paddingHorizontal: 20,
  },
  ratingRow: { flexDirection: "row", alignItems: "center" },
  ratingText: { fontSize: 14, color: "#666" },
  buttonOfBuy: {
    backgroundColor: "#6200ee",
    paddingVertical: 15,
    marginHorizontal: 60,
    borderRadius: 7,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
