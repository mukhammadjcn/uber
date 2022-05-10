import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 4,
        backgroundColor: "white",
        paddingHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Search" />
      <Icon icon="ios-briefcase" text="Shopping" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="person-sharp" text="Account" />
    </View>
  );
}

const Icon = ({ icon, text }) => (
  <View>
    <Ionicons
      name={icon}
      size={25}
      style={{
        marginBottom: 5,
        alignSelf: "center",
      }}
    />
    <Text>{text}</Text>
  </View>
);
