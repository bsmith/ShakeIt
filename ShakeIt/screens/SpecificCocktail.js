import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import recipeData from "../examples/RecipeData";

const SpecificCocktail = ({ route, navigation }) => {
  const { recipeKey } = route.params;
  const recipe = recipeData[recipeKey];

  return (
    <View className="flex flex-column">
      <Text>SpecificCocktail recipeKey={recipeKey}</Text>
      { Object.keys(recipe).map(key => {
        return <Text key={key}>{key} = {JSON.stringify(recipe[key])}</Text>
      }) }
    </View>
  );
};

export default SpecificCocktail;
