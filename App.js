import Home from "./src/screens/Home";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <Home />
    </SafeAreaProvider>
  );
};

export default App;
