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
        <Icon
          icon={el.icon}
          text={el.text}
          page={page}
          setPage={setPage}
          key={el.text}
        />
      ))}
    </View>
  );
}

const Icon = ({ icon, text, page, setPage }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={() => setPage(text)}>
    <View>
      <Ionicons
        name={icon}
        size={25}
        style={{
          paddingBottom: 5,
          alignSelf: "center",
        }}
      />
      <Text
        style={[
          page == text ? { fontFamily: "Feather" } : "",
          { paddingBottom: 8 },
        ]}
      >
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);
