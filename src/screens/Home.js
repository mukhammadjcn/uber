import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurentItem from "../components/RestaurentItem";

export default function Home() {
  return (
    <SafeAreaView style={styles.body}>
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

        {/* Restaurent item */}
        <RestaurentItem />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#eee",
    paddingHorizontal: 12,
    flex: 1,
  },
  main: {
    backgroundColor: "white",
    marginTop: 12,
    borderRadius: 12,
  },
});
