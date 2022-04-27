import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import data from "../assets/animations/noData.json";

export default function noData() {
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        height: 500,
        justifyContent: "center",
      }}
    >
      <LottieView
        autoPlay={true}
        loop={true}
        source={data}
        style={{ width: 320, height: 320 }}
      />
    </View>
  );
}
