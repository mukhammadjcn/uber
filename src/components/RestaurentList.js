import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const RestaurentItem = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.item}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Restaurant")}
      >
        {data.image_url && (
          <Image source={{ uri: data.image_url }} style={styles.image} />
        )}
        <View style={styles.info}>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.row}>
            <View style={styles.rowItem}>
              <Ionicons name="star" size={20} color={"#FCD900"} />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 4,
                }}
              >
                <Text style={{ fontSize: 16, fontFamily: "Feather" }}>
                  {data.rating}
                </Text>
                <Text style={{ fontSize: 12, marginLeft: 4, color: "#C9CCD5" }}>
                  ({data.review_count})
                </Text>
              </View>
            </View>
            <View style={styles.rowItem}>
              <Ionicons name="time-outline" size={20} />
              <Text
                style={{ fontSize: 16, marginLeft: 4, fontFamily: "Feather" }}
              >
                15/20 min
              </Text>
            </View>
            <View style={styles.rowItem}>
              <Ionicons name="md-wallet-outline" size={20} />
              <Text style={{ fontSize: 16, marginLeft: 4 }}>{data.price}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const RestaurentList = ({ list }) => {
  return (
    <View style={styles.list}>
      {list.map((el) => (
        <RestaurentItem data={el} key={el.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: { height: 240, width: "100%", borderRadius: 8 },
  item: {
    backgroundColor: "white",
    // paddingHorizontal: 12,
    borderRadius: 12,
    position: "relative",
    marginVertical: 6,
  },
  info: {
    position: "absolute",
    bottom: 8,
    paddingVertical: 12,
    backgroundColor: "white",
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
    fontFamily: "Octicons",
  },
  list: {
    marginHorizontal: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  rowItem: { flexDirection: "row", alignItems: "center", marginRight: 12 },
});

export default RestaurentList;
