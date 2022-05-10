import "react-native-gesture-handler";
import Home from "./src/screens/Home";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <RootNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
