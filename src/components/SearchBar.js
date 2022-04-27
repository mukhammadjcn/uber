import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <View style={styles.locationIcon}>
        <Ionicons name="location-sharp" size={24} />
      </View>
      <GooglePlacesAutocomplete placeholder="Search" styles={styles.input} />
      <View style={styles.right}>
        <TouchableOpacity activeOpacity={0.5}>
          <Ionicons name="close-circle" size={20} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.searchBtn}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    margin: 12,
    flexDirection: "row",
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    paddingHorizontal: 16,
    borderRadius: 32,
  },
  input: {
    textInput: {
      height: 36,
      marginTop: 5,
      backgroundColor: "#EEEEEE",
    },
  },
  searchBtn: {
    marginHorizontal: 8,
    fontWeight: "bold",
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 16,
    borderRadius: 6,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
});
