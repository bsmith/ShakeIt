import { View, Text, ScrollView, Pressable, Button } from "react-native";
import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import categoriesData from "../examples/CategoriesData";
import recipeData from "../examples/RecipeData";

const CategoriesContainer = () => {
  const navigation = useNavigation();

  const pressRecipe = useCallback((recipeKey) => {
    console.log(`pressRecipe: ${recipeKey}`);
    navigation.navigate('SpecificCocktail', { recipeKey: recipeKey })
  }, []);

  /* Should probably be a SectionList */
  return (
    <ScrollView className="flex flex-column">
      <Text>CategoriesContainer</Text>

      { Object.keys(categoriesData).map(catKey => {
        const category = categoriesData[catKey];
        const recipes = Object.keys(category.members).map(recipeKey => {
          const recipe = {...recipeData[recipeKey]};
          recipe.key = recipeKey;
          return recipe;
        })
        const recipeItems = recipes.map(recipe => {
          return <Pressable
              key={recipe.key}
              className="h-12"
              onPress={() => pressRecipe(recipe.key)}
            >
            <Text>{recipe.name}</Text>
          </Pressable>
        });
        return <>
          <Text className="font-bold text-xl text-center">
            {category.name}
          </Text>
          {recipeItems}
        </>
      }) }

      <Text className="font-bold text-4xl text-center">
        Raw JSON
      </Text>
      {/* Font support is a complex issue */}
      {/*<Text className="font-mono">*/}
      <Text>
        { JSON.stringify(categoriesData) }
      </Text>
      <Text>
        { JSON.stringify(recipeData) }
      </Text>
    </ScrollView>
  );
};

export default CategoriesContainer;
