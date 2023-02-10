import { View, Text } from "react-native";
import React from "react";

import CocktailList from '../components/SpecificCategory/CocktailList';

const SearchResults = ({route, navigation}) => {
  const { results } = route.params;

  return (
    <View className="bg-beach-200 flex-1 dark:bg-beach-900 dark:text-white-50">
      <CocktailList cocktails={results} />
    </View>
  );
};

export default SearchResults;
