import { View, Text, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { getRecipeById } from "../services/RecipesService";
import SCTabs from "../components/SpecificCocktail/SCTabs";
import SCComments from "../components/SpecificCocktail/SCComments";
import CocktailDescription from "../components/SpecificCocktail/CocktailDescription";

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


  return (
    <ScrollView className="h-full" contentContainerStyle={{ flexGrow: 1 }}>
      {/* <View className=""> */}
        <View className="">
          <CocktailDescription recipe={recipe} />
        </View>
        {/* <View className="h-3/5"> */}
        {/* <View style={{height: 300}}> */}
        <View style={{ overflow: 'scroll' }}>
          <SCTabs recipe={recipe} />
          {/* <SCComments /> */}
        </View>

        <Text>Bottom</Text>
      {/* </View> */}
    </ScrollView>
  )
}

export default SpecificCocktail;
