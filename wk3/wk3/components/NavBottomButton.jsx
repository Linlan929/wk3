import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const NavBottomButton = () => {
  const [isPressed, setIsPressed] = useState("1"); //用01紀錄 預設1

  const buttomNavButton = [
    {
      id: "1",
      label: "Home",
      image: require("../assets/icon_home.png"),
      touched: require("../assets/icon_home_actived.png"),
    },
    {
      id: "2",
      label: "Wishlist",
      image: require("../assets/icon_nav_bookmark.png"),
      touched: require("../assets/icon_nav_bookmark_actived.png"),
    },
    {
      id: "3",
      label: "My books",
      image: require("../assets/icon_mybook.png"),
      touched: require("../assets/icon_mybook_actived.png"),
    },
  ];

  return (
    <View style={styles.bottomnav}>
      {/*  .map() 迴圈渲染按鈕 */}
      {buttomNavButton.map((item) => {
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
            <Text
              style={[
                styles.label,
                { color: isSelected ? "#6200ee" : "#666666" },
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
 
        
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  bottomnav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 56,
    backgroundColor: "#ffffff",
    borderTopWidth: 0.1,
    borderTopColor: "#d0cdcd",

    position: 'absolute',    // 絕對定位
    bottom: 0,               // 貼緊底部
    left: 0,                 // 貼緊左邊
    right: 0,                // 貼緊右邊
    
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
    flex: 1,
    //alignItems: "center",
  },
  NavTopButton: {
    flex: 1,
    alignItems: "center",
    // width: "100%",
    height: 56,
    justifyContent: "space-between",
  },
});



export default NavBottomButton;