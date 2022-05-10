import { StyleSheet, View, ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurentList from "../components/RestaurentList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";
import Loading from "../components/Loading";
import NoData from "../components/NoData";

export default function Home() {
  const [restaurants, setRestaurants] = useState();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("usa");
  const [loading, setLoading] = useState(false);

  const getResturantsFromYelp = async (city) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`,
        {
          headers: {
            Authorization: `Bearer jnwUOhBB1J4uxGN9EBq9jKaR9YNh5_ZsfgL-IIhJQ5I-7k1Um1i6J-Rau7dgn4YoGp0bLAhxYINn3dYkFHIBz1P8mUYMgjb-F9x-0RrU96uo1KR1R0qVu5mfDGlPYnYx`,
          },
        }
      );
      setRestaurants(data.businesses);
    } catch {
      setRestaurants([]);
    }
    setLoading(false);
  };
  const getQuery = (data) => {
    setQuery(data.terms[0].value);
    getResturantsFromYelp(query);
  };

  useEffect(() => {
    getResturantsFromYelp("London");
  }, []);

  return (
    <View style={[styles.body(insets.bottom)]}>
      {/* Header */}
      <View style={styles.main}>
        {/* Header tabs */}
        <HeaderTabs />

        {/* Search bar */}
        <SearchBar getQuery={getQuery} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/* Categories list */}
        <Categories />

        {/* Restaurent List */}
        {!loading ? (
          restaurants && restaurants.length > 0 ? (
            <RestaurentList list={restaurants} />
          ) : (
            <NoData />
          )
        ) : (
          <Loading />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: (bottom) => ({
    backgroundColor: "#eee",
    flex: 1,
    paddingBottom: bottom,
  }),
  main: {
    backgroundColor: "white",
    marginTop: 12,
    borderRadius: 12,
    marginHorizontal: 12,
    zIndex: 3,
    elevation: 3,
  },
  scrollView: {
    marginVertical: 16,
  },
});
