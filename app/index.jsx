import React, { useState } from "react";
//import rn 套件
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import NavBottomButton from "../components/NavBottomButton";
import StarRating from "../components/StarRating";
//第一層書
//第一層書
const bookData = [
  {
    id: "1",
    title: "Fashionopolis",
    subtitle: "Dana Thomas",
    image: require("../assets/pic1.png"),
  },
  {
    id: "2",
    title: "Chanel",
    subtitle: "Patrick Mauriès",
    image: require("../assets/pic2.png"),
  },
  {
    id: "3",
    title: "Calligraphy",
    subtitle: "June & Lucy",
    image: require("../assets/pic3.png"),
  },
];
//第二層書
const newest = [
  {
    id: "1",
    title: "Yves Saint Laurent",
    subtitle: "Suzy Menkes ",
    rating: 4.0,
    image: require("../assets/pic4.png"),
  },
  {
    id: "2",
    title: "The Book of Signs",
    subtitle: "Rudolf Koch",
    rating: 3.0,
    image: require("../assets/pic5.png"),
  },
  {
    id: "3",
    title: "Stitched Up",
    subtitle: "Tansy E. Hoskins",
    rating: 3.0,
    image: require("../assets/pic6.png"),
  },
];
//最上方按鈕
const NavTopButton = () => {
  const [isPressed, setIsPressed] = useState("1"); //用01紀錄 預設1

  const navbutton = [
    {
      id: "1",
      label: "menu",
      image: require("../assets/icon_menu.png"),
      touched: require("../assets/icon_menu.png"),
    },
    {
      id: "2",
      label: "search",
      image: require("../assets/icon_search.png"),
      touched: require("../assets/icon_search.png"),
    },
  ];

  return (
    <View style={styles.NavTopButton}>
      {navbutton.map((item) => {
        const isSelected = isPressed === item.id;

        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => setIsPressed(item.id)} // 更新
            style={styles.navItemContainer}
          >
            <Image
              source={isSelected ? item.touched : item.image}
              style={styles.navIcon}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const App = () => {
  const router = useRouter(); //路由

  return (
    <SafeAreaView style={styles.container}>
      
      <NavTopButton />
      <ScrollView>
        <Text style={styles.sectionHeader}>Popular Books</Text>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
          {bookData.map((item) => (
            <View key={item.id} style={styles.popularbooks}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionHeader}>Newest</Text>
        <ScrollView horizontal>
          {newest.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                router.push({
                  pathname: "/details",
                  params: {
                    id: item.id,
                  },
                })
              }
            >
              <View style={styles.popularbooks}>
                <Image source={item.image} style={styles.image} />
                <StarRating rating={item.rating} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      <NavBottomButton />
    </SafeAreaView>
  );
};
// 樣式設定

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#131313",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
  },
  popularbooks: {
    flexDirection: "column",
    alignItems: "left",
    marginBottom: 10,
    overflow: "hidden",
    marginLeft: 14,
  },
  image: {
    width: 140,
    height: 200,
    borderRadius: 5,
    marginBottom: 7,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#131313",
    marginTop: 5,
  },
  subtitle: {
    fontSize: 12,
    color: "#666666",
    marginTop: 3,
  },
  horizontalScroll: {
    paddingLeft: 20,
    marginBottom: 20,
  },

  label: {
    fontSize: 12,
    color: "#666666",
  },
  rating: {
    marginLeft: 10,
  },

  bottomnav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 56,
    backgroundColor: "#ffffff",
    borderTopWidth: 0.1,
  },
  buttomNavButton: {
    alignItems: "center",
  },
  navItemContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  navIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  // 單個按鈕
  navbutton: {
    //flex: 1,
    //alignItems: "center",
  },
  NavTopButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});

export default App;
