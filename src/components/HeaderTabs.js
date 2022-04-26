import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [tab, setTab] = useState("Delivery");
  return (
    <>
      <View style={styles.header}>
        {/* Tab 1 */}
        <HeaderButton name="Delivery" setTab={setTab} tab={tab} />

        {/* Tab 2 */}
        <HeaderButton name="Pickup" setTab={setTab} tab={tab} />
      </View>
    </>
  );
}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.setTab(props.name)}
      style={[styles.tab, props.tab == props.name ? styles.tabActive : ""]}
    >
      <Text
        style={[
          styles.tab.text,
          props.tab == props.name ? styles.tabActive.text : "",
        ]}
      >
        {props.name}
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
      fontWeight: "bold",
    },
  },
  tabActive: {
    backgroundColor: "black",
    text: {
      color: "white",
    },
  },
});
