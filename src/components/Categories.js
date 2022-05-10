import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function Categories() {
  const items = [
    {
      image: require("../assets/images/bread.png"),
      text: "Bread",
    },
    {
      image: require("../assets/images/coffee.png"),
      text: "Coffee",
    },
    {
      image: require("../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../assets/images/desserts.png"),
      text: "Desserts",
    },
    {
      image: require("../assets/images/fast-food.png"),
      text: "Fast food",
    },
    {
      image: require("../assets/images/shopping-bag.png"),
      text: "Shopping",
    },
    {
      image: require("../assets/images/soft-drink.png"),
      text: "Drinks",
    },
  ];
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {items.map((el) => (
          <TouchableOpacity activeOpacity={0.8} key={el.text}>
            <View style={styles.categoriesItem}>
              <Image source={el.image} style={styles.categorieImg} />
              <Text>{el.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    // backgroundColor: "white",
    marginBottom: 16,
    paddingHorizontal: 12,
    zIndex: 2,
    elevation: 2,
  },
  categoriesItem: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 6,
    width: 92,
    height: 92,
    margin: 4,
  },
  categorieImg: {
    width: 60,
    height: 60,
  },
});

export default Categories;
