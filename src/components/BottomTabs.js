import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

export default function BottomTabs({ page, setPage }) {
  const navigation = [
    {
      icon: "home",
      text: "Home",
    },
    {
      icon: "search",
      text: "Search",
    },
    {
      icon: "ios-briefcase",
      text: "Shopping",
    },
    {
      icon: "receipt",
      text: "Orders",
    },
    {
      icon: "person-sharp",
      text: "Account",
    },
  ];
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
      {navigation.map((el) => (
        <Icon icon={el.icon} text={el.text} />
      ))}
    </View>
  );
}

const Icon = ({ icon, text }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={() => alert(text)}>
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
  </TouchableOpacity>
);
