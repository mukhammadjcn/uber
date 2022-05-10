import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function HeaderTabs({ tab, setTab }) {
  return (
    <>
      <View style={styles.header}>
        {/* Tab 1 */}
        <HeaderButton name="delivery" setTab={setTab} tab={tab} />

        {/* Tab 2 */}
        <HeaderButton name="pickup" setTab={setTab} tab={tab} />
      </View>
    </>
  );
}

const HeaderButton = ({ name, setTab, tab }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => setTab(name)}
      style={[styles.tab, tab == name ? styles.tabActive : ""]}
    >
      <Text style={[styles.tab.text, tab == name ? styles.tabActive.text : ""]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignSelf: "center",
    paddingVertical: 12,
  },
  tab: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 30,
    marginHorizontal: 8,
    text: {
      color: "black",
      fontSize: 16,
      fontFamily: "Feather",
      textTransform: "capitalize",
    },
  },
  tabActive: {
    backgroundColor: "black",
    text: {
      color: "white",
    },
  },
});
