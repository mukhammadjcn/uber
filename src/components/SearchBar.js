import React, { useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar({ getQuery }) {
  const query = {
    key: "AIzaSyBJrHm5bnHCthxbxf5ZnuZvB56jnNN4a5I",
    language: "en",
  };
  const ref = useRef();

  return (
    <View style={styles.searchBar}>
      <View style={styles.locationIcon}>
        <Ionicons name="location-sharp" size={24} />
      </View>
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder="Search"
        styles={styles.input}
        query={query}
        onPress={getQuery}
      />
      <View style={styles.right}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            ref.current?.setAddressText("");
          }}
        >
          <Ionicons name="close-circle" size={20} />
        </TouchableOpacity>
        {/* <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.searchBtn}>Search</Text>
        </TouchableOpacity> */}
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
    position: "relative",
    textInput: {
      height: 36,
      marginTop: 5,
      backgroundColor: "#EEEEEE",
    },
    listView: {
      position: "absolute",
      top: 48,
      backgroundColor: "white",
      left: -20,
      width: "120%",
      padding: 4,
      borderRadius: 4,
    },
    poweredContainer: {
      display: "none",
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
