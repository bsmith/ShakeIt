import { View, Text } from "react-native";
import React from "react";

import CocktailList from '../components/CocktailList';

const SearchResults = ({route, navigation}) => {
  const { results } = route.params;

  return (
    <View>
      <Text>SearchResults</Text>
      <Text>{JSON.stringify(results)}</Text>
      <CocktailList cocktails={results} />
    </View>
  );
};

export default SearchResults;
