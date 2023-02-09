import { View, Text } from "react-native";
import React from "react";

import CocktailList from '../components/SpecificCategory/CocktailList';

const SearchResults = ({route, navigation}) => {
  const { results } = route.params;

  return (
    <View>
      <CocktailList cocktails={results} />
    </View>
  );
};

export default SearchResults;
