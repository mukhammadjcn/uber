import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.main}>
        {/* Header tabs */}
        <HeaderTabs />

        {/* Search bar */}
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#eee",
    flex: 1,
  },
  main: {
    backgroundColor: "white",
    marginTop: 12,
    marginHorizontal: 12,
    borderRadius: 12,
  },
});
