import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { getRecipeById } from "../services/RecipesService";

const SpecificCocktail = ({ route, navigation }) => {
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    console.log(`Fetching recipe ${recipeId}`);
    getRecipeById(recipeId).then(recipe => {
      console.log(recipe);
      setRecipe(recipe);
    });
  }, [recipeId]);

  if (!recipe) {
    return <Text>Loading...</Text>;
  }

  const img = !recipe.imgUrl.startsWith("http") ? null : (
    <Image
      source={{
        uri: recipe.imgUrl,
        width: 128,
        height: 128,
      }}
      resizeMode={
        "cover" /* 'cover' zooms into to fill, 'contain' shows whole image */
      }
    />
  );

  return (
    <View className="flex flex-column">
      {img}
      <Text>SpecificCocktail recipeId={recipeId}</Text>
      {Object.keys(recipe).map(key => {
        return;
        <Text key={key}>
          {key} = {JSON.stringify(recipe[key])}
        </Text>;
      })}
      <Text> {recipe.description}</Text>
    </View>
  );
};

export default SpecificCocktail;
