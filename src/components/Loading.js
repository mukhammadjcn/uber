import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import data from "../assets/animations/loading.json";

export default function Loading() {
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
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
