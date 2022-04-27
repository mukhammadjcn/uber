import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurentList from "../components/RestaurentList";
import Restaurents from "../assets/data/restaurants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.body(insets.bottom)]}>
      {/* Header */}
      <View style={styles.main}>
        {/* Header tabs */}
        <HeaderTabs />

        {/* Search bar */}
        <SearchBar />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories list */}
        <Categories />

        {/* Restaurent List */}
        <RestaurentList list={Restaurents} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: (bottom) => ({
    backgroundColor: "#eee",
    flex: 1,
    paddingBottom: bottom,
  }),
  main: {
    backgroundColor: "white",
    marginTop: 12,
    borderRadius: 12,
    marginHorizontal: 12,
  },
});
