import * as React from "react";
import { createStackNavigator } from "react-navigation/Stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Restaurant from "./src/screens/Restaurant";

export default function RootNagivation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" components={Home} />
        <Stack.Screen name="Restaurant" components={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
