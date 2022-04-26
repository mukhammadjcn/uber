import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";

export default function Home() {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.main}>
        <HeaderTabs />
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
    borderRadius: 16,
  },
});
