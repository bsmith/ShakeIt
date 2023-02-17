import { View, ScrollView } from "react-native";
import React from "react";

import CocktailList from "../components/SpecificCategory/CocktailList";
import ButtonsFooter from "../components/ButtonsFooter";

const SearchResults = ({ route }) => {
  const { results } = route.params;

  return (
    <View className="bg-beach-200 flex-1 dark:bg-beach-900 dark:text-white-50">
      <ScrollView>
        <View className=" flex-1 dark:text-white-50 ">
          <CocktailList cocktails={results} />
        </View>
      </ScrollView>
      <View>
        <ButtonsFooter />
      </View>
    </View>
  );
};

export default SearchResults;
