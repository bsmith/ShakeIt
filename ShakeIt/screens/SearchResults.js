import { View, Text } from "react-native";
import React from "react";

const SearchResults = ({route, navigation}) => {
  const { results } = route.params;

  return (
    <View>
      <Text>SearchResults</Text>
      <Text>{JSON.stringify(results)}</Text>
    </View>
  );
};

export default SearchResults;
